"use strict";

var fs = require("fs"),
  assert = require("chai").assert,
  lib = require("../tasks/lib/index");

function transform(filepath, replacements) {
  return [fs.readFileSync(filepath, "utf8")]
    .concat(replacements)
    .reduce(function(source, item) {
      return source.replace(item.pattern, item.replacement);
    });
}

describe("test config", function () {
  var replacements = lib({
    excludes: ["default"],
    replacements: []
  });

  it("replacements in proper order", function () {
    var curr = 0;
    for (var i = 0; i < replacements.length; i++) {
      assert.isTrue(curr <= replacements[i].order);
      curr = replacements[i].order;
    }
  });

  it("honors exclusions", function () {
    for (var i = 0; i < replacements.length; i++) {
      if (typeof replacements[i].replacement === "string") {
        assert.equal(-1, replacements[i].replacement.indexOf("default"));
      }
    }
  });
});

describe("test fixtures", function () {
  fs.readdirSync("test/fixtures/").forEach(function (file) {
    if (file === "default.less") {
      return; // tested later
    }
    it("should properly convert " + file, function() {
      var replacements = lib({
        excludes: ["default"], // exclude to preserve variables
        replacements: []
      });
      var expectedFile = "test/expected/" + file.replace(".less", ".scss");
      assert.isTrue(fs.existsSync(expectedFile, "utf8"));
      assert.equal(
        fs.readFileSync(expectedFile, "utf8"),
        transform("test/fixtures/" + file, replacements)
      );
    });
  });

  // Test default.js
  it("should properly convert default.less", function() {
    var replacements = lib({
      excludes: [ // exclude all but default and variables
        "@extend", "@import", "@include", "@include_nested",
        "@mixin", "adjust-hue", "condition", "ie-hex-str",
        "important", "interpolation", "mix", "rgba", "unquote"
      ],
      replacements: []
    });
    assert.equal(
      fs.readFileSync("test/expected/default.scss", "utf8"),
      transform("test/fixtures/default.less", replacements)
    );
  });
});
