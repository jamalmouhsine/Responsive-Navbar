// script start
document.addEventListener('DOMContentLoaded',()=>{
    const menu = document.querySelector('.menu');
    const navList = document.querySelector('.nav-list');
    menu.addEventListener('click',()=>{
        if(navList.style.height){
            menu.firstElementChild.setAttribute('class','bx bx-menu');
            navList.style.height = null;
            navList.style.borderColor = 'transparent';
            document.body.classList.remove('active');
            document.body.style.overflowY='scroll';
        }else{
            menu.firstElementChild.setAttribute('class','bx bx-x');
            navList.style.height = navList.scrollHeight + 'px';
            navList.style.borderColor = '#3d3b37';
            document.body.style.overflowY='hidden';
        }
    })
    // close menu when window has resized 
    window.addEventListener('resize',()=>{
        if(window.innerWidth > 768){
            menu.firstElementChild.setAttribute('class','bx bx-menu');
            navList.style.height = null;
            navList.style.borderTop = '0';
            document.body.style.overflowY='scroll';
        }
    })
})
// script end