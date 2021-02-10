# Vtaminka

This is a simple frontend application (vitamins shop) written on angularJS(2016). To run the application, you need to run the commands in the project root:
- npm i
- npm start (live dev-server by http://localhost:9000)

#### Build a project:
In webpack.config.js change mode: "development" to mode: "production"
Check HOST constant in application/app.js and change if need and then "npm run build"

#### Replace in index.html:
- href="vendor.css"
- <script src="vendor.js"></script>
- <script src="index.js"></script>
  
#### On:
- href="public/vendor.css"
- <script src="public/vendor.js"></script>
- <script src="public/index.js"></script>
