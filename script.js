
(function(){
    const linkNav = document.querySelectorAll('[href^="#"]'), 
    V = 0.5;  
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault();
        var w = window.pageYOffset,  
            hash = this.href.replace(/[^#]*(.*)/, '$1');  
        t = document.querySelector(hash).getBoundingClientRect().top,  
            start = null;
        requestAnimationFrame(step);  
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  
            }
        }
    }, false);
}}())


let btnLegal = document.querySelector('.cost__legal')
let btnIndiv =document.querySelector('.cost__individual')

btnLegal.addEventListener('click',switchLegal)
btnIndiv.addEventListener('click',switchIndiv)

function switchIndiv (){
    document.querySelector('.cost__table2-div').style=`display:inline; position:relative;`
    document.querySelector('.cost__table-div').style.display = 'none'
}
function switchLegal (){
    document.querySelector('.cost__table-div').style=`display:inline; position:relative;`
    document.querySelector('.cost__table2-div').style.display = 'none'
}

(function(){
    const burgerItem = document.querySelector('.burger')
    const menu = document.querySelector('.header__nav')
    const closeMenu = document.querySelector('.header__nav-close')
    const menuLinks = document.querySelectorAll('.header__link')
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active')
    })
    closeMenu.addEventListener('click',() => {
        menu.classList.remove('header__nav-active')
    })
    if(window.innerWidth < 1001){
        for(let i = 0;i<=menuLinks.length;i++){
            menuLinks[i].addEventListener('click', () =>{
                menu.classList.remove('header__nav-active')
            } )
        }
    }
}())