process.stdin.setEncoding('utf8');

let count = 0;

process.stdin.on('data', data => {
  console.log(data.toString());
  count++;

  console.log("Count is:", count);
});

process.stdin.on('end', () => {
  console.log('end');
});
