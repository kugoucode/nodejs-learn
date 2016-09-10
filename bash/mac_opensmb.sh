#!/bin/bash
smbpath="/Volumes/work"

function opensmb() {
  smbpath=$1
  if [ ! -d "$smbpath" ]; then
      open smb://xxxx.baidu.com
  else
      umount $smbpath 2>/dev/null
      rm -rf $smbpath 2>/dev/null
      open smb://xxxx.baidu.com
  fi
}

opensmb $smbpath
