console.log("javascript")

const insta_button = document.getElementById("ig_button");
const insta_animation = document.getElementById("ig_animation")

insta_animation.style.visibility = "hidden";

//create an event listener for upon click
insta_button.addEventListener('click', ig_like)
insta_animation.addEventListener('click', ig_reverse)

function ig_like(){
    insta_button.style.visibility = "hidden";
    insta_animation.style.visibility = "visible";
}

function ig_reverse(){
    insta_button.style.visibility = "visible";
    insta_animation.style.visibility = "hidden";
}
