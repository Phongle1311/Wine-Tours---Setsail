const $$=document.querySelector.bind(document),
      $$$=document.querySelectorAll.bind(document);

// Hover unhidden
$('.hide').hide();
$('.hide2').hide();
$('.hover-unhidden').mouseenter(function() {
    $(this).find('> .hide').slideDown(300);
    $(this).find('> .hide2').fadeIn(300);
})
$('.hover-unhidden').mouseleave(function() {
    $(this).find('> .hide').stop();
    $(this).find('> .hide2').stop();
    $(this).find('> .hide').slideUp(30);
    $(this).find('> .hide2').fadeOut(30);
})

// Click unhidden
const nav = $$$('.mobile-navbar__item > .click-unhidden'),
      subnav = $$$('.mobile-subnav__item > .click-unhidden');
var navOpen = -1, subnavOpen = -1;

nav.forEach((item, index)=>{
    item.addEventListener('click', function() {
        const hide = $(item).find('+ .hide'), 
              chevron = $(item).find('> .fas');

        if (navOpen === index) {
            $(hide).slideUp();
            navOpen = subnavOpen = -1;
            chevron.removeClass('rotate');
        }
        else{
            if (navOpen != -1) {
                $(nav[navOpen]).find('+ .hide').slideUp();
                $(nav[navOpen]).find('> .fas').removeClass('rotate');
                if (subnavOpen != -1) {
                    $(subnav[subnavOpen]).find('+ .hide').slideUp();
                    $(subnav[subnavOpen]).find('> .fas').removeClass('rotate');
                }
            }
            $(hide).slideDown();
            chevron.addClass('rotate');
            navOpen = index;
        }
    })
})

subnav.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        const hide = $(item).find('+ .hide'), 
              chevron = $(item).find('> .fas');
        
        if (index === subnavOpen){
            $(hide).slideUp();
            subnavOpen = -1;
            chevron.removeClass('rotate');
        }
        else{
            if (subnavOpen != -1) {
                $(subnav[subnavOpen]).find('+ .hide').slideUp();
                $(subnav[subnavOpen]).find('> .fas').removeClass('rotate');
            }
            $(hide).slideDown();
            chevron.addClass('rotate');
            subnavOpen = index;
        }
    })
})

// Hidden/Unhidden mobile navigation
$('#mobile-navbar').hide();
$('#top-bar__navbar-container').click(()=>{
    $('#mobile-navbar').slideToggle();
})

// Slide animation
const slides=$$$('.slide-img__wrapper'),
      slideRight=$$$('.slide-img__wrapper img:nth-child(3)'),
      imgDesc=$$$('.slide-img__desc'),
      slideButtonLeft=$$('#slide__button-left'),
      slideButtonRight=$$('#slide__button-right');
var slideIdx=0;

slides[0].style.opacity="1";
slideRight[0].style.opacity="1";

function slide(direction){
    slides[slideIdx].style.opacity="0";
    slideRight[slideIdx].style.opacity="0";
    imgDesc[slideIdx].style.opacity="0";
    
    if (direction==='up') slideIdx=(slideIdx+1)%3;
    else slideIdx=(slideIdx+2)%3;
    
    slides[slideIdx].style.opacity="1";
    setTimeout(()=>{
        slideRight[slideIdx].style.opacity="1";
    }, 200);
    imgDesc[slideIdx].style.opacity="1";
}

setInterval("slide('up')", 3000);
slideButtonLeft.onclick=()=>{slide('down')};
slideButtonRight.onclick=()=>{slide('up')};

// Progress Bars
const progressBars = $$$('.progress__bar--inner');
var progressCheck = [0,0,0]
window.addEventListener('scroll',()=>{
    progressBars.forEach((item, index)=>{
        if ((window.scrollY + window.innerHeight > item.offsetTop + item.offsetHeight) && progressCheck[index]==0){
            progressCheck[index]=1;
            item.style.width = item.getAttribute('data-percent') + '%';
        }
    })
})

// Counter
const counters = $$$('.counter');
var countCheck = [0,0,0,0];

window.addEventListener('scroll',()=>{
    counters.forEach((counter, index)=>{
        if ((window.scrollY + window.innerHeight > counter.offsetTop + counter.offsetHeight) && countCheck[index]==0){
            countCheck[index]=1;

            const countEnd= +counter.getAttribute('data-count');
            const countFunc=() => {
                let cur = +counter.innerHTML;
                counter.innerText = cur+3;
                if (cur < countEnd) setTimeout(countFunc, 1);
                else counter.innerText = countEnd;
            }
            countFunc();
        }
    })
})

// Sign in sign up
const topBarUserBtn=$$('#top-bar__user'),
      sign=$$('#sign'),
      signContainer=$$('#sign__container'),
      signBtn=$$$('#sign__container > ul > li'),
      signIn=$$('#sign-in__container'),
      signUp=$$('#sign-up__container');

topBarUserBtn.onclick = ()=>{
    sign.style.display="block";
    setTimeout(()=>{sign.style.opacity="1";}, 100);
}
sign.onclick = ()=>{
    sign.style.opacity="0";
    setTimeout(()=>{sign.style.display="none";}, 400);
}
signContainer.onclick = (e)=>{
    e.stopPropagation();
}

signBtn[0].onclick=()=>{
    signBtn[0].style.backgroundColor="var(--cyan)";
    signBtn[1].style.backgroundColor="var(--dark-cyan)";
    signIn.style.display="block";
    signUp.style.display="none";
}
signBtn[1].onclick=()=>{
    signBtn[0].style.backgroundColor="var(--dark-cyan)";
    signBtn[1].style.backgroundColor="var(--cyan)";
    signIn.style.display="none";
    signUp.style.display="block";
}

// Video
const linkVideo= "https://player.vimeo.com/video/127347999?title=0&byline=0&portrait=0&autoplay=1;",
      videoBtn = $$('.video__picture'),
      videoContainer = $$('.video__container'),
      video = $$('.video__container iframe');

videoBtn.onclick=()=>{
    videoContainer.style.display="block";
    video.setAttribute('src', linkVideo);
}
videoContainer.onclick=()=>{
    videoContainer.style.display="none";
    video.setAttribute('src', '');

}
video.onclick=(e)=>{
    e.stopPropagation();
}

// BackTop Button
const backTopBtn = $$('#back-top')
window.addEventListener('scroll',()=>{
    if (window.scrollY>800) backTopBtn.classList.remove('hidden');
    else backTopBtn.classList.add('hidden');
})
