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

#### Sort:
The posts in the feed section can be sorted by number of likes and date in both - ascending and descending order.

#### Open:
When user clicks on any post from the feed, it opens up on the right side section with it's recent comments.

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
      navbar.jsx
      feed.jsx
      openItem.jsx
      postComments.jsx
      postToolbar.jsx
    App.css
    App.js
    App.test.js
    index.css
    index.js
```


## Application Demo

Demo Heroku URL: https://aqueous-beyond-14379.herokuapp.com/

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

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Issues:
- Once a video is opened, opening another video seems to have some issue as the video component is getting unmounted. Opening images one after the other works fine.

