const { moveCommands } = require("./constants.js");

const handleUserInput = function (key) {
  if (moveCommands[key]) {
    connection.write(moveCommands[key]);
  } else if (key === "\u0003") {
    process.exit();
  } else {
    console.log("Wrong key");
  }
};

// setup interface to handle user input from stdin
let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput,
};
