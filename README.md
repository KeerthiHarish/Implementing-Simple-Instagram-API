# Implementing-Simple-Instagram-API

## Table of Contents

- [Introduction](#introduction)
- [Functionality](#functionality)
- [Application Demo](#application-demo)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Issues](#issues)



## Introduction

This application takes a username (currently hard coded to username "uninturrupted") and shows the Instagram feed of that user.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Functionality

#### Feed:
It retrieves 20 most recent Instagram posts of the user in the feed section with an option to load more posts (pagination).

#### Open:
When user clicks on any post from the feed, it opens up on the modal with it's recent comments.

#### Stats:
Each post displays the number of likes and number of comments.

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      feed/
        ...   //Feed related components
      openItem/
        ...   // Components related to open a post
      navbar.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
```


###### Data Loading Issue (CORS Policy)
Note: Due to CORS policy active on the server, it is preventing the application to load. To disable it from browser follow these simple steps:

###### Steps

1. Download this Google Chrome Plugin (only for Google Chrome browser): [CORS Toggle](https://chrome.google.com/webstore/detail/cors-toggle/omcncfnpmcabckcddookmnajignpffnh?utm_source=chrome-app-launcher-info-dialog)
2. After installation, enable the toggle to "on"
3. Refresh the page.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.
