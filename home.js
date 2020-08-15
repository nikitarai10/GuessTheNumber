let randomnumber = Math.floor(Math.random()*100)+1;

const input = document.querySelector('#guessfield');
const submit = document.querySelector('#submit');

const prevmsg = document.querySelector('.prevguess');
const infomsg= document.querySelector('.infomessage');
const lowhigh = document.querySelector('.loworhigh');

let guesscount = 1;
let resetbutton ,division; 

const form = document.getElementById('form');
const show = document.querySelector('.showbox');

function display(){
  show.checkguess();
}
form.addEventListener('submit',display);

function checkguess(event){
    event.preventDefault();
    let userguess = Number(input.value);
    if( guesscount === 1 ){
        prevmsg.textContent = "Previous Guesses: ";
    }
    prevmsg.textContent += userguess + ' ';
    if( userguess === randomnumber ){
        infomsg.textContent = "CONGRATULATION !! YOU WON !!";
        infomsg.style.backgroundColor = 'green';
        lowhigh.textContent = '';
        setGameOver();
    } else if( guesscount === 10 ){
        infomsg.textContent="GAME OVER !! TRY AGAIN !! ";
        infomsg.style.backgroundColor = 'red';
        lowhigh.textContent = '';
        setGameOver();
    } else {
        infomsg.textContent = 'WRONG !! ';
        infomsg.style.backgroundColor = 'red';
        infomsg.style.color = 'white';
    if ( userguess > randomnumber){
        lowhigh.textContent = 'Your Guess Is High !! Try Again';
    }else if( userguess <randomnumber){
        lowhigh.textContent = 'Your Guess Is Low !! Try Again !!';
    }
      }
      guesscount++;
      input.value='';
      input.focus();
}
submit.addEventListener('click',checkguess);

function setGameOver(){
    input.disabled = true;
    submit.disabled = true;
     resetbutton = document.createElement('button');
     resetbutton.textContent = 'Start New Game';
     resetbutton.setAttribute('id' , 'startbutton');
     document.body.append(resetbutton);
     division = document.querySelector('.container');
     division.append(resetbutton);
resetbutton.addEventListener('click',resetgame);
}


function resetgame(){
    guesscount=1;
    let resetall = document.querySelectorAll('.parent p');
    for ( let i=0 ; i<resetall.length ;i++){
        resetall[i].textContent= '';
    }
    resetbutton.parentNode.removeChild(resetbutton);
    input.disabled = false;
    submit.disabled = false;
    input.value = '';
    input.focus();
    randomnumber = Math.floor(Math.random()*100)+1;
}
