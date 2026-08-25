const fs=require("fs")
 const filepath="./test1.txt"
const result=fs.readFileSync(filepath)

console.log(result.toString());

const file_path1="./test2.txt"
//fs.writeFileSync(file_path1,result)
fs.writeFile(file_path1,result,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("I am in the file");
})
console.log("i am out of the file");

