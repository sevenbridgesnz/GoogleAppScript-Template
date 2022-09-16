## Introduction

This project servers as a template for creating Google Apps Script (GAS) so it can be developed and tested locally with the ability to deploy to the Google Script environment.

## Prerequisites

- Node.js and NPM
- Autocomplete for Google Script Apps
  `npm install --save @types/google-apps-script`
- Command Line Apps Script Projects (*clasp*)
  `npm i @google/clasp -g`
- To use *clasp*, you need to enable the Google Apps Script API. Navigate to the [Apps Script Settings](https://script.google.com/home/usersettings) page, click on “Google Apps Script API” and toggle the switch to “on”.

> **Important note:** as Google Apps Script doesn’t currently support node modules, if you include the import ‘google-apps-script’; line in the files you push to your Google Apps Script project, GAS will throw an error. In reality you want to have a separate file with this import statement that you want to keep open in VS Code, but you also want to avoid pushing it to your GAS project by adding it to the .claspignore file.

## Using *clasp*

[Clasp](https://github.com/google/clasp) allows you to develop your APS locally and push them to the cloud.

- `clasp login` allows you to save your client credentials using Google SSO. This command will open a browser tab where you will need to login with your Google account.
- `clasp push` pushes your local code to the cloud.
- `clasp pull` pulls your online code to local, in case it was modified locally.


### Preparing The Development Environment

- In [Google Apps Script](https://script.google.com/) create a new project and obtain it's ID from the Project Settings page.
- Clone the project by running `clasp clone`. This will clone the existing files to your machine. It will also create a .clasp.json file, where the script ID will be stored.
- Once you write some code, you can deploy it with the `clasp push` command. You can also use `clasp push -w`. This option stands for “watch”, it allows clasp to push the code every time you save the file you’re working on so that you don’t have to run the clasp push command every time.
- Similarly there is a `clasp pull` command. If you updated your script in the online IDE rather than on your machine, you can pull the changes and it will update your local files.


> Please note that features in this project such as Babel, Jest and others are setup only for local development and are not supported by Google Script Applications. The aim of these was to allow local development and testing of libraries without dependencies to GSA.

- login to `claps` for your development and production environments and copy your `.clasp.json` file for each environment to `clasp.json.dev` and `clasp.json.prod` files.

### Running the project

- `npm run test` executes test scripts
- `npm run build` builds the project
- `npm run deploy-dev` or `npm run deploy-prod` tests, builds and deploys to development or production environment

> Please note that deployment happens from `dist` folder. To circumvent limitations of local development for GAS, all required files (such as `appscript.json` and `.clasp.json` files are copied to the same location). You *must* update `rootDir` with location of `dist` folder, or use relative path `.`


### Other resources

- [GAS Example Projects](https://support.google.com/appsheet/answer/12008558?hl=en&ref_topic=11997049)

