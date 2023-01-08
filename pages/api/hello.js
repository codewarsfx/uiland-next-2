// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const request = require ("request")
// import {pipeline} from 'node:stream/promises';
// import got from 'got';
// const { createWriteStream } = require("fs");
// import { promises as fs } from "fs";

const fs = require('fs');
  // import fetch from 'node-fetch';
   import {createWriteStream} from 'node:fs';
  import {pipeline} from 'node:stream';
  import {promisify} from 'node:util'
// export default function handler(req, res) {

//   const http = require('http');
//   const https = require('https');
//   // image downloading ,but empty

//   const fileName="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg"


 
  
//   const streamPipeline = promisify(pipeline);
  
// //   const der=async()=>{
    
// //   const response = await fetch('https://github.githubassets.com/images/modules/logos_page/Octocat.png');
// //   console.log(response)
// //   if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
  
// //   await streamPipeline(response.body, createWriteStream('./octocat.png'));
 
// //   res.send();
// //  res.end()
// //   }
// //   res.send();
// //  res.end()
// //   der()

// //   res.setHeader("content-disposition",`attachment; filename= ${fileName} `)
// // let vm
// //   // send request to the original file
// // request
// //     .get(fileName) // download original image
// //     .on("response", function(response) {
// //    vm=response
// //     })
// //     .pipe(res); // pipe converted image to HTTP response
// //     console.log(vm)
// //     res.send();
// //     res.end()



  
// // var Stream = require('stream').Transform;
  
// // var downloadImageFromURL = (url, filename, callback) => {
  
// //     var client = http;
// //     if (url.toString().indexOf("https") === 0){
// //       client = https;
// //      }
  
// //     client.request(url, function(response) {                                        
// //       var data = new Stream();                                                    
  
// //       response.on('data', function(chunk) {                                       
// //          data.push(chunk);                                                         
// //       });                                                                         
// //       res.send();
// //            res.end()
// //       response.on('end', function() {                                             
// //          fs.writeFileSync(filename, data.read());                               
// //       });    
// //       res.send();
// //       res.end()                                                                     
// //    }).end();
// //    res.send();
// //    res.end()
// // };
  
// // downloadImageFromURL('https://www.itsolutionstuff.com/assets/images/logo-it.png', 'it.png');


 
// //  const url=`https://firebasestorage.googleapis.com/v0/b/uiland.appspot.com/o/Cowrywise%2Fcowrywisepng.png?alt=media&token=4cf2a834-d589-43d8-9a78-a497f9cc9cfb`
// //   // got(url)
//   //   .then(response => res.send(response.body))
//   //   .catch(error => console.log(error.response.body));

// //  const t=got.stream(url).pipe(createWriteStream('image.png'));

// //  t.on("response",async response=>{
// //   try {
// // 		await pipeline(
// // 			readStream,
// // 			createWriteStream('image.png')
// // 		);

// // 		console.log('Success');
// // 	} catch (error) {
		
// // 	}
// //   res.send(response)
// // })



// }


const fetch = require("node-fetch");
export default function handler(req, res) {

  const fetch = require("node-fetch");
  // Set the appropriate headers, to let
  // the browser know that it should save
  console.log(req.body)
  // res.setHeader(
  //   "content-disposition", `attachment; filename=${req.body}`,
  // );
  // Fetch the required image
  const imageURL = req.body;
  const response =   request.get(imageURL);
  res.end(JSON.stringify(response));
       res.status(200)
       res.send(response)
       res.end()
// console.log(response)
  // Pipe the request buffer into
  // the response back to the client
   return response.pipe(res);
  }


// export default function handler(req, res) {

//   const download = require ('image-downloader');
 
//   let v= Math.floor(Math.random())
//   const options = {
//     url: 'https://firebasestorage.googleapis.com/v0/b/uiland.appspot.com/o/Cowrywise%2Fcowrywisepng.png?alt=media&token=4cf2a834-d589-43d8-9a78-a497f9cc9cfb',
//     dest: `../../screen.jpg`,
//   };
//   res.setHeader("content-disposition",`attachment; filename= ${options.url} `)
// download.image(options)
//     .then(({ filename }) => {
//       console.log('Saved to', filename);
     
//       //  res.end(JSON.stringify(filename));
//     })
//     .catch((err) => console.error(err));
// res.send({msg:"p"})}

  // const download = (url, path, callback) => {
  //   request.head(url, (err, res, body) => {
  //     request(url)
   
  //       .pipe(fs.createWriteStream(path))
     
  //       .on('close', callback)
  //   })
  // }
  
  // const url = 'https://firebasestorage.googleapis.com/v0/b/uiland.appspot.com/o/Cowrywise%2Fcowrywisepng.png?alt=media&token=4cf2a834-d589-43d8-9a78-a497f9cc9cfb'
  // const path = './public/assets/img'
  
  // download(url, path, () => {
  //   console.log('✅ Done!')
  // })
  
  
  //}