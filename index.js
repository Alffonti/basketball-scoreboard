const homeScoreEl = document.getElementById('home-score')
const guestScoreEl = document.getElementById('guest-score')
const homeScoreBtnOne = document.getElementById('home-score-btn-1')
const guestScoreBtnOne = document.getElementById('guest-score-btn-1')
const homeScoreBtnTwo = document.getElementById('home-score-btn-2')
const guestScoreBtnTwo = document.getElementById('guest-score-btn-2')
const homeScoreBtnThree = document.getElementById('home-score-btn-3')
const guestScoreBtnThree = document.getElementById('guest-score-btn-3')

let homeScore = 0
let guestScore = 0

homeScoreBtnOne.addEventListener('click', function increaseHomeScoreOne(){
    // console.log('clicked');
    homeScore++
    // console.log(homeScore)
    homeScoreEl.textContent = homeScore
})

homeScoreBtnTwo.addEventListener('click', function increaseHomeScoreTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
})

homeScoreBtnThree.addEventListener('click', function increaseHomeScoreThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
})

guestScoreBtnOne.addEventListener('click', function increaseguestScoreOne(){
    guestScore++
    // console.log(guestScore)
    guestScoreEl.textContent = guestScore
})

guestScoreBtnTwo.addEventListener('click', function increaseguestScoreTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
})

guestScoreBtnThree.addEventListener('click', function increaseguestScoreThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
})