const net = require("net");
const { IP, PORT } = require("./constants.js");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
  });
  conn.on("connect", () => {
    // Client Can Send a Reply-M2W5-Intro to net
    conn.write("Name: VCM");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
};
