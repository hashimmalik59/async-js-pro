// Sync
console.log("1");
console.log("2");
console.log("3");

// Async
console.log("A");
setTimeout(() => {
  console.log("B");
}, 1000);
console.log("C");

// Sync code executes line by line(it waits for the current line)
// Sync code always executes first
// Async code is non blocking(it waits for none)
