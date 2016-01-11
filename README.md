# EManual-gitbook-cli [![v](https://img.shields.io/npm/v/emanual-gitbook-cli.svg)](https://www.npmjs.com/package/emanual-gitbook-cli) ![dep](https://img.shields.io/david/EManual/EManual-GitBook-cli.svg) ![devDep](https://img.shields.io/david/dev/strongloop/express.svg)
EManual :heart: GitBook  with cli 

## 使用

### 根据`SUMMARY.md`创建`summary.json`
    
```shell
$ gitbook-ext summary [-f --format]  [-o --out] summary.json SUMMARY.md 
```

### 压缩给定目录下的html/css/js

```shell
$ gitbook-ext minify <folder> 
```

## 开发

```
nvm use
npm link .
#remove
npm unlink .
```
