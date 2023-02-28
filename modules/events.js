const EventEmitter = require("events");

const customEmitter = new EventEmitter();
customEmitter.on("response", (data, secondData) => {
  console.log(data);
  console.log(secondData);
});

customEmitter.emit("response", "hello world", '123');
customEmitter.emit("response", {name:'jose'}, '321');