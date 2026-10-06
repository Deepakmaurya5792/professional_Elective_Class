const express=require("express")

const router = express.Router();
const products = [
    {
        id: 1,
        name: "Laptop",
        ratingCount: 10,
        averageRating: 4.2
    },
    {
        id: 2,
        name: "Mobile Phone",
        ratingCount: 20,
        averageRating: 4.5
    },
    {
        id: 3,
        name: "Headphones",
        ratingCount: 5,
        averageRating: 3.8
    }
];

router.get("/products",(req,res)=>{
    return res.status(200).json({
        message:"Product retrive successfully",
        product:products
    })
})


router.post("/rate",(req,res)=>{
    const{productid,rating}=req.body;
    if(productid===undefined || rating===undefined)
        return res.status(404).json({
    message:"productId and rating are required"
        })

    const product=products.find(  p=>p.id===parseInt(productid) )
    if(!product)
        return res.status(404).json({
    message:"product not found"})

    if(typeof rating !=="number"|| rating >5 ||rating<1){
        return res.status(400).json({
            message:"Rating sholud be between 1 and 5"
    })

}
let oldcount=product.ratingCount;
let oldAverage=product.averageRating;
let newcount=oldcount+1;
let newaverage=((oldAverage*oldcount)+rating)/newcount;
product.ratingCount = newcount;
product.averageRating = newaverage;
return res.status(200).json({
    message:"rating submitted successfully",
    product:product
})
})

router.get("/ratings",(req,res)=>{

    const ratings=products.map(product=>({
        name:product.name,
        ratingcount:product.ratingCount,
        averagerating:product.averageRating
    }))
    return res.status(200).json({
        message:"Product ratings retrieved successfully",
        ratings:ratings
       
        
    })
})

module.exports=router;