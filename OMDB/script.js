const apiKey= "75b5faa3";

const movieName=document.getElementById("title");
const poster=document.getElementById("poster");
const year=document.getElementById("year");
const actors=document.getElementById("actors");
const plot=document.getElementById("plot");

const btn=document.getElementById("btn");
const search=document.getElementById("search");
function api(t){
    const apiurl='https://www.omdbapi.com/?t='+t+'&apikey=75b5faa3';
    fetch(apiurl).then((response) => response.json()).then((data) => {
       poster.src= data.Poster;
       movieName.innerHTML=data.Title;
       year.innerHTML=data.Year
       actors.innerHTML=data.Actors
       plot.innerHTML=data.Plot

       
    })
}

btn.addEventListener("click",() => {
    api(search.value);
})
 
