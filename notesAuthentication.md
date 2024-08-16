
# How to Encrypt using bEncrypt

- In the Root directory, npm install bcrypt.
- add this code to the model file 

<var bcrypt = require('bcrypt');>

Before modeling and exporting the model, put this code

// hash password before saving to database
UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
  if (err) {
  return next(err);
  }
  user.password = hash;
  next();
  })
});


This will ensure with every entry added with a password, the password is encrypted with salting.

