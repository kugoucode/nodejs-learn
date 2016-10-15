```bash
[work@st01-img-vip-as56.st01.baidu.com black]$ cat ~/.vimrc
"   file: .vimrc
" author: liushaofen01
"   date: 2014-10-21

set nocompatible

" allow backspacing over everything in insert mode
set backspace=indent,eol,start

set history=50
set ruler
set showcmd
set incsearch
set nobackup
set nu
set smartindent
set autoindent
set ts=4
set sw=4
set tw=100
set expandtab
colorscheme desert

" For Win32 GUI: remove 't' flag from 'guioptions': no tearoff menu entries
" let &guioptions = substitute(&guioptions, "t", "", "g")

noremap <C-m> <ESC>:tabnew
noremap <C-k> <C-y>

noremap <C-H> <C-W><
noremap <C-L> <C-W>>
noremap <C-K> <C-W>-
noremap <C--> <C-W>+

" NERDTree
noremap <F8> <ESC>:NERDTreeMirror<CR>
noremap <F8> <ESC>:NERDTreeToggle<CR>

" TagList
let Tlist_Show_One_File=1
let Tlist_Exit_OnlyWindow=1
let Tlist_Ctags_Cmd="/usr/bin/ctags"
noremap <F5> <ESC>:TlistToggle<CR>

" Don't use Ex mode, use Q for formatting
map Q gq

" CTRL-U in insert mode deletes a lot.  Use CTRL-G u to first break undo,
" so that you can undo CTRL-U after inserting a line break.
inoremap <C-U> <C-G>u<C-U>
nnoremap <tab> gt

" In many terminal emulators the mouse works just fine, thus enable it.
if has('mouse')
  set mouse=a
endif
set mouse-=a

" Switch syntax highlighting on, when the terminal has colors
" Also switch on highlighting the last used search pattern.
if &t_Co > 2 || has("gui_running")
  syntax on
  set hlsearch
endif

func SetNewFileTitle()
    if &filetype == 'sh'
        call setline(1,"\#!/bin/bash")
        call append(line("."),   "\#########################################################################")
        call append(line(".")+1, "\#   File: ".expand("%"))
        call append(line(".")+2, "\# Author: ma6174")
        call append(line(".")+3, "\#   Date: ".strftime("%c"))
        call append(line(".")+4, "\#  Brief: ")
        call append(line(".")+5, "\#########################################################################")
        call append(line(".")+6, "")
    else
        call setline(1,          "/******************************************************************")
        call append(line("."),   " *")
        call append(line(".")+1, " *     Copyright (c) 2015 Baidu.com, Inc. All Rights Reserved")
        call append(line(".")+2, " *")
        call append(line(".")+3, " ******************************************************************/")
        call append(line(".")+4, "")
        call append(line(".")+5, "/**")
        call append(line(".")+6, " * @file    ".expand("%"))
        call append(line(".")+7, " * @author  liushaofeng01@baidu.com")
        call append(line(".")+8, " * @date    ".strftime("%Y-%m-%d %H:%M"))
        call append(line(".")+9, " * @brief   ")
        call append(line(".")+10," **/")
        call append(line(".")+11,"")
    endif

    normal G
endfunc

func SetHeaderWrap()
    normal G
    let htag = toupper(split(getcwd(),"/")[-1] . "_" . expand("%"))
    let htag = tr(htag, "/.", "__")
    call append(line("."), "#ifndef " . htag)
    call append(line(".")+1, "#define " . htag)
    call append(line(".")+2, "")
    call append(line(".")+3, "")
    call append(line(".")+4, "")
    call append(line(".")+5, "#endif")
    normal 3j
    unlet htag
endfun

" Only do this part when compiled with support for autocommands.
if has("autocmd")
    " Enable file type detection.
    " Use the default filetype settings, so that mail gets 'tw' set to 72,
    " 'cindent' is on in C files, etc.
    " Also load indent files, to automatically do language-dependent indenting.
    filetype plugin indent on

    " Put these in an autocmd group, so that we can delete them easily.
    augroup vimrcEx
        au!

        " For all text files set 'textwidth' to 78 characters.
        autocmd FileType text   setlocal tw=0
        autocmd FileType shell  setlocal et sta sw=4 sts=4
        autocmd FileType python setlocal et sta sw=4 sts=4

        autocmd BufReadPost *
                    \ if line("'\"") > 1 && line("'\"") <= line("$") |
                    \   exe "normal! g`\"" |
                    \ endif

        function! <SID>DateInsert()
            $read !date \+\%Y/\%m/\%d\ \%H:\%M:\%S
        endfunction

    augroup END

    autocmd BufNewFile *.h,*.c,*.cpp,*.sh exec ":call SetNewFileTitle()"
    autocmd BufNewFile *.h exec ":call SetHeaderWrap()"

else
    set autoindent		" always set autoindenting on

endif " has("autocmd")

" Convenient command to see the difference between the current buffer and the
" file it was loaded from, thus the changes you made.
" Only define it when not defined already.
if !exists(":DiffOrig")
  command DiffOrig vert new | set bt=nofile | r # | 0d_ | diffthis
		  \ | wincmd p | diffthis
endif

filetype plugin indent on

set expandtab
set encoding=utf-8 fileencodings=ucs-bom,utf-8,cp936,gb18030

```
