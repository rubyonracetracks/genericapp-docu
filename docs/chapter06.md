---
id: chapter06
title: Chapter 6: Production Environment Email
sidebar_label: Chapter 6: Production Environment Email
---

So far, your Rails app can only send out emails in the development and testing environments.  In this chapter, you will enable your app to send out emails in the production environment.  This requires a custom configuration for your specific app and thus cannot be automated.  Pick one of the production environment email services listed below, follow the instructions for that section, and then move on to the follow-up steps.

Sections
--------
* Production Environment Email Services (pick one)
  * [Mailgun](#mailgun)
  * [SparkPost](#sparkpost)
  * [SendGrid](#sendgrid)
* [Follow Up](#follow-up)
* [Troubleshooting](#troubleshooting)

Mailgun
-------
#### Why Mailgun?
* Heroku offers Mailgun as an add-on.
* The free tier gives you up to 400 emails per day and 10,000 emails per month.

#### Prerequisites
* You have created a Rails app that uses authentication and deployed it to Heroku.
* You need your own domain name that your app can use for sending emails.  (If you don't, you are limited to the sandbox domain.)
* You need an account at [Mailgun](https://mailgun.com/).  If you don't already have an account, sign up for one.
* Your Mailgun account must be properly configured.  Further explanations are below.  (Mailgun's documentation does a poor job of explaining how to properly configure your account.)

#### Two Unofficial Free Tiers
* Mailgun has two tiers of free service.
* The lower free tier gives you an opportunity to test drive the service without providing your credit card information.  The email confirmation process only works for email addresses that are on your list of authorized recipients in your [account settings](https://mailgun.com/app/account/settings).  In other words, attempts to sign up or resend a confirmation will fail UNLESS the email address you provide is on your list of authorized recipients.  Thus, this lower free tier of service is NOT intended for serious apps.
* The upper free tier requires your credit card information.  If your apps send out additional emails during the month, you will be charged.  (If you really don't want to pay, you have the option of setting a custom message limit.)

#### Adding a Sending Domain
* To go beyond the limits of the lower tier service, you MUST enter a sending domain.
* To do this, go to the Domains page of MailGun and add a domain.
* Follow the instructions on how to add the two TXT DNS records.  You must log into your domain name provider to do this.

#### Configuring Heroku
* Log into your Heroku account.  In your Dashboard, select your new Rails project, and click on "Configure Add-ons".
* Go to the Add-ons section, enter "Mailgun", pick the appropriate Mailgun plan name, and click on "Provision".
* In the command line, enter the command "heroku config" to verify that your app is configured for Mailgun on Heroku.
* Log out of Heroku, and log into your Mailgun account.  (NOTE: When I log into Mailgun, it only shows my sandbox domain and not my sending domain if I'm simultaneously logged into Heroku.)
* Go to your app's dashboard on the Mailgun web site, and click on the domain you wish to use.  The Mailgun parameters will be listed here.
* Log back into Heroku.  Go to your app's Settings page on the Heroku web site, and change certain config variables.  (Some of the default parameters are wrong.)  The MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_SMTP_LOGIN, and MAILGUN_SMTP_PASSWORD parameters in the Heroku app need to match the values listed on the Mailgun site.

#### Configuring Your App
* Edit the config/environments/production.rb file in your app.  Add the following lines just before the last "end":
```

  # Mailgun settings
  config.action_mailer.default_url_options = { host: 'yourapp.herokuapp.com' }
  config.action_mailer.smtp_settings = {
    port: ENV['MAILGUN_SMTP_PORT'],
    address: ENV['MAILGUN_SMTP_SERVER'],
    user_name: ENV['MAILGUN_SMTP_LOGIN'],
    password: ENV['MAILGUN_SMTP_PASSWORD'],
    domain: 'yourapp.heroku.com',
    authentication: :plain
  }
  config.action_mailer.delivery_method = :smtp
```
* In the config/environments/production.rb file, replace BOTH instances of "yourapp" in the above file with the actual name within the URL of your Heroku app.
* Add the following line to the very beginning of config/environments/production.rb:
```
# rubocop:disable Metrics/BlockLength
```
* Add the following line to the very end of config/environments/production.rb:
```
# rubocop:enable Metrics/BlockLength
```
* Enter the command "sh git_check.sh".  All tests should pass, and there should be no offenses.
* Enter the following commands:
```
git add .
git commit -m "Configured production settings for Mailgun"
git push origin master
```
* Continue on to the [Follow Up](#follow-up) section.

SparkPost
---------
#### Why SparkPost?
* Heroku offers SparkPost as an add-on.
* While SparkPost's free tier only gives you up to 500 emails per month, you get up to 100,000 emails for only $9 per month.  Mailgun charges $19 per month for 50,000 emails.

#### Prerequisites
* You have created a Rails app that uses authentication and deployed it to Heroku.
* You need an account at [SparkPost](https://www.sparkpost.com/).  If you don't already have an account, sign up for one.
* Your SparkPost account must be properly configured.  Further explanations are below.

#### API Key
You must have an API key.  Log into SparkPost, go to Account -> API Keys, create a new API key, and SAVE your API key to KeePassX (or other password manager).  Be sure to enable (check) the "Send via SMTP" API permission.

#### Sending Domain
* You must have a valid sending domain.  Log into SparkPost, go to Account -> Sending Domains, and create a new domain.  The email address you use as the source of the email confirmation messages (which is set in the config.mailer_sender parameter in the config/initializers/devise.rb file) MUST be part of one of your sending domains.
* Additionally, you must verify your sending domain through either the DKIM record or email confirmation.

#### Configuring Heroku
* Log into your Heroku account.  In your Dashboard, select your new Rails project, and click on "Configure Add-ons".
* Go to the Add-ons section, enter "SparkPost", pick the appropriate SparkPost plan name, and click on "Provision".
* In the command line, enter the command "heroku config" to verify that your app is configured for SparkPost on Heroku.
* Log into your SparkPost account.  Go to Account -> SMTP Relays for the values of the host, username, and password parameters.  Please note that the password is your API key.
* Go to your app's Settings page on the Heroku web site, and change certain config variables.  (Some of the default parameters are wrong.)  The SPARKPOST_API_KEY, SPARKPOST_SMTP_PORT, SPARKPOST_SMTP_USERNAME, SPARKPOST_SMTP_PASSWORD, and SPARKPOST_SMTP_PORT parameters in the Heroku app need to match the values listed in the SMTP Relays page of the SparkPost site.

#### Configuring Your App
* Edit the config/environments/production.rb file, and add the new custom production email settings to the end of the configuration settings.  (Replace "your_app" with the actual name of your app on Heroku.)  It should look like this:
```
  . . . .

  # SparkPost settings
  config.action_mailer.default_url_options = { host: 'yourapp.herokuapp.com' }
  config.action_mailer.smtp_settings = {
    port: ENV['SPARKPOST_SMTP_PORT'],
    address: ENV['SPARKPOST_SMTP_HOST'],
    user_name: ENV['SPARKPOST_SMTP_USERNAME'],
    password: ENV['SPARKPOST_SMTP_PASSWORD'],
    domain: 'yourapp.heroku.com',
    authentication: :plain
  }
  config.action_mailer.delivery_method = :smtp
end
```
* In the config/environments/production.rb file, replace BOTH instances of "yourapp" in the above file with the actual name within the URL of your Heroku app.
* Add the following line to the very beginning of config/environments/production.rb:
```
# rubocop:disable Metrics/BlockLength
```
* Add the following line to the very end of config/environments/production.rb:
```
# rubocop:enable Metrics/BlockLength
```
* Enter the command "sh git_check.sh".  All tests should pass, and there should be no offenses.
* Enter the following commands:
```
git add .
git commit -m "Configured production settings for SparkPost"
git push origin master
sh heroku.sh
```
* Continue on to the [Follow Up](#follow-up) section.

SendGrid
--------
#### Why SendGrid?
* Heroku offers SendGrid as an add-on.
* The free tier gives you up to 12,000 emails per month.  For $9.95 per month, you get up to 40,000 emails.

#### Prerequisites
* You have created a Rails app that uses authentication and deployed it to Heroku.
* You need an account at [SendGrid](http://sendgrid.com/).  If you don't already have an account, sign up for one.
* Your SendGrid account must be properly configured.  Further explanations are below.

#### Source
[Rails - Sending automated emails with Devise and SendGrid on Heroku](http://rpayo.com/rails-sending-automated-emails-with-devise-and-sendgrid-on-heroku/)

#### Getting Your API Key
* Go to the [API Keys page](https://app.sendgrid.com/settings/api_keys) in SendGrid.
* Click on the "Create API Key" button, and then select the "General API Key" option.
* Select the "full access" option for as many functions as possible.  When the "full access" option is not available, select the "read access" option.
* When you are given your API key, save it IMMEDIATELY in KeePassX.

#### Configuring Heroku
* Log into your Heroku account.  In your Dashboard, select your new Rails project, and click on "Configure Add-ons".
* Go to the Add-ons section, enter "SendGrid", pick the appropriate SendGrid plan, and click on "Provision".
* In the command line, enter the following command:
```
heroku config:set SENDGRID_API_KEY='(fill in your API key here)'
```
* View your app's username and password by entering "heroku config".

#### Configuring Your App
* Edit the config/environments/production.rb file, and add the new custom production email settings to the end of the configuration settings.  It should look like this:
```
  . . . .

  config.action_mailer.default_url_options = { host: 'your_app.herokuapp.com' }
  ActionMailer::Base.smtp_settings = {
    address: 'smtp.sendgrid.net',
    port: '25',
    authentication: :plain,
    user_name: ENV['SENDGRID_USERNAME'],
    password: ENV['SENDGRID_PASSWORD'],
    domain: ENV['SENDGRID_DOMAIN']
  }
end
```
* In the config/environments/production.rb file, replace "your_app" in the config.action_mailer.default_url_options with the actual name in the URL of your Heroku app.
* Add the following line to the very beginning of config/environments/production.rb:
```
# rubocop:disable Metrics/BlockLength
```
* Add the following line to the very end of config/environments/production.rb:
```
# rubocop:enable Metrics/BlockLength
```
* Enter the command "sh git_check.sh".  All tests should pass, and there should be no offenses.
* Enter the following commands:
```
git add .
git commit -m "Enabled emails in Heroku through SendGrid"
git push origin master
sh heroku.sh
```
* Continue on to the [Follow Up](#follow-up) section.

Follow Up
---------
* Enter the command "sh heroku.sh".
* Go to your app's Heroku page, and sign up for a new account.  The email confirmation processes should now work.  (Just remember that if you're using Mailgun's lower free tier, the email address you use to sign up for a new account MUST be on your Mailgun list of authorized recipients.)
* After you have confirmed your account, log out and then log back in.
* If all goes well, you have successfully configured your app to send emails in the production environment, and you are ready to move on to the next chapter.
* If there are problems, consult the troubleshooting section below.

Troubleshooting
---------------
* If the email confirmation process doesn't work (and leaves you with the message "We're sorry, but something went wrong."), you need to view your Heroku app's log to see the error message.
* The number of lines shown when you type "heroku logs" is limited. You may need to type "heroku logs -n5000" or "heroku logs --tail" to see the source of your error.
