function generateProfileCard(user) {
  const name = user.name ?? "Anonymous";
  const city = user.address?.city ?? "Unknown";
  const followers = user.social?.followers ?? 0;

  return `${name} | ${city} | followers: ${followers}`;
}

// Example 1
console.log(generateProfileCard({ name: "Rafi", address: { city: "Dhaka" }, social: { followers: 0 } }));
// "Rafi | Dhaka | followers: 0"

// Example 2
console.log(generateProfileCard({ name: "Alice", social: { followers: 120 } }));
// "Alice | Unknown | followers: 120"

// Example 3: empty object
console.log(generateProfileCard({}));
// "Anonymous | Unknown | followers: 0"

// Example 4: empty strings are valid
console.log(generateProfileCard({ address: { city: "" }, name: "", social: { followers: 999 } }));
// " |  | followers: 999"

// Example 5: nulls
console.log(generateProfileCard({ address: { city: null }, name: null, social: { followers: null } }));
// "Anonymous | Unknown | followers: 0"

// Example 6: empty nested objects
console.log(generateProfileCard({ address: {}, name: "Bob", social: {} }));
// "Bob | Unknown | followers: 0"

// Example 7: missing social
console.log(generateProfileCard({ address: { city: "London" }, name: "Charlie" }));
// "Charlie | London | followers: 0"