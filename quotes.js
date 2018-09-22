const xhr = new XMLHttpRequest();
var sentences = [];

xhr.onreadystatechange = function() {
    if(this.status == 200 && this.readyState == 4) {
        sentences = JSON.parse(this.responseText);
//        console.log(JSON.parse(sentences));
    }
}

xhr.open('GET', 'js/quotes.json', true);
xhr.send();    


function displayQuotes() {
    for(let i = 0; i < sentences.length; i++) {
        let output = document.getElementById('quoteDisplay');		
		let randomNumber = Math.floor(Math.random() * (sentences.length));
        output.innerHTML = `${sentences[randomNumber].quote} -${sentences[randomNumber].author}`;	
    }
}

