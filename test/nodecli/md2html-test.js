const assert = require("assert");
const fs = require("fs");
const path = require("path");
const md2html = require("../../nodecli/md2html");
const fixturesDirPath = '../fixtures/';

it("converts Markdown to HTML (GFM=false)", () => {
  // fs.readFileSyncは同期的にファイルを読み込むメソッド
  const sample = fs.readFileSync(path.resolve(__dirname, fixturesDirPath + "sample.md"), { encoding: "utf8" });
  const expected = fs.readFileSync(path.resolve(__dirname, fixturesDirPath + "expected.html"), { encoding: "utf8" });

  assert.strictEqual(md2html(sample, { gfm: false }), expected);
});

it("converts Markdown to HTML (GFM=true)", () => {
  const sample = fs.readFileSync(path.resolve(__dirname, fixturesDirPath + "sample.md"), { encoding: "utf8" });
  const expected = fs.readFileSync(path.resolve(__dirname, fixturesDirPath + "expected-gfm.html"), { encoding: "utf8" });

  assert.strictEqual(md2html(sample, { gfm: true }), expected);
});
