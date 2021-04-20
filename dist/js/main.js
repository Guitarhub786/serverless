
const getRandomDadJoke = async () => {
  const url = "https://icanhazdadjoke.com/"

  const jokeStream = await fetch(url, {
    headers: {
      Accept: "application/json"
    }
  })
  const jsonJoke = await jokeStream.json()
  // console.log(jsonJoke)
  const joke = jsonJoke.joke
  return joke
}

const displayJoke = (joke) => {
  const h1 = document.querySelector('h1')
  h1.textContent = joke
}

const refreshJoke = async () => {
  const joke = await getRandomDadJoke()
  displayJoke(joke)
}


// load 1st Joke
refreshJoke()


// When only need to load one function
setInterval(refreshJoke, 10000)


// Anonymous function 
// setInterval(() => {
//   refreshJoke()
// }, 10000)