const UserModel = require("../Models/UserModel");
const jwt = require("jwt-simple");

const authentication = (request, response,next) => {
  // get the token from the header
  const tokenString = request.header("authorization");
  if (!tokenString) {
    return response.send("Invalid credentials");
  }
  const tokenObject = jwt.decode(tokenString, 'Butterfly');
  // decrypt the token
  // find user by id
  User.findById(tokenObject.userId, function (err, user) {
    if (err) { return response.send("Error"); }
    if (user) {
      request.user = user;
      return next();
    }
    return response.send("Invalid credentials");
  });
}

exports.authentication = authentication;
