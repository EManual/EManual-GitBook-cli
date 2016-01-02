#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')

program
  .version(pkg.version)
  .command('summary <file>', 'create summary.json from SUMMARY.md')
  .command('minify <folder>', 'minify the resource in given folder')
  .parse(process.argv);