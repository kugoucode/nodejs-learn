#!/bin/bash
# sh rm_svn_file.sh .
pathName=$1
`/usr/bin/find ${pathName} -name '.svn' -exec rm -rf {} \;`
