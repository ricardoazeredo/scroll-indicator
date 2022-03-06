window.onscroll = function() {scrollPage()};


function scrollPage() {    
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    
    console.log(scrolled)
    document.querySelector('#bar').style.width = scrolled + '%';
}