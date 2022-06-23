let homeScoreEl = document.getElementById('home-score')
let guestScoreEl = document.getElementById('guest-score')

let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")

let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")

let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")

let homeScore = 0
let guestScore = 0


// console.log(homeScoreEl);

function increaseHomeScoreOne(){
    // console.log('clicked');
    homeScore += 1
    // console.log(homeScore)
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreTwo(){
    // console.log('clicked');
    homeScore += 2
    // console.log(homeScore)
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreThree(){
    // console.log('clicked');
    homeScore += 3
    // console.log(homeScore)
    homeScoreEl.textContent = homeScore
}

function increaseGuestScoreOne(){
    // console.log('clicked');
    guestScore += 1
    // console.log(homeScore)
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo(){
    // console.log('clicked');
    guestScore += 2
    // console.log(homeScore)
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreThree(){
    // console.log('clicked');
    guestScore += 3
    // console.log(homeScore)
    guestScoreEl.textContent = guestScore
}
