console.log("javascript")
//Instagram
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


//Tiktok
const tiktok_button = document.getElementById("tiktok_button");
const tiktok_animation = document.getElementById("tiktok_animation")

tiktok_animation.style.visibility = "hidden";

//create an event listener for upon click
tiktok_button.addEventListener('click', tiktok_like)
tiktok_animation.addEventListener('click', tiktok_reverse)

function tiktok_like(){
    tiktok_button.style.visibility = "hidden";
    tiktok_animation.style.visibility = "visible";
}

function tiktok_reverse(){
    tiktok_button.style.visibility = "visible";
    tiktok_animation.style.visibility = "hidden";
}



//Twitter
const twitter_button = document.getElementById("twitter_button");
const twitter_animation = document.getElementById("twitter_animation")

twitter_animation.style.visibility = "hidden";

//create an event listener for upon click
twitter_button.addEventListener('click', twitter_like)
twitter_animation.addEventListener('click', twitter_reverse)

function twitter_like(){
    twitter_button.style.visibility = "hidden";
    twitter_animation.style.visibility = "visible";
}

function twitter_reverse(){
    twitter_button.style.visibility = "visible";
    twitter_animation.style.visibility = "hidden";
}