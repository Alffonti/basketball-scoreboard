const homeScoreEl = document.getElementById('home-score')
const guestScoreEl = document.getElementById('guest-score')
const homeScoreBtnOne = document.getElementById('home-score-btn-1')
const guestScoreBtnOne = document.getElementById('guest-score-btn-1')
const homeScoreBtnTwo = document.getElementById('home-score-btn-2')
const guestScoreBtnTwo = document.getElementById('guest-score-btn-2')
const homeScoreBtnThree = document.getElementById('home-score-btn-3')
const guestScoreBtnThree = document.getElementById('guest-score-btn-3')
const newGameBtn = document.getElementById('new-game-btn')

let homeScore = 0
let guestScore = 0

function winningTeam() {
    if (homeScore > guestScore) {
        homeScoreEl.style.color = '#4ff968' // green
        guestScoreEl.style.color = '#F94F6D' 
    } else if (guestScore > homeScore) {
        guestScoreEl.style.color = '#4ff968' // green
        homeScoreEl.style.color = '#F94F6D'
    }
}

homeScoreBtnOne.addEventListener('click', function increaseHomeScoreOne(){
    // console.log('clicked');
    homeScore++
    // console.log(homeScore)
    homeScoreEl.textContent = homeScore
    winningTeam()
})

homeScoreBtnTwo.addEventListener('click', function increaseHomeScoreTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
    winningTeam()
})

homeScoreBtnThree.addEventListener('click', function increaseHomeScoreThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
    winningTeam()
})

guestScoreBtnOne.addEventListener('click', function increaseguestScoreOne(){
    guestScore++
    // console.log(guestScore)
    guestScoreEl.textContent = guestScore
    winningTeam()
})

guestScoreBtnTwo.addEventListener('click', function increaseguestScoreTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
    winningTeam()
})

guestScoreBtnThree.addEventListener('click', function increaseguestScoreThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
    winningTeam()
})

newGameBtn.addEventListener('click', function newGame(){
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
    homeScoreEl.style.color = '#F94F6D';
    guestScoreEl.style.color = '#F94F6D';
})