const homeScoreEl = document.getElementById('home-score')
const guestScoreEl = document.getElementById('guest-score')

let homeScore = 0
let guestScore = 0

function increment(points, team) {
    if (team === 'home') {
        homeScore += points;
        homeScoreEl.textContent = homeScore;
    } else {
        guestScore += points;
        guestScoreEl.textContent = guestScore;
    }
    winningTeam()
}

function winningTeam() {
    if (homeScore > guestScore) {
        homeScoreEl.style.color = '#4ff968' // green
        guestScoreEl.style.color = '#F94F6D' 
    } else if (guestScore > homeScore) {
        guestScoreEl.style.color = '#4ff968' // green
        homeScoreEl.style.color = '#F94F6D'
    } else {
        guestScoreEl.style.color = '#F94F6D' 
        homeScoreEl.style.color = '#F94F6D'
    }
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
    guestScoreEl.style.color = '#F94F6D' 
    homeScoreEl.style.color = '#F94F6D'
}