#!/usr/bin/env node

'use strict'
const program = require('commander')
const fs = require('fs')
const glob = require('glob')
const path = require('path')
const UglifyJS = require('uglify-js')
const htmlMinifier = require('html-minifier')
var CleanCSS = require('clean-css')

program
  .arguments('<folder>')
  .description('minify the resource file(.html .js .css)')
  .option('-v, --verbo ', 'log for that', false)
  .action(function (folder, options) {
    let html = glob.sync(path.join(folder, '**/*.html'))
    let css = glob.sync(path.join(folder, '**/*.css'))
    let js = glob.sync(path.join(folder, '**/*.js'))
    let log = function (msg) {
      if (options.verbo) {
        console.log(msg)
      }
    }

    let htmlMinifierConfig = {
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true,
      minifyCSS: true
    }
    html.forEach(function (file) {
        log('processing ==>'+file)
        let content = fs.readFileSync(file, {encoding: 'utf-8'})
        let result = htmlMinifier.minify(content, htmlMinifierConfig)
        fs.writeFileSync(file, result, {encoding: 'utf-8'})
    })

    css.forEach(function(file){
        log('processing ==>'+file)
        let content = fs.readFileSync(file, {encoding: 'utf-8'})
        let result = new CleanCSS().minify(content).styles
        fs.writeFileSync(file, result, {encoding: 'utf-8'})
    })

    js.forEach(function (file) {
      log("processing ==> "+file)
      let result = UglifyJS.minify(file)
      fs.writeFileSync(file, result.code, {encoding: 'utf-8'})
    })
  })
  .parse(process.argv)
