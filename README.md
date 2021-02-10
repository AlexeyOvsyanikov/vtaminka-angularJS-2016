# Vtaminka

This is a simple frontend application (vitamins shop) written on angularJS(2016). To run the application, you need to run the commands in the project root:
- npm i
- npm start (live dev-server by http://localhost:9000)

To build a project:
In webpack.config.js change mode: "development" to mode: "production"
Check HOST constant in application/app.js and change if need

Then: 

- npm run build

Replace in index.html:
- <link rel="stylesheet" href="vendor.css">
- <script src="vendor.js"></script>
- <script src="index.js"></script>

On

- <link rel="stylesheet" href="public/vendor.css">
- <script src="public/vendor.js"></script>
- <script src="public/index.js"></script>
