//Packages
const app = require('./app');

//Setting PORT variable
const PORT = process.env.PORT || 3000

//Listening app on PORT
app.listen(PORT, () => {
  console.log(
    `Now listening on port ${PORT}. Be sure to restart when you make code changes!`
  );
});