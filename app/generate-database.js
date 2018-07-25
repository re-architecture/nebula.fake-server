var faker = require('faker');

var database = { products: [] };

for (var i=1; i<=5; i++) {
  database.products.push({
    id: i,
    name: faker.random.words(),
    cost: Math.random()*100,
    quantity: Math.random()*1000
  });
}

console.log(JSON.stringify(database));

/* 
var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties


console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}")); */
// outputs: "Marks, Dean Sr."
