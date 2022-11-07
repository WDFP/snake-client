let connection;
const moveCommands = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  1: "Say: WOW",
  2: "Say: BOOM",
};

const handleUserInput = function (key) {
  // if (key === "w") {
  //   connection.write("Move: up");
  connection.write(moveCommands[key]);
  if (key === "\u0003") {
    process.exit();
  }
};

// setup interface to handle user input from stdin

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
