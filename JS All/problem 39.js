function toQueryString(params) {
  return Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
}

// Examples from the problem
console.log(toQueryString({ search: "hello world", page: 1 })); // "search=hello%20world&page=1"
console.log(toQueryString({ sort: "asc", limit: 10 }));         // "sort=asc&limit=10"

// Order follows Object.entries (insertion order for string keys)
console.log(toQueryString({ page: 1, search: "hello world" })); // "page=1&search=hello%20world"

// Empty object
console.log(toQueryString({}));                                 // ""

// Single pair (no trailing &)
console.log(toQueryString({ a: 1 }));                           // "a=1"

// Numbers: integers, decimals, negatives, zero
console.log(toQueryString({ n: 0, m: -5, f: 3.14 }));           // "n=0&m=-5&f=3.14"

// Empty string value
console.log(toQueryString({ q: "" }));                          // "q="

// Special characters in values
console.log(toQueryString({ q: "a&b=c" }));                     // "q=a%26b%3Dc"
console.log(toQueryString({ q: "100%" }));                      // "q=100%25"
console.log(toQueryString({ q: "a+b" }));                       // "q=a%2Bb"
console.log(toQueryString({ q: "x/y?z#w" }));                   // "q=x%2Fy%3Fz%23w"

// Special characters in keys
console.log(toQueryString({ "first name": "John" }));           // "first%20name=John"
console.log(toQueryString({ "a&b": 1 }));                       // "a%26b=1"

// Unicode (Bangla)
console.log(toQueryString({ city: "ঢাকা" }));                    // "city=%E0%A6%A2%E0%A6%BE%E0%A6%95%E0%A6%BE"

// Characters encodeURIComponent leaves unchanged
console.log(toQueryString({ k: "A-Z_a.z!~*'()" }));             // "k=A-Z_a.z!~*'()"

// Integer-like keys are ordered numerically first by JS, then string keys
console.log(toQueryString({ b: 1, 2: "two", a: 3, 1: "one" })); // "1=one&2=two&b=1&a=3"

// Max size: 50 keys
const big = {};
for (let i = 0; i < 50; i++) big[`key${i}`] = i;
console.log(toQueryString(big).split("&").length);              // 50