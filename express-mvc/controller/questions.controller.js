const mongoose = require("mongoose")
const Question = require('../models/questions.models')

module.exports = {
	//Question
	getAllQuestion: (req, res, next) => {
		Question.find({})
      		.populate("questionedBy")
      		.populate("answers.answeredBy")
      		.then(function(questions) {
        	res.send(questions)
      })
      		.catch(err => console.error(err))
	},

	postAQuestion: (req, res, next) => {
		// Create a Question
		const newQuestion = new Question({
			user: user._id,
			title: req.body.title,
			topics: req.body.topics,
		})
		// Save 
		newQuestion.save(function(err){
			if (err) {
				res.send(err)
			} else {
				res.send({
					data: newQuestion
				})
			}
		})
	},

	getAQuestion: (req, res, next) => {
		Question.findById({_id: req.params.qID})
			.populate('questionedBy')
			.populate('answers.answeredBy')
			.then(function(question) {
        	res.send(question)
      })
      	.catch(err => console.error(err))
	},

	putAQuestion: (req, res, next) => {
		Question.findByIdAndUpdate({_id: req.params.qID}, {
			title: req.body.title,
			topics: req.body.topics
		})
		// .then(function(){
		// 	Question.findOne({_id: req.params.qID})
		// .then(function(question) {
		// 	res.send(question)
		// })
		// })
		// .catch(next)
	},

	deleteAQuestion: (req, res, next) => {
		Question.findOneAndRemove({_id: req.params.qID})
		.then(function(question) {
			res.send(question)
		})
		.catch(err => console.error(err))
	},

	//Answer
	postAnAnswer: (req, res, next) => {
		const newAnswer = {
			content: req.body.content,
			answeredBy: user._id
		}
		Question.update(
        { id: req.params.id },
        { $push: { answers: newAnswer } },
        function(err) {
          	if (err) {
          		res.send(err)
          	} else {
          		res.send({
                data: newAnswer
          	}
      	)}
    })
	}

	// putAnAnswer: (req, res, next) => {
	// 	Question.findOneAndUpdate(
	// 		{_id: req.body.aID, 'answers._id': req.params.aID}, 
	// 		{'answers.$.content': req.body.content}
	// 		if (err) {
	// 			res.send(err)
	// 		} else {
	// 			exports.res.send(req, res)
	// 		}
	// 	)
	// },
	
	// deleteAnAnswer: (req, res, next) => {
	// 	Question.findOneAndUpdate(
	// 		{ _id: req.params.id }, 
	// 		{ $pull: { answers: { _id: req.params.aID, 'user': req.user._id } } }
	// 		).then(function(answer) {
	// 		res.send(answer)
	// 	})
	// },

	//QUESTION & ANSWER VOTE
	// voteUpAQuestion: (req, res, next) => {

	// },

	// voteDownAQuestion: (req, res, next) => {
		
	// },

	// voteUpAnAnswer: (req, res, next) => {

	// },

	// voteDownAnAnswer: (req, res, next) => {
		
	// }
	}