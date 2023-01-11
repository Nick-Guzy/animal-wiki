window.onload = function() {
  assignButtonHandler();  
  document.querySelector('#input-area > form').oninput = function() {
    // un-show all cards when user starts typing in box
    let cardList = document.getElementsByClassName('animal-card');
    for (i = 0; i < cardList.length; i++) {
      cardList[i].classList.remove('showing');
    }
    document.getElementById('no-results-message').classList.remove('showing');
  }
}
function assignButtonHandler() {
  document.querySelector('#input-area > form').onsubmit = function(e) {
    e.preventDefault();
    let userAnimal = document.querySelector('#input-area input').value.trim().toLowerCase();
    if (!userAnimal) {
      document.querySelector('#input-area input').value = '';
      return;
    }
    let idToShow = userAnimal + '-card';
    let cardToShow = document.getElementById(idToShow);
    if (!cardToShow) {
      document.getElementById('no-results-message').innerText = 'No animal found for "' + userAnimal + '" :(';
      idToShow = 'no-results-message';
    }
    document.getElementById(idToShow).classList.add('showing');

  }
}
// adding co-author