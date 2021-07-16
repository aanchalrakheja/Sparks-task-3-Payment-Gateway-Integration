var payNow=document.getElementById("donate");
var header=document.getElementById("header");
var navItems=document.getElementsByClassName("nav-item");
var navbar=document.getElementById("navbar");
var navcollapsed=document.getElementById("navbar-collapsed");
var navToggle=document.getElementsByClassName("navToggle")[0];


payNow.addEventListener("click",function(){
    console.log("clicked");
    Instamojo.open("https://test.instamojo.com/@aanchalrakheja2001/");
});

window.onscroll=function(){
    if(window.scrollY>0)
    {
        header.style.backgroundColor="orangered";
        for(let i=0;i<navItems.length;i++)
        {
            navItems[i].style.color="white";
        }
    }
    else{
        header.style.backgroundColor="white";
        for(let i=0;i<navItems.length;i++)
        {
            navItems[i].style.color="black";
        }
    }
}
var count=0;
navcollapsed.addEventListener("click",function(){
    count%2===0 ?navToggle.style.visibility="visible":navToggle.style.visibility="hidden";
    count++;
});

navToggle.addEventListener("click",function(){
    navToggle.style.visibility="hidden";
});




