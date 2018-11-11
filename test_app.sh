#!/bin/bash

DIR_MAIN=$PWD

echo '-----------------------------------'
echo "cd $DIR_MAIN/website && npm install"
cd $DIR_MAIN/website && npm install

echo '--------------------------------'
echo "cd $DIR_MAIN/website && npm test"
cd $DIR_MAIN/website && npm test
