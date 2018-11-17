---
id: chapter05
title: Chapter 5: PostgreSQL
sidebar_label: Chapter 5: PostgreSQL
---

By default, the app you create with the Generic App gem uses PostgreSQL for the database in the production environment but SQLite in the development and test environments.  In the interest of making the development and test environments more like the production environment, this chapter is dedicated to converting the development and test environments from SQLite to PostgreSQL.

## Procedure
* Enter the command "sh pg_setup.sh".  When prompted, enter your desired username and password.  Remember that your username and password are NOT saved in the source code.
* Running the pg_setup.sh script automatically updates the config/database.yml file to use PostgreSQL instead of SQLite, removes the sqlite gem from the Gemfile, edits the build_fast.sh script to add the actions needed to set up PostgreSQL so that your app still works.  Every time you run the build_fast.sh script, PostgreSQL is automatically set up for you once you enter your desired database username and password.
* Enter the command "sh git_check.sh".  All tests should pass, and there should be no offenses.
* Enter the following commands:
```
git add .
git commit -m "Converted from SQLite to PostgreSQL"
git push origin master
```
* Enter the command "sh heroku.sh".
