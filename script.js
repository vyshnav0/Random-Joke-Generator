const jokeBox = document.getElementById("joke");
const jokeDelivery = document.getElementById("joke-delivery");
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const url = "https://v2.jokeapi.dev/joke/Any";
// const url = "https://v2.jokeapi.dev/joke/Any?type=single";

let currentJoke;
let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        currentJoke = item;
        if (item.type === "twopart") {
            jokeBox.style.display = "inherit";
            jokeDelivery.textContent = ""; 
            jokeBox.textContent = `${item.setup}`;
            btn1.style.display = "inline";
        } else if (item.type === "single") {
            btn1.style.display = "none";
            jokeBox.textContent = `${item.joke}`;
            jokeDelivery.textContent = ""; 
            console.log(item.joke);
        }
    })
    .catch(err => {
        console.error(err);
    });
}

let showJoke=()=>{
    jokeBox.style.display = "none";
    jokeDelivery.textContent = `${currentJoke.delivery}`;
    console.log(currentJoke.delivery);
}
btn.addEventListener("click", getJoke);
btn1.addEventListener("click", showJoke);