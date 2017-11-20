const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
	title: String,
	questionedBy: {
		type: mongoose.Schema.ObjectId,
		ref: 'User'
	},
	topics: [{text: String}],
	votes: {
		type: Number, 
		default:0
	},
	answers: [{
				content: String,
				answeredBy: {
					type: mongoose.Schema.ObjectId,
					ref: 'User'
				},
				votes: {type: Number, default:0},
				createdAt: { type: Date, default: Date.now },
				updatedAt: { type: Date, default: Date.now }
  			}]
}, { timestamps: true })

QuestionSchema.plugin(AutoIncrement, {
  id: "question_id",
  inc_field: "id"
})
QuestionSchema.plugin(AutoIncrement, {
  id: "question_answer_id",
  inc_field: "id"
})

const Question = mongoose.model('question', QuestionSchema);

module.exports = Question;