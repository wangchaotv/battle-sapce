const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Please Select Branch: \n'
});

rl.prompt();

let answers = [];
rl.on('line', answer => {
  answer = answer.trim();
  switch (answer) {
    case ':q':
      // 退出不保存
      rl.close();
      break;
    case ':wq':
      // 保存并退出
      answers = answers.join('\n');
      fs.writeFile(path.join(__dirname, 'answer.txt'), answers, err => {
        if (err) console.error(err);
      });
      rl.close();
      break;
    default:
      answers.push(answer);
      break;
  }
});

// rl.emit('line', 'test');
