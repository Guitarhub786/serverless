
const getRandomDadJoke = async () => {

  //// This url now handled by serverless function ////
  // const url = "https://icanhazdadjoke.com/"

  // const jokeStream = await fetch(url, {
  //   headers: {
  //     Accept: "application/json"
  //   }
  // })

  // === REQUEST SERVERLESS FUNCTION === //
  const url = "/.netlify/functions/jokes"
  const jokeStream = await fetch(url)
  // === REQUEST SERVERLESS FUNCTION === //

  const jsonJoke = await jokeStream.json()
  const joke = jsonJoke.joke
  console.log(jsonJoke)
  console.log(joke)
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
setInterval(refreshJoke, 5000)


// Anonymous function 
// setInterval(() => {
//   refreshJoke()
// }, 10000)