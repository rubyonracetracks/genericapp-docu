#!/bin/bash

DIR_MAIN=$PWD

echo '---------------------------------'
echo "$DIR_MAIN/cd website && npm audit"
cd $DIR_MAIN/website && npm audit

echo '------------------------------------'
echo "cd $DIR_MAIN/website && npm outdated"
cd $DIR_MAIN/website && npm outdated

echo '-------------------------------------'
echo "cd $DIR_MAIN/website && npm ls --prod"
cd $DIR_MAIN/website && npm ls --prod
