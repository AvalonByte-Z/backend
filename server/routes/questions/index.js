var express = require('express');
var router = express.Router();

//---------------------- QUESTIONS --------------------------//

//GET All /questions List
router.get("/", function(req, res, next) {
  res.json({
  	response: "You sent me GET request to /questions"
  });
});

//POST /questions
//Route for creating question
router.post("/", function(req, res, next) {
  res.json({
  	response: "You sent me POST request to /questions",
  	body: req.body
  });
});

//GET /questions/:id
//Route for specific question
router.get("/:qID", function(req, res, next) {
  res.json({	
  	response: "You sent me GET request to /questions/" + req.params.qID
  });
});

//PUT /questions/:id
//Route for updating specific questions
router.put("/:qID", function(req, res, next) {
	res.json({
		response: "You sent me pUT request to /questions/" + req.params.qID
	})
})

//DELETE /questions/:id
//Route for deleting specific answers
router.delete("/:qID", function(req, res, next) {
	res.json({
		response: "You sent me DELETE request to /questions/" + req.params.qID
	})
})

//-------------------------- ANSWERS ---------------------------//

//POST to /question/qID/answer
//Route for creating an answer to specific question
router.post('/:qID/answer', function(req, res) {
  res.json({
    response: "You sent me PUT request to /question/:qID/answer",
    questionID: req.params.qID
  })
})

//PUT to /question/qID/answer/aID
//Route for creating an update answer to specific question
router.put('/qID/answer/aID', function(req, res) {
  res.json({
    response: "You sent me PUT request to /question/qID/answer/aID",
    questionID: req.params.qID,
    answerID: req.params.aID,
    body: req.body
  })
})

//DELETE /question/qID/answer/aID
//Route for deleting an answered question
router.delete('/qID/answer/aID', function(req, res) {
  res.json({
    response: "You sent me DELETE request to /question/qID/answer/aID",
    questionID: req.params.qID,
    answerID: req.params.aID,
    body: req.body
  })
})

//-------------------------- QUESTION VOTE ---------------------------------//

//POST /question/:id/answer/:id/vote-:dir
//Route for voteup on specified question and answer
router.post('/qID/vote-:dir', function(req, res) {
  res.json({
    response: "You sent me POST request to /question/qID/vote-:dir" + req.parms.dir,
    questionID: req.params.qID,
    answerID: req.params.aID,
    vote: req.params.dir
  })
})

//-------------------------- ANSWER VOTE ---------------------------------//

//POST /question/:id/answer/:id/vote-:dir
//Route for voteup on specified question and answer
router.post('/qID/answer/aID/vote-:dir', function(req, res) {
  res.json({
    response: "You sent me POST request to /question/qID/answer/aID/vote-:dir" + req.parms.dir,
    questionID: req.params.qID,
    answerID: req.params.aID,
    vote: req.params.dir
  })
})

module.exports = router;