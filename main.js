function createGame(team1, hour, team2) {
  return `
  <li>
    <img src="./assets/icon-${team1}.svg" alt="bandeira da seleção do ${team1}"/>
    <strong>${hour}</strong>
    <img src="./assets/icon-${team2}.svg" alt="bandeira da seleção da ${team2}"/>
  </li>

  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay: ${delay}s">
  <h2>${date}<span>${day}</span></h2>
  <ul>
      ${games}
  </ul>
  </div>
    
  `
}

document.querySelector('#cards').innerHTML =
  createCard('24/11', 'quinta', createGame('brazil', '16:00', 'serbia')) +
  createCard('28/11', 'segunda', createGame('portugal', '16:00', 'ghana')) +
  createCard('02/11', 'sexta', createGame('switzerland', '16:00', 'brazil'))
