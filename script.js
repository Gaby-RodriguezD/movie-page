const btns= document.querySelectorAll(".nav-btn");

            var sliderNav= function(manual){
                btns.forEach((btn) => {
                    btn.classList.remove("active");
                });

                btns[manual].classList.add("active");
            }

            btns.dorEach((btn, i)=> {
                btn.addEventListener("click", () => {
                    sliderNav(i);
                });
            });


const allStar= document.querySelectorAll('.rating .star')

allStar.forEach((item, idx)=> {
    
    item.addEventListener('click', function(){
        for(let i=0; i<allStar.length; i++) {
            if(i <= idx){
                allStar[i].classList.replace('far fa-star', 'fas fa-star')
            }
        }
    })
})