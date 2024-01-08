# Contentful-Lottie-Viewer 🎬

This Contentful App Framework app augments the JSON field editor to also include a Lottie player, allowing the user to see the animation in action. 🎥

## 📸 Screen Shot

[404-bot.webm](https://user-images.githubusercontent.com/1778330/201444274-7cc8945a-18b5-4ca2-9e12-11606541015c.webm)

## 🛠️ Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory and run `npm install` to install all necessary dependencies.
3. Run `npm run build` to build the app.
4. Zip the build folder.

## 🚀 Deploying to Contentful

### 🌐 Using Contentful Web app UI

1. Log in to your Contentful account and navigate to the space where you want to install the app.
2. Click on "Apps" in the top menu and then "Manage Apps".
3. Click on "Upload a custom app" and upload the zip file you created earlier.
4. After the app is uploaded, click on "Install" to install the app in your space.

### 💻 Using Contentful CLI

1. Install the Contentful App Toolkit by running `npm install -g @contentful/app-scripts`.
2. Log in to your Contentful account using the command `contentful login`. This will open a browser window for you to log in and authorize the CLI tool. After successful login, the CLI tool will store an OAuth token on your system for future requests.
3. Navigate to the project directory and run `contentful app bundle` to bundle your app.
4. Then, run `contentful app upload` to upload the bundled app to Contentful. You will be prompted to enter the organization for the app.
5. After the app is uploaded, navigate to the space where you want to install the app.
6. Click on "Apps" in the top menu and then "Manage Apps".
7. You should see your uploaded app in the list. Click on "Install" to install the app in your space.

## 🔄 Overriding a JSON Field Type

1. Navigate to the content model where you want to override the JSON field type.
2. Click on the JSON field you want to override.
3. In the "Appearance" tab, select the name of the app you just installed.
4. Click on "Save" to save your changes.

---

## Creation - Create Contentful App

This project was bootstrapped with [Create Contentful App](https://github.com/contentful/create-contentful-app).

## Available Scripts

In the project directory, you can run:

#### `npm start`

Creates or updates your app definition in Contentful, and runs the app in development mode.
Open your app to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

#### `npm run upload`

Uploads the build folder to contentful and creates a bundle that is automatically activated.
The command guides you through the deployment process and asks for all required arguments.
Read [here](https://www.contentful.com/developers/docs/extensibility/app-framework/create-contentful-app/#deploy-with-contentful) for more information about the deployment process.

## Libraries to use

To make your app look and feel like Contentful use the following libraries:

- [Forma 36](https://f36.contentful.com/) – Contentful's design system
- [Contentful Field Editors](https://www.contentful.com/developers/docs/extensibility/field-editors/) – Contentful's field editor React components

For Lottie

- [React Lottie Player](https://www.npmjs.com/package/react-lottie-player) - Lottie Player in React

## Learn More

[Read more](https://www.contentful.com/developers/docs/extensibility/app-framework/create-contentful-app/) and check out the video on how to use the CLI.

Create Contentful App uses [Create React App](https://create-react-app.dev/). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and how to further customize your app.
