function extractBodyContent(htmlString) {
  // TODO: Implement this function
 let body = htmlString.split('<body>')[1].split('</body>')[0]
  return body

}

console.log(extractBodyContent( "<html><head><title>My Page</title></head><body><h1>Welcome!</h1><p>This is my new React app.</p></body></html>"));
console.log(extractBodyContent("<!DOCTYPE html><html><body><p>Hello world!</p><div><span>Nested content.</span></div></body></html>" ));


// function extractBodyContent(htmlString) {
//   let start = htmlString.indexOf("<body>");
//   let end = htmlString.indexOf("</body>");

//   return htmlString.slice(start + 6, end);
// }

// console.log(
//   extractBodyContent(`
// <html>
//   <head>
//     <title>My Page</title>
//   </head>
//   <body>
//     <h1>Welcome!</h1>
//     <p>This is my new React app.</p>
//   </body>
// </html>`
//   )
// );