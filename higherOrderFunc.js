const higherOrderFunc = (callback) => {
  const person = { initials: "DM" };

  setTimeout(() => {
    person.initials = 'VK';
    callback(person);
  }, 1000);

  return person;
};

console.log("BEFORE MAIN CALL");

const result = higherOrderFunc(person => {
  console.log(person);
});

console.log("AFTER MAIN CALL", result);

setTimeout(() => {
  console.log(result);
}, 2000);
