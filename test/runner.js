"use strict";

const fs = require("fs"),
  assert = require("chai").assert,
  lib = require("../tasks/lib/index");

const replacements = lib({
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

describe("Fixtures to Expected", () => {
  fs.readdirSync("test/fixtures/").forEach(file => {
    it("should properly convert " + file, function() {
      const expectedFile = "test/expected/" + file.replace(".less", ".scss");
      assert.isTrue(fs.existsSync(expectedFile, "utf8"));
      assert.equal(
        fs.readFileSync(expectedFile, "utf8"),
        transform("test/fixtures/" + file)
      );
    });
  });
});
