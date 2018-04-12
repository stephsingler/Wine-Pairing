require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserRoute = require('./Routes/UserRoute');
const SessionRoute = require('./Routes/SessionRoute');
const AuthenticationRoute = require('./Routes/AuthenticationRoute');


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://stephsingler:Butterfly2825@ds037467.mlab.com:37467/wine-app");

const app = express();

app.use(bodyParser.json());
app.use(UserRoute);
app.use(SessionRoute);
app.use(AuthenticationRoute);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
