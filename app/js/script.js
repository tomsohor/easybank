const burgerBtn = document.querySelector('#burgerBtn');
const header = document.querySelector('.header');
const Menutoggle = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');
var breakpoint = window.matchMedia("(min-width:63em)"); // get breakpoint


function removeOpen(x){  // remove menu without click on toggle
    if(x.matches){
        if(header.classList.contains('open')){
            header.classList.remove('open');
            body.classList.remove('noscroll');
            Menutoggle.forEach(x=>{
                x.classList.remove('fade-in');
                
            })
            
    }


}
}

removeOpen(breakpoint)
breakpoint.addListener(removeOpen);



burgerBtn.addEventListener('click',()=>{
    
    if (header.classList.contains('open')){ // close menu
        header.classList.remove('open');
        body.classList.remove('noscroll');
        Menutoggle.forEach(e=>{
            e.classList.remove('fade-in');
            e.classList.add('fade-out')
            
        })
    }else{ //open menu
        header.classList.add('open');
        body.classList.add('noscroll');
        Menutoggle.forEach(e=>{
            e.classList.remove('fade-out');
            e.classList.add('fade-in')
        })
    }
})


