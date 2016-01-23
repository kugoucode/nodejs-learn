# VIM 插件集合

## VIM 插件查看小窍门
```
# 安装
  1、可以使用VIM插件管理工具安装，如 Vundle [http://guqian110.github.io/pages/2014/04/16/learning_vim_vundle.html]
  2、或者直接下载插件
  `mkdir ~/.vim/doc ~/.vim/plugin ~/.vim/syntax/`
  `cp *.vim ~/.vim/plugin/`
  
# 配置
查看安装好后，一定记得查看是否需要配置文件（`~/.vimrc`），以及如何运用该插件

# 查看
当我们安装上一个插件不知道他的使用方式时，可以通过两种方式查看：
  1、直接查看插件源码
  2、或者百度一下
```

## VIM tree 插件 （NERD_tree.vim） [推荐]

### DESC
Linux终端可以在当前页面查看文件列表目录树的插件
### 配置说明
``` bash
vim ~/.vimrc

nnoremap <silent> <F5> :NERDTree<CR>
```
### 使用方法
```
# Mac 原生键盘 （调用插件）
Fn + F5
# Mac 外接键盘 （调用插件）
Alt + F5

# 目录树窗口与文档编辑窗口切换操作
Ctrl + w + w

# 关闭目录树操作
切换到当前窗口 vim 命令行模式 :q
```


## VIM 文档注释插件 （DoxygenToolkit.vim） [推荐]

### DESC
Linux终端快速为编写程序提供注释的插件
### 配置说明
``` bash
vim ~/.vimrc

let g:DoxygenToolkit_authorName="Mark (mark@fback.cn)"
let s:licenseTag = "Copyright(C)\<enter>"
let s:licenseTag = s:licenseTag . "For free\<enter>"
let s:licenseTag = s:licenseTag . "All right reserved\<enter>"
let g:DoxygenToolkit_licenseTag = s:licenseTag
let g:DoxygenToolkit_briefTag_funcName="yes"
let g:doxygen_enhanced_color=1
```
### 使用方法
```
# License

将光标放在需要生成 License 的地方，然后输入命令 :DoxLic

# Author

将光标放在合适的地方，然后输入命令 :DoxAuthor

# Function / Class

将光标放在 function 或者 class 的名字所在的一行，然后输入命令 :Dox

# Ignore code fragment (C/C++ Only)

如果想忽略调试部分的代码，那么只需要执行命令 :DoxUndoc(DEBUG) 即可

# Group

输入命令 DoxBlock 来插入一个注释块

## 为了方便使用，我们可以自定义一些 map，省去输入命令的繁琐。
```
### 参考文档
> http://guqian110.github.io/pages/2015/01/12/learning_vim_doxygentoolkit.html
> http://segmentfault.com/q/1010000000380438


## VIM 打开文件自动添加文档注释插件 （comdg.vim） [百度开发提供]

### DESC
Linux终端新建文件时自动追加程序文档注释的插件
### 配置说明
```
# 根据不同的语言，可以在文件中指定文件头，此处我自己更改为『<?php』，默认其实是C/C++
```
### 使用方法
```
# 在新创建文件时触发
```


## VIM 快速注释插件 （comments.vim）

### DESC
Linux终端快速代码注释的插件
这个插件用起来还不错，适用于很多种语言：
c, c++, java, php, proc, css, html, htm, xml, xhtml, vim, vimrc, sql, sh, ksh, csh, perl and normal files，还有Ruby
### 配置说明
放到vim的plugin文件夹
### 使用方法
```
# 选择一块(v或者V)，按Ctrl+C来comment，按Ctrl+X来Uncomment。
```
### 参考文档
> http://www.2maomao.com/blog/vim-comments-plugin-modified/


## VIM 快速注释插件 （NERD_commenter.vim） [主要适用于C、C++,不推荐]

### DESC
Linux终端注释代码的插件
### 配置说明
``` bash
vim ~/.vimrc

let mapleader=","
```
### 使用方法
```
,ca，在可选的注释方式之间切换，比如C/C++ 的块注释/* */和行注释//
,cc，注释当前行
,c，切换注释/非注释状态
,cs，以”性感”的方式注释
,cA，在当前行尾添加注释符，并进入Insert模式
,cu，取消注释
Normal模式下，几乎所有命令前面都可以指定行数
Visual模式下执行命令，会对选中的特定区块进行注释/反注释
```
### 参考文档
> http://www.linuxidc.com/Linux/2012-04/58647.htm
> http://blog.chinaunix.net/uid-23381466-id-200230.html