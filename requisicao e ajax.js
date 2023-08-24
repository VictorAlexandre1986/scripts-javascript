const URL = 'https://dog.ceo/api/breeds/list/all'
fetch(`${URL}`)
  .then((body) => body.json())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => console.error('Erro:', error.message || error))