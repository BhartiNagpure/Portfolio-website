console.log("running");
// nav element effect logic
jQuery(function($){
    var path= window.location.href;
    $('nav ul a').each(function(){
        if(this.href === path){
            $(this).addClass("active");
        }
    })
})

//intro element effect logic
jQuery(function($){
    var path2 = window.location.href;
    $(".intro ul li a").each(function(){
        if(this.href === path2){
            $(this).addClass("active2")
        }
    })
})

//more button logic
function myFunction() {
    var dots = document.querySelector(".dots");
    var btnText = document.querySelector(".myBtn");
    var moreText = document.querySelector(".more");
    var miniproject=document.querySelector(".mini-project");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        miniproject.style.height="320px";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        miniproject.style.height="380px";
    }
}

function myFunction1() {
    var dots1 = document.querySelector(".dots1");
    var btnText1 = document.querySelector(".myBtn1");
    var moreText1 = document.querySelector(".more1");
    var miniproject1=document.querySelector(".mini-project1");

    if (dots1.style.display === "none") {
        dots1.style.display = "inline";
        btnText1.innerHTML = "Read more";
        moreText1.style.display = "none";
      miniproject1.style.height="320px";
    } else {
        dots1.style.display = "none";
        btnText1.innerHTML = "Read less";
        moreText1.style.display = "inline";
      miniproject1.style.height="380px";
    }
}

function myFunction2() {
    var dots2 = document.querySelector(".dots2");
    var btnText2 = document.querySelector(".myBtn2");
    var moreText2 = document.querySelector(".more2");
 var miniproject2=document.querySelector(".mini-project2");

    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText2.innerHTML = "Read more";
        moreText2.style.display = "none";
      miniproject2.style.height="320px";
    } else {
        dots2.style.display = "none";
        btnText2.innerHTML = "Read less";
        moreText2.style.display = "inline";
        miniproject2.style.height="380px";
    }
}
