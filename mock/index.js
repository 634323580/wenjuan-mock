const test = require("./text");
const question = require("./question");
const user = require("./user");

const mockList = [...test, ...question, ...user];

module.exports = mockList;
