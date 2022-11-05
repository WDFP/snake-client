const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: "50541"
  });
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('you ded cuz you idled');
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();
