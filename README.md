# 📦  TypeScript Webpack-Babel Vanilla Html Boilerplate

This is template code to serve up a vanilla html website using node.js and webpack and babel.  The advantage being modules and all nodejs features are easily supported and are transpiled to vanilla js. Express is used to serve the static build files.

## Getting started

* fork and clone this repo
* cd into the directory and run `npm i` to download the required packages
* use `npm run start` to build and serve the application 
* Navigate to `localhost:8080` to see the site
* use `npm run test-watch ./tests/module.test.js` to run the unit tests
  
> `./src` contains dev code and the output of webpack can be found in `./dist`

---

#### The following scripts can be run from the `package.json`

`npm run start`

> builds the `src` directory to the `dist` directory and serves on `port 8080`

`npm run build` 

>  runs a production build of the `./src` directory to the `./dist` directory.

`npm run test < file name >` 

> runs any tests found in the file

`npm run test-watch < file name >` 

> runs any tests found in the file and reruns with nodemon on file changes

`npm run test-all` 

> runs all tests found with the filenameing convention `fileName.test.extension`

## Dependencies 

* [webpack](https://webpack.js.org/) -- used to bundle the website together
* [webpack-cli](https://webpack.js.org/api/cli/) -- used to build the website
* [webpack-html-plugin](https://webpack.js.org/plugins/html-webpack-plugin/) -- webpack plugin for building vanilla html sites
* [css-loader (webpack)](https://webpack.js.org/loaders/css-loader/) -- webpack plugin for loading vanilla css
* [style-loader (webpack)](https://webpack.js.org/loaders/style-loader/) -- webpack plugin for loading vanilla css
* [babel](https://babeljs.io/) -- complies the js to ECMAscript 5
* [nodemon](https://www.npmjs.com/package/nodemon) -- file watch utility that re-runs scripts when files change
* [express](https://expressjs.com/) -- to serve the bundled static files from the `./dist` directory
* [mocha](https://mochajs.org/) -- for running unit tests
* [chai](https://www.chaijs.com/) -- assertion library for testing
* [supertest](https://www.npmjs.com/package/supertest) -- used for testing express routes

## Notes

none right now 

## Todos

* update tests for typescript
