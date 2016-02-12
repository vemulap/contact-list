# Contacts List Application using AngularJS


## Environment Setup
In order to get the project up and running please follow the steps below. The instructions below are for Mac OS but would be same for Windows machine as well.

#### Step 1
Clone a copy of this repository to your local machine.

#### Step 2

Install the latest version of [NodeJS](http://nodejs.org). You can also install node.js via command line tool of your choice (PowerShell, Terminal, Bash etc). Open your command line tool of choice and run:
```
sudo npm install -g
```
*Note: Make sure you have `node.js` installed globally. This will enable you to run npm directives. If you have `node.js` and `Grunt` skip to step 4.*


#### Step 3
Once `node` is installed you will need to install [Grunt](http://gruntjs.com/getting-started). The easiest way is to open your command line tool of choice and run:
```
sudo npm install -g grunt-cli
```

**Excellent!** You now have `Node` and `Grunt` installed on your system and ready to go.

#### Step 4
Once you are in the project directory, type in the following command to install node packages:
```
sudo npm install
```

#### Step 4
Once you are in the project directory, type in the following command to install bower package manager:
```
bower install
```

## Build & development
To build the application run the `grunt` command. To see the application in action run `grunt serve` command on your terminal for a preview of the application in the browser.

## Details about the App

Starting the application takes you to the Contacts Page where we can see all the contacts as well as search for the contacts. Click on the `+` button to start adding new contacts. After adding a new contact it shows up on the contact list page. You can view a contact details by clicking on the name of the contact from the Contacts Page. This will open up a details page of the contact where you can `Edit` or `Delete` a contact.
