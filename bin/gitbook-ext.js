#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')

program
  .version(pkg.version)
  .command('summary [name]', 'create summary.json from SUMMARY.md')
  .parse(process.argv);