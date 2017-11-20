const express = require('express');
const router = express.Router();
const  Questions = require('../controller/questions.controller')

//---------------------- QUESTIONS --------------------------//

router.get("/", Questions.getAllQuestion)
router.post("/", Questions.postAQuestion)
router.get("/:qID", Questions.getAQuestion)
router.put("/:qID", Questions.putAQuestion)
router.delete("/:qID", Questions.deleteAQuestion)

//-------------------------- ANSWERS ---------------------------//

router.post('/:qID/answers', Questions.postAnAnswer)
// router.put('/:qID/answers/:aID', Questions.putAnAnswer)
// router.delete('/:qID/answers/:aID', Questions.deleteAnAnswer)

//-------------------------- QUESTION & ANSWER VOTE ---------------------------------//

// router.post('/:qID/voteup', Questions.voteUpAQuestion)
// router.post('/:qID/votedown', Questions.voteDownAQuestion)

// router.post('/:qID/answers/:aID/voteup', Questions.voteUpAnAnswer)
// router.post('/:qID/answers/:aID/votedown', Questions.voteDownAnAnswer)

module.exports = router;