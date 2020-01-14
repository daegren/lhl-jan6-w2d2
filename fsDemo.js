const fs = require('fs');

const HELLO_FILE_PATH = './fixtures/hello.txt';
const BIG_FILE_PATH = './fixtures/big.txt';

const readSync = () => {
  console.log("BEFORE READ");

  const content = fs.readFileSync(BIG_FILE_PATH);

  console.log("AFTER READ");

  console.log(content.length);
  // console.log(content.slice(0, 2000).toString());
};
// readSync();

const readAsync = () => {
  console.log("BEFORE READ");

  fs.readFile(BIG_FILE_PATH, (err, data) => {
    console.log("INSIDE BIG READ", data.length);
  });

  fs.readFile(HELLO_FILE_PATH, (err, data) => {
    console.log("INSIDE HELLO READ", data.length);
  });

  setTimeout(() => {
    console.log("MUCH LATER");
  }, 5 * 1000);

  console.log("AFTER READ");
};
readAsync();
