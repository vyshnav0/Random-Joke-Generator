const jokeBox = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any"

let getJoke = ()=>{
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        if(item.type === "single"){
            jokeBox.textContent = `${item.joke}`
        }
        jokeBox.textContent = `${item.setup}  ${item.delivery}`
    })
    .catch(err=>{
        console.error(err);
    });
}

btn.addEventListener("click", getJoke);
