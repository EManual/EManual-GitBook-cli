#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')

program
  .version(pkg.version)
  .command('summary <file>', 'create summary.json from SUMMARY.md')
  .command('minify <folder>', 'minify the resource file(.html .js .css)')
  .command('jsonmerge <source...>', 'merge the source json file to dest json file')
//   .command('package <fol>')
  .parse(process.argv);
