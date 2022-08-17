const imageLocation = document.getElementById(`ramen-menu`);
const ramenForm = document.querySelector(`#new-ramen`);
let ramenDetails = document.querySelector(`.detail-image`);
let ramenName = document.querySelector(`.name`);
let ramenRestaurant = document.querySelector(`.restaurant`);
let ramenRating = document.querySelector(`#rating-display`);
let ramenComment = document.querySelector(`#comment-display`);
let ramenImage = document.createElement(`img`);

    function fetchRamen() {
        fetch(`http://localhost:3000/ramens`)
        .then((response) => response.json())
        .then((json) => getRamenData(json));
    }
    //create new array
    function getRamenData(ramenArray) {
        ramenArray.map((ramen) => getRamenArray(ramen));
    
    }
    //prevent default
    ramenForm.addEventListener(`submit`, (e) => {
        e.preventDefault();
        //connect "let" globals to "newRamen"
        const newRamen = {};
        console.log(newRamen);
        newRamen.name = e.target.name.value;
        newRamen.restaurant = e.target.restaurant.value;
        newRamen.image = e.target.image.value;
        newRamen.rating = e.target.rating.value;
        newRamen.comment = e.target.querySelector("#new-comment").value;
        return getRamenArray(newRamen);
        //console.log(newRamen);
    });

    function getRamenArray(ramen) {
        let ramenImage = document.createElement(`img`);
        ramenImage.src = ramen.image;
        imageLocation.append(ramenImage);
        ramenImage.addEventListener(`click`, function () {
        ramenDetails.src = ramen.image;
        ramenName.innerHTML = ramen.name;
        ramenRestaurant.innerHTML = ramen.restaurant;
        ramenRating.innerHTML = ramen.rating;
        ramenComment.textContent = ramen.comment;
    });
}
fetchRamen();