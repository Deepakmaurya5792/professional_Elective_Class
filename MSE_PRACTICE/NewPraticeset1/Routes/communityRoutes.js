// const {routes}=require("express")
// const router=require("express.router") 
const express = require("express");
const router = express.Router();
const polls = [
  {
    id: 1,
    question: "What is your favorite programming language?",
    choices: [
      { id: 1, text: "C++", responses: 10 },
      { id: 2, text: "Java", responses: 7 },
      { id: 3, text: "Python", responses: 15 },
      { id: 4, text: "JavaScript", responses: 12 }
    ]
  },
  {
    id: 2,
    question: "Which frontend technology do you prefer?",
    choices: [
      { id: 1, text: "React", responses: 20 },
      { id: 2, text: "Angular", responses: 8 },
      { id: 3, text: "Vue", responses: 5 }
    ]
  }
];


router.get("/polls", (req, res) => {
     return res.json({
      message:"polls retrive successfully",
      poll:polls

       
    });
});

router.get("/polls/:id",(req,res)=>{
    const id= parseInt(req.params.id);
    const poll=polls.find(s=>s.id===id)
    if(!poll)
        return res.status(404).json({
    message:"Poll not found"})
    return res.json({
        poll:poll
    })
})
router.post("/vote",(req,res)=>{
    const {pollid,optionid}=req.body;
    if(pollid===undefined|| optionid===undefined)
        return res.status(404).json({
    message:"Poll not found"})
        
    
    const poll=polls.find(p=>p.id===parseInt(pollid))
    if(!poll)
        return res.status(404).json({
    message:"Poll not found"})

    const option=poll.choices.find(choice=>choice.id===parseInt(optionid))
    if(!option)
        return res.status(400).json({
    message:"option invalid"})

    option.responses++;
    return res.status(200).json({
        message:"Vote increaese successfully"
    })
})

// router.get("/polls/:id/results", (req, res) => {

//     const id = parseInt(req.params.id);

//     const poll = polls.find(p => p.id === id);

//     if (!poll) {
//         return res.status(404).json({
//             message: "Poll not found"
//         });
//     }

//     let tot_res = 0;

//     poll.choices.forEach(choice => {
//         tot_res += choice.responses;
//     });

//     return res.status(200).json({
//         pollId: poll.id,
//         question: poll.question,
//         choices: poll.choices,
//         totalResponses: tot_res
//     });
// });
router.get("/polls/:id/results", (req, res) => {

    const id = parseInt(req.params.id);

    const poll = polls.find(p => p.id === id);

    if (!poll) {
        return res.status(404).json({
            message: "Poll not found"
        });
    }

    // Har option ka response
    const results = poll.choices.map(choice => ({
        optionId: choice.id,
        option: choice.text,
        responses: choice.responses
    }));

    // Sabhi options ke responses ka total
    const totalResponses = poll.choices.reduce(
        (total, choice) => total + choice.responses,
        0
    );

    return res.status(200).json({
        pollId: poll.id,
        results: results,
        totalResponses: totalResponses
    });
});

module.exports = router;