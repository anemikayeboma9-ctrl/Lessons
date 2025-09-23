 let submitBtn = document.querySelector(".sub_but")
 let stars = document.querySelectorAll(".star")
 let card2 = document.querySelector(".card_2")
 let card1 = document.querySelector(".card_1")


for(let i = 0; i < stars.length; i++ ){
    //     // addEventListener
    stars[i].addEventListener("click", function() {
        // if the item is already selected, remove the class and get out of the function.
        if(stars[i].classList.contains('staractive')){
            stars[i].classList.remove('staractive');
            return;
        }

        // Else, remove the class and all the other items
        for(let i = 0; i < stars.length; i ++){
            stars[i].classList.remove("staractive");
        }
        // And add the class in the cliked item.add
        stars[i].classList.add("staractive")

        console.log(stars)
    })

}
submitBtn.addEventListener("click",function(){
    let selectedStar = document.querySelector("staractive");
})