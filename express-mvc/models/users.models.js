const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    lowercase: true
  },
  role: {
    type: String,
    default: 'user'
  },
  password: String,
  // questions: {
  // 	questioned: [{
  // 		type: Schema.Types.ObjectID
  // 	}]
  // }
  // answers: {
  // 	answered: [{
  // 		type: Schema.Types.ObjectID
  // 		ref: 
  // 	}]
  // }

})

UserSchema.plugin(AutoIncrement, { id: "user_id", inc_field: "id" })
const User = mongoose.model('User', UserSchema);

module.exports = User;