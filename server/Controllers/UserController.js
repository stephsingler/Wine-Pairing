const UserModel = require('../Models/UserModel');
const tokenForUser = require('../Services/token').tokenForUser;
const hash = require('../Services/hash').hash;

const create = (request, response, next) => {
  console.log('creating')
  console.log(request.body)
  const { fullName, userName, passWord } = request.body;
  const u = userName;
  if (!userName || !passWord) {
    return response.status(422)
    .json({error: "All fields required"});
  }
  UserModel.findOne({userName: u}).exec()
  .then((existingUser) => {
    console.log('found user')
    if (existingUser) {
      return response.status(422).json({error: "Username already in use"})
    }
    saveUser(fullName, userName, passWord,(token) => {
      response.json(token);
    });
  })
  .catch(err => next(err));
}

const saveUser = (fullName, userName, passWord, done) => {
  console.log('save user')
  hash(passWord, null, function (hashedPassword) {
    const user = new UserModel({fullName, userName, passWord: hashedPassword});
    user.save()
    .then(u => {
      console.log('user saved')
      done({token: tokenForUser(u)});
    });
  });
}

exports.create = create;
