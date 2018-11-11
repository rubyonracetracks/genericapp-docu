# Welcome

This app was created with the aid of Docusaurus Neutrino, which automatically creates a new Docusaurus app from scratch.  It's like Rails Neutrino but for Docusaurus instead.

## Scripts
* all.sh: This script runs test_app.sh and test_code.sh.
* credentials.sh: Run this script after you reset your Docker container to enter your Git name and email address.
* test_app.sh: This script runs the commands "npm install" and "npm test" in the website directory.
* test_code.sh: This script runs commands that check this app for outdated and insecure npm packages.
* server.sh: This script displays your app on your local server. Please note that the port number will be something other than 3000 if you used a non-zero offset.
* git_check.sh: Run this script before making a Git commit.
* clean.sh: This script removes the website/build, website/i18n, and website/node_modules directories to make it easier to search for keywords in your source code.  However, you will need to stop your local server, rebuild this app, and restart your server.

## Setup Procedure
* If you are using Docker, you need at least two tmux windows.  If you have Docusaurus installed directly in your host OS, you'll need at least two terminal windows or tabs.
* In the first window, enter this app's root directory and enter the command "sh all.sh; sh server.sh".
* In the second window, enter this app's root directory.  Use this window for running the scripts and entering Git commands.

## Entering NPM Commands
* Please note that "npm commands" should be executed within the website directory and NOT in this project's root directory.  You may need a third window for this.
* The above scripts take care of this detail for you.
