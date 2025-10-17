//this is meant to block the main thread for 5 seconds
//so that we can see how async functions work in JS
//when the main thread is blocked
const waitSync = () => {
  let currentTime = new Date().getTime();
  // console.log("🚀 ~ waitSync ~ currentTime:", currentTime)
  const timeOver = currentTime + 5000;

  while (currentTime < timeOver) {
    // console.log("waiting");
    currentTime = new Date().getTime();
  }
  // console.log("time over!!!");
  // console.log(1);
  // console.log(2);
  // console.log(3);
};

//this is meant to simulate an async operation
//like a network request or a DB operation
//which takes some time to complete
setTimeout(() => {
  // console.log("time over!!!");
}, 0);
// console.log(1);
// console.log(2);
// console.log(3);

// Promise  -> promise of future value

// network request
// DB CRUD -  promises
// generating password salt - cryptography

// 3 states - PENDING
// FULFILLED REJECTED - SETLLED

const promise = new Promise((resolve, reject) => {
  // resolve("promise data");
  reject("Promise rejected with reason-123");
});

setTimeout(() => {
}, 0);

//async function: a function that returns a promise
//this helps make the code look synchronous, since normally javascript can only do one thing at a time