// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const request = require ("request")
export default function handler(req, res) {
  const fileName="https://firebasestorage.googleapis.com/v0/b/uiland.appspot.com/o/Cowrywise%2Fcowrywisepng.png?alt=media&token=4cf2a834-d589-43d8-9a78-a497f9cc9cfb"
  res.setHeader("content-disposition",`attachment; filename= ${fileName} `)


  // send request to the original file
  request
    .get(`http://localhost:3000/api/hello?filename=public/`+ fileName) // download original image
    .on("error", function(err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>404 not found</h1>");
      res.end();
      return;
    })
    .pipe(res); // pipe converted image to HTTP response
}
