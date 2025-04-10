const color=document.getElementById("color-btn");
const copy=document.getElementById("copy-btn");

color.addEventListener("click",function(){
   
      let random=Math.floor(Math.random(256,256,256)*10000000).toString(16);
        console.log(random)
    document.body.style.backgroundColor="#"+random;

    this.textContent="#"+random;
   
});
