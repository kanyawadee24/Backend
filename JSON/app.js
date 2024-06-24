const fs = require("fs");

//Prepare
const product = process.argv[2];
const price = parseInt(process.argv[3]);
const order = parseInt(process.argv[4]);

fs.readFile("./productList.json", "utf-8", (err, data) => {
  const productList = JSON.parse(data);

  const newData = {
     id: productList.length + 1,
     name: product,
     price: price,
     quantity: order,
  };

  productList.push(newData);
  const jsonData = JSON.stringify(productList, null, 2);

  fs.writeFile("./productList.json", jsonData, (err) => {
    if (!err) console.log("Write complete");
  });
});
