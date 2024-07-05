const givemeaJoke = require('give-me-a-joke');
const color = require('colors');
const figlet = require("figlet");

// console.log(givemeaJoke)

givemeaJoke.getRandomDadJoke((joke) => {
    console.log(joke.rainbow)
    console.log("hello from npm!!".rainbow)
})

figlet("Hello World!!", (err, data) => {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});