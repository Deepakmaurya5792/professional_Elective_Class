const express=require("express");
const router=express.Router();
const events = [
    {
        id: 1,
        name: "Web Development Workshop",
        description: "Learn HTML, CSS and JavaScript",
        date: "2026-10-05",
        registrationCount: 25
    },
    {
        id: 2,
        name: "Node.js Backend Workshop",
        description: "Learn Express.js and REST APIs",
        date: "2026-10-10",
        registrationCount: 18
    },
    {
        id: 3,
        name: "Machine Learning Workshop",
        description: "Introduction to Machine Learning",
        date: "2026-10-15",
        registrationCount: 30
    },
    {
        id: 4,
        name: "Cyber Security Workshop",
        description: "Basics of Web and Network Security",
        date: "2026-10-20",
        registrationCount: 12
    },
    {
        id: 5,
        name: "React Workshop",
        description: "Learn React and Component Based Development",
        date: "2026-10-25",
        registrationCount: 20
    }
];

router.get("/events",(req,res)=>{
    return res.status(200).json({
        message:"Events retrieved successfully",
        events:events,
       
    })
})


router.post("/register",(req,res)=>{
    const{eventid}=req.body;
    if(eventid===undefined)
        return res.status(400).json({
    message:"Event id is required"
        
})
const event=events.find(e=>e.id===parseInt(eventid));
  let newregistrationcount=event.registrationCount+1;
event.registrationCount=newregistrationcount;
return res.status(200).json({
    message:"registration submitted",
    event:event
})
 

})

router.get("/event/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const event=events.find(e=>e.id===id);
    if(!event)
        return res.status(404).json({
    message:"event not found"
    })
    return res.status(200).json({
        event:event
    })

})

router.post("/cancel",(req,res)=>{
    const{eventid}=req.body;
    if(eventid===undefined)
        return res.status(400).json({
    message:"eventId is required"
})
    const event=events.find(e=>e.id===parseInt(eventid));
    if (!event) {
    return res.status(404).json({
        message: "Event not found"
    });
}
    if (event.registrationCount > 0) {
        event.registrationCount--;
    }
    return res.status(200).json({
        message:"candidate is removed",
        event

    })
})








module.exports=router

