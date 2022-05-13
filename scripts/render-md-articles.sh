#!/bin/bash
# ref : https://unix.stackexchange.com/questions/294562/how-to-run-a-command-on-all-subfolders
# set -e

cd public/articles
for d in *; do
  if [ -d "$d" ]; then
    ( cd "$d" && pandoc -s --highlight-style=espresso article.md -o article.html )
  fi
done
