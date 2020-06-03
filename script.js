let button = document.querySelector("#speaktruths");

function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}

button.addEventListener('click', async function(){

    let template = `<blockquote id='quote' class='jesusquotes'></blockquote>
      <p id='verse' class='jesusquotes'></p>`;

    let response = await axios.get('projects/verses.json');
    console.log(response.data);

    let randomNum = Math.floor(randomNumber(0,response.data.length));
    console.log(randomNum)

    console.log(response.data[randomNum])
    Quote = response.data[randomNum].Quote
    Verse = response.data[randomNum].Verse
    console.log(Quote)
    console.log(Verse)

    quotebox.innerHTML = template;
    quotebox.querySelector('blockquote').innerText = Quote;
    quotebox.querySelector('p').innerText = Verse;
  
  })