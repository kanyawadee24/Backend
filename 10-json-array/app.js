const fs = require("fs");

//Prepare
const song = process.argv[2];

// step-1 : json=>string
fs.readFile("./playlist.json", "utf-8", (err, data) => {

  // step-2 : string => JS Datatype
  const playList = JSON.parse(data);
  playList.push(song);

  // step-3 : เพิ่มของใน array todo
  const newData = JSON.stringify(playList);

  // step-4 : แปลงกลับเป็น JSON (string)
  const jsonData = JSON.stringify(playList);

  // step-5 : write back
  fs.writeFile("./playList.json", jsonData, (err) => {
    if (!err) console.log("Write complete");
  });
});
