const UserModel = require("../Models/UserModel");
const tokenForUser = require("../Services/token").tokenForUser;
const compare = require("../Services/hash").compare;

const create = (req, res) => {
  const { userName, passWord } = req.body;

  User.findOne({ userName }).exec()
  .then(user => {
    // If there is no user found call done with a `null` argument, signifying no error
    // and `false` signifying that the signin failed
    if (!user) {
      console.log("No user found with this username",userName);
      return res.send("No user found with this username");
    }
    compare(passWord, user.passWord, function (err, isMatch) {
      // If there is an error call done with our error
      if (err) {
        return res.send("Error occured");
      }
      // If the passwords do not match call done with a `null` argument, signifying no error
      // and `false` signifying that the signin failed
      if (!isMatch) {
        return res.send("Invalid password");
      }
      console.log("The username was found and the passwords matched",userName);
      // If we have no errors and the passwords match
      // call done with a `null` argument, signifying no error
      // and with the now signed in user
      const token = tokenForUser(user);
      res.json({ token});
    });
  }).catch(() => {
    return res.send("Error occured");
  });
}

exports.create = create;
