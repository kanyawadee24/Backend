const os = require("os");
const fs = require("fs");

const resource = {
  cpu: os.cpus()[0],
  totalmemory: os.totalmem() / 10 ** 9,
  platform: os.platform(),
  architecture: os.arch(),
};

const resourcestring = JSON.stringify(resource, null, 2);
fs.writeFile("notebook.txt", `${resourcestring}`, "utf-8", (err) => {
  console.log("error", err);
});
