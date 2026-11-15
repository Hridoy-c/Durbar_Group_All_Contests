function extractBodysContent(htmlString: string) {
  const body = htmlString.split('<body>')[1].split('</body>')[0]
  return body

}

console.log(extractBodysContent( "<html><head><title>My Page</title></head><body><h1>Welcome!</h1><p>This is my new React app.</p></body></html>"));
console.log(extractBodysContent("<!DOCTYPE html><html><body><p>Hello world!</p><div><span>Nested content.</span></div></body></html>" ));
