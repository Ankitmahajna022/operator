const api_url="https://qapi.vercel.app/api/random"
const quoet=document.getElementById("quote");
const author=document.getElementById("author");
async function getQuote(url){
    const reponse= await fetch(url);
    var data = await reponse.json();
    console.log(data);
    quoet.innerHTML=data.quote;
    author.innerHTML=data.author
}

getQuote(api_url);

function twitter(){
    window.open("href=https://twitter.com/intent/tweet?text=Hello%20world", "twitter", "width=600,height=400");
}