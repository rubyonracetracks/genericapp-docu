---
id: chapter02
title: Chapter 2: Creating the App
sidebar_label: Chapter 2: Creating the App
---

## Installing the Generic App Gem
* Use the reset.sh script to enter a Docker container based on one of the rails-general Docker images.
* Enter the command "gem install generic_app".

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

## Follow Up
* If you are not already using a tmux window, enter the command "tmux".
* Enter your new app's root directory and enter the command "sh all.sh; sh server.sh". This runs all the tests, outlines the app, seeds the app, and then starts up your app in the local Rails server.
* If all goes well, there are no test failures or offenses. After the tests have been completed, the Rails server will run. If all goes well, you will be able to view your app locally when you open your browser to the appropriate URL. Please note that if you selected a non-zero port offset for your Docker container, the appropriate port number will be something different from 3000.
* Press Ctrl-b and then "c" to create a new tmux window. Go to your app's root directory, and use this tmux window for entering commands.
