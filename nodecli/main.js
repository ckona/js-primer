const program = require('commander');
const fs = require('fs');
const marked = require('marked');

program.option('--gfm', 'GFMを有効にする');
program.parse(process.argv);
const filePath = program.args[0];

const cliOptions = {
  gfm: false,
  ...program.opts(),
};

fs.readFile(filePath, { encoding: 'utf-8' }, (error, file) => {
  if (error) {
    console.error(error.message);
    process.exit(1);
    return;
  }

  // Markdown ファイルを HTML に変換
  const html = marked(file, {
    gfm: cliOptions.gfm
  });
  console.log(html);
});
