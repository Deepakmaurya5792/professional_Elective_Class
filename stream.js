 import fs, { writeFile } from "fs"
// const readstream=fs.createReadStream('./test1.txt');
// readstream.on('data',(chunk)=>{
//     console.log(chunk.toString());
// })

// readstream.on('end',()=>{
//     console.log("Reached at the end of file");
// })


const readstream=fs.ReadStream('./test1.txt');
 const writestream=fs.createWriteStream('./out.txt');
// readstream.on('data',(chunk)=>{
//     writestream.write(chunk);
// })
readstream.pipe(writestream);

writestream.on("finish",()=>{
    console.log("End of stream")
})
// readstream.on('end',()=>{
//     console.log("Reached at the end of chunk");
//     writestream.end();
// })