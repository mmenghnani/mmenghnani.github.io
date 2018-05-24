var url = 'https://talaikis.com/api/quotes/random/';

fetch(url)
  .then(function(response){
  return response.json()
   })
  .then(function(res){
  document.querySelector("#quote").innerText = res.quote;
  document.querySelector("#author").innerText = '- ' + res.author;
  
     })
  .catch(function(response){
  console.log(response)
})

    