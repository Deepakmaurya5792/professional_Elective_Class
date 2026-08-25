const fs=require('fs')
const file_path="./test1.txt"
const content="Demo of sync writefile"

fs.writeFileSync(file_path,content)
fs.writeFile(file_path,content,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("I am in the file");
})
console.log("i am out of the file");



