---
id: chapter02
title: Chapter 2: Creating the App
sidebar_label: Chapter 2: Creating the App
---

## Installing the Generic App Gem
* Once you are logged into the Docker container based on the rvm-rails-general Docker image, you are ready to proceed.
* In the Docker container, enter the command "gem install generic_app".

## Using the Generic App Gem
* Enter the following commands:
```
DATE=`date +%Y%m%d-%H%M%S-%3N`
APP_NAME=sample-$DATE
echo $APP_NAME # The name of your app
```
* Enter the command "generic_app".
* When prompted for the directory name of your new app, use the value of $APP_NAME that you printed out.  (Or use another name that you have in mind.)
* When prompted, enter your email address.
* When prompted for the name of your new app, enter "My Sample Rails App".  (Or use another name that you have in mind.)
* In a few seconds, your new app will be ready.

## Running the Test Suite and Local Server
* Enter your new app's root directory and enter the command "sh build_fast.sh; sh server.sh". This runs all the tests and then starts up your app in the local Rails server.
* If all goes well, there are no test failures or offenses. After the tests have been completed, the Rails server will run.  When the process is finished, you should be able to view the app at http://localhost:3010.
* Start a second LXTerminal tab, and enter the command "sh join.sh".
* In this second LXTerminal tab, go to your app's root directory, and use this tab for entering commands.
