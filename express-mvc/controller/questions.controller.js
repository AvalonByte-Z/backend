const mongoose = require("mongoose");
const Question = require("../models/questions.models");
const User = require("../models//users.models");
const helpers = require("../helpers/index");

module.exports = {
	//Question
	getAllQuestion: (req, res, next) => {
		Question.find({})
			.sort({createdAt: -1})
			.populate("by")
			.populate("answers.by")
			.then(function(questions) {
				res.send(questions);
			})
			.catch(err => console.error(err));
	},

	postAQuestion: (req, res, next) => {
		const token = req.headers.authorization || req.body.token;
		const user = helpers.decodeToken(token);
		if (user) {
			//Create a Question
			const newQuestion = new Question({
				by: user._id,
				title: req.body.title,
			});
			// Save
			newQuestion.save(function(err) {
				if (err) {
					res.send(err);
				} else {
					res.send({
						data: newQuestion
					});
				}
			});
		} else {
			res.send({ message: "User token is invalid" });
		}
	},

	getAQuestion: (req, res, next) => {
		Question.findOne({_id: req.params.qID })
			.populate("by")
			.populate("answers.by")
			.then(function(question) {
				res.send(question);
			})
			.catch(err => console.error(err));
	},

	putAQuestion: (req, res, next) => {
		Question.findByIdAndUpdate(
			{ _id: req.params.qID },
			{
				title: req.body.title,
				//topics: req.body.topics
			}
		)
			.then(function() {
				Question.findOne({ _id: req.params.qID }).then(function(question) {
					res.send(question);
				});
			})
			.catch(err => console.error(err));
	},

	deleteAQuestion: (req, res, next) => {
		Question.findOneAndRemove({ _id: req.params.qID })
			.then(function(question) {
				res.send(question);
			})
			.catch(err => console.error(err));
	},

	//Answer
	postAnAnswer: (req, res, next) => {
		const token = req.headers.authorization || req.body.token
    	const user = helpers.decodeToken(token)

    	if (user) {
		const newAnswer = {
			content: req.body.content,
			by: user._id
		};
		Question.populate("answers.by")
			.update(
			{ _id: req.params.qID },
			{ $push: { answers: newAnswer } },
			function(err) {
				if (err) {
					res.send(err);
				} else {
					res.send({
						data: newAnswer
					});
				}
			}
		)	
	} else {
      // NOTIFY IF USER TOKEN IS INVALID
      res.send({ message: "User token is invalid" })
    }
 },
  
                                                     
	putAnAnswer: (req, res, next) => {
		Question.findOneAndUpdate(
			{_id: req.body.aID, 'answers._id': req.params.aID},
			{'answers.$.content': req.body.content}
			)
			if (err) {
				res.send(err)
			} else {
				res.send(answer)
			}
	},

	deleteAnAnswer: (req, res, next) => {
		Question.findOneAndUpdate(
			{ _id: req.params.aID },
			{ $pull: { answers: { _id: req.params.aID, 'user': req.user._id } } }
			).then(function(answer) {
			res.send(answer)
		})
	},

	//QUESTION & ANSWER VOTE
	voteUpAQuestion: (req, res, next) => {
		// Question.findOneAndUpdate(
		// 	{ _id: req.params.qID },
		// 	{ votes: }
		// 	)
		// 	}
		// }
	},

	// voteDownAQuestion: (req, res, next) => {

	// },

	// voteUpAnAnswer: (req, res, next) => {

	// },

	// voteDownAnAnswer: (req, res, next) => {

	// }
};
