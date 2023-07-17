# Base setup with react ts

> Bolider plate made in react and ts.

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn lint`

Lints the complete src folder in the application and provides the list of warnings and errors.

### `yarn --fix`

Fixes the automatically fixable lit errors according to the defined rules.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build:<ENV>`

Where env can be <staging|prod> Builds the app with respective env to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Git hooks

Git hooks are implemented using `Husky`.  
Adding a hook:

```bash
npx husky add .husky/<name of the Git hook> "<command to execute>"
```

For example:

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

This hook will run the `test` script before commiting changes to the repository. If the test script fails, the changes will not be committed.

> **_NOTE: Within the repository, the PRE-COMMIT hook is already defined._**

### Deployment

1. nvm install
2. nvm use
3. npm install -g yarn@1.22.11
4. yarn install
5. yarn build:env where env can be <staging|prod>

### Editor Lint Setup

1.  VS Code

    - Install eslint extension - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
    - Install prettier extension - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
