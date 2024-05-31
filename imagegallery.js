let fullimgbox=document.getElementById("fullimgbox");
let fullimg=document.getElementById("fullimg");
function openfullimg(pic){
    fullimgbox.style.display="flex";
    fullimg.src=pic;
}
function closefullimg(){
    fullimgbox.style.display="none";
}
