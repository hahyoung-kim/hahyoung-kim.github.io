console.log("javascript")

const insta_button = document.getElementById("ig_button");
const insta_animation = document.getElementById("ig_animation")

insta_animation.style.visibility = "hidden";

//create an event listener for upon click
insta_button.addEventListener('click', ig_like)


function ig_like(){
    insta_button.style.visibility = "hidden";
    insta_animation.style.visibility = "visible";
}

