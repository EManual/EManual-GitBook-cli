#!/usr/bin/env node

'use strict'
const program = require('commander')
const gitbookParsers = require('gitbook-parsers')
const fs = require('fs')

program
  .option('-f, --format ', 'format the json, default: false', false)
  .option('-i, --input [input]', 'the given TOC file, default:SUMMARY.md', 'SUMMARY.md')
  .option('-o, --output [output]', 'the output file, default:summary.json', 'summary.json')
  .parse(process.argv)

let parser = gitbookParsers.getForFile(program.input)

parser
  .summary(fs.readFileSync(program.input, {encoding: 'utf-8'}))
  .then(function (summary) {
    if (program.format) {
      console.log()
      fs.writeFileSync(program.output, JSON.stringify(summary, null, 4), {encoding: 'utf-8'})
    } else {
      fs.writeFileSync(program.output, JSON.stringify(summary, null, 0), {encoding: 'utf-8'})
    }
  })
