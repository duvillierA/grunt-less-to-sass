"use strict";

var fs = require("fs"),
  assert = require("chai").assert,
  lib = require("../tasks/lib/index");

var replacements = lib({
  excludes: [],
  replacements: []
});

function transform(filepath) {
  return [fs.readFileSync(filepath, "utf8")]
    .concat(replacements)
    .reduce(function(source, item) {
      return source.replace(item.pattern, item.replacement);
    });
}

it("replacements in proper order", function () {
  var curr = 0;
  for (var i = 0; i < replacements.length; i++) {
    assert.isTrue(curr <= replacements[i].order);
    curr = replacements[i].order;
  }
});

describe("test fixtures to expected", function () {
  fs.readdirSync("test/fixtures/").forEach(file => {
    it("should properly convert " + file, function() {
      var expectedFile = "test/expected/" + file.replace(".less", ".scss");
      assert.isTrue(fs.existsSync(expectedFile, "utf8"));
      assert.equal(
        fs.readFileSync(expectedFile, "utf8"),
        transform("test/fixtures/" + file)
      );
    });
  });
});
