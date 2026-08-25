import fs from "fs";
import zlib from "zlib"
//Create read stream
const readstream=fs.createReadStream("./test3.txt")
//tranform
const gzip=zlib.createGzip()
//create and write on stream
const writeStream=fs.createWriteStream('./out.txt')
//do create and use pipe
readstream.pipe(gzip)
.pipe(writeStream)