# EManual-gitbook-cli [![v](https://img.shields.io/npm/v/emanual-gitbook-cli.svg)](https://www.npmjs.com/package/emanual-gitbook-cli) ![dep](https://img.shields.io/david/EManual/EManual-GitBook-cli.svg) ![devDep](https://img.shields.io/david/dev/strongloop/express.svg)
EManual :heart: GitBook  with cli 

## 使用

### 根据`SUMMARY.md`创建`summary.json`

详情：[issue #1](https://github.com/EManual/EManual-GitBook-cli/issues/1)    
```shell
$ gitbook-ext summary [-f --format]  [-o --out] summary.json SUMMARY.md 
```

### 压缩给定目录下的html/css/js

详情：[issue #2](https://github.com/EManual/EManual-GitBook-cli/issues/2)
```shell
$ gitbook-ext minify <folder> 
```

### 合并多个json文件

详情：[issue #6](https://github.com/EManual/EManual-GitBook-cli/issues/6)
```shell
$ cd test/fixtures
$ gitbook-ext jsonmerge json/a.json json/c.json > result.json
$ gitbook-ext jsonmerge json/a.json json/b.json > result.json
$ gitbook-ext jsonmerge json/*.json > result.json
```

## 开发

```
nvm use
npm link .
#remove
npm unlink .
```
