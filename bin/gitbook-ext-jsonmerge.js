#!/usr/bin/env node

'use strict'
const program = require('commander')
const gitbookParsers = require('gitbook-parsers')
const fs = require('fs')
const _ = require('lodash')

program
  .arguments('[source...]')
  .description('merge the source json file to dest json file')
  // .option('-f, --format ', 'format the json, default: false', false)
  .action(function (source, options) {
    if (source && source.length >= 1) {
      let result = {}
      source.forEach(function (json_file) {
        let json_string = fs.readFileSync(json_file, {encoding: 'utf-8'})
        result = _.merge(result, JSON.parse(json_string))
      })

      console.log(JSON.stringify(result, null, 4))
    }
  })
  .parse(process.argv)
