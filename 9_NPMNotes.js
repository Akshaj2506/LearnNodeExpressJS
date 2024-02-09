/*
npm -global command, comes with node
npm --version

local dependency - use it only in the current particular project
npm i <packageName>

global dependency - use it in any project
npm install -g <packageName>

package.json - manifest file (stores important info about project/package)
manual approach (create package.json in the root, create properties etc)
npm init (step by step, press enter to skip)
npm init -y (everything default)

nodemon module is used to refresh the node server without restarting the server again and again
installing nodemon command: npm i nodemon -D or --save-dev (-D or --save-dev is  used to store )

Dev Dependencies are stored in this way:
"devDependencies": {
   "nodemon": "^3.0.3"
}

You can provide your own commands by specifying the following in package.json
"scripts": {
   "start": "node app.js",
   "dev": "nodemon app.js"
}

To uninstall a package: npm uninstall <packageName>

"npm install" can be used to install all the dependencies specified in the package.json

npx install <packageName> is used to execute Node.js packages without actually installing the packages without the use of -g

The purpose of package-lock. json is to ensure that the same dependencies are installed consistently across different environments, such as development and production environments.
*/