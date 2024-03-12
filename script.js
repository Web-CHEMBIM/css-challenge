const ratingMarks = document.querySelectorAll(".mark button");
const submitBtn = document.querySelector(".submit-btn");
const ratingScore = document.querySelector(".current-rating-score");
const ratingBlock = document. querySelector(".rating-block");
const thankYouBlock = document.querySelector(".thank-you-block");

let currentMark = null; //set this as global variable

ratingMarks.forEach(mark => {
    mark.addEventListener("click", (e) => {
        ratingMarks.forEach(mark => mark.classList.remove("active"));
        mark.classList.add("active");
        currentMark = mark.getAttribute("value")
        console.log(currentMark);
    })
})

submitBtn.addEventListener("click", () => {
    ratingBlock.classList.add("hidden");
    thankYouBlock.classList.remove("hidden");
    ratingScore.innerHTML = currentMark;
})



