

//dadjokes api
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');
const addNewJoke = async () => {
    const jokeText = await getDadJokes();
    // console.log(jokeText);
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi)
}

const getDadJokes = async () => {
    try{
        const config ={headers: {Accept:'application/json'}}
        const dadJokes = await axios.get('https://icanhazdadjoke.com/', config);
       return dadJokes.data.joke;
    } catch (e){
        return "no jokes available, sorry Nathan!"
    }

}
button.addEventListener('click', addNewJoke)
console.log("Merry Christmas Nathan!")