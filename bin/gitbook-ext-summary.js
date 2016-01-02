#!/usr/bin/env node

'use strict'
const program = require('commander')
const gitbookParsers = require('gitbook-parsers')
const fs = require('fs')

program
  .arguments('<file>')
  .description('create summary.json from the given TOC file like SUMMARY.md')
  .option('-f, --format ', 'format the json, default: false', false)
  .option('-o, --output [output]', 'the output file, default:summary.json', 'summary.json')
  .action(function (file, options) {
    let parser = gitbookParsers.getForFile(file)

    parser
      .summary(fs.readFileSync(file, {encoding: 'utf-8'}))
      .then(function (summary) {
        let result = ''
        if (program.format) {
          result = JSON.stringify(summary, null, 4), {encoding: 'utf-8'}

        } else {
          result = JSON.stringify(summary, null, 0), {encoding: 'utf-8'}
        }
        fs.writeFileSync(program.output, result)
        console.log(result)
      })
  })
  .parse(process.argv)
