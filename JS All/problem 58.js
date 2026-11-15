function simplifyPath(path) {
  const stack = [];
  const parts = path.split("/");

  for (const part of parts) {
    if (part === "" || part === ".") continue;

    if (part === "..") {
      if (stack.length) stack.pop();
    } else {
      stack.push(part);
    }
  }

  return "/" + stack.join("/");
}

console.log(simplifyPath("/home/"));                        // "/home"
console.log(simplifyPath("/home/user/../docs/./file.txt")); // "/home/docs/file.txt"
console.log(simplifyPath("/"));                             // "/"
console.log(simplifyPath("/../"));                          // "/"
console.log(simplifyPath("/home//foo/"));                   // "/home/foo"
console.log(simplifyPath("/a/./b/../../c/"));               // "/c"
console.log(simplifyPath("/a/.../b"));                      // "/a/.../b"