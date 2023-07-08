var button=document.querySelectorAll(".btn div");
var len= button.length;
for(var i=0;i<len;i++){
    button[i].addEventListener("click", function(){
        var letter=this.innerHTML;
        audio(letter);
        Animation(letter);
    });  
}

function audio(letter){
    Source="sounds/"+`${letter.toLowerCase()}`+".mp3";
    var aud_name= new Audio(Source);
    aud_name.play();
}
