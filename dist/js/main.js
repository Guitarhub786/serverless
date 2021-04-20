const getRandomDadJoke = async () => {
  return "Do you want a brief explanation of what an acorn is? In a nutshell, it's an oak tree."
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





setInterval(() => {
  refreshJoke()
}, 3000)