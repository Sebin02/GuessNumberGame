let randomNumber=Math.floor(Math.random()*20); //function to generate random number
console.log(randomNumber);
let Btncheck=document.getElementsByClassName("check")[0];

Btncheck.addEventListener('click',()=>{                                     //button to check the random number
    let guess=document.getElementsByClassName("guess")[0].value;            //the input value 
    guessNumber=Number(guess);
    let highscore=document.getElementsByClassName("highscore")[0].textContent;
    let highscr=Number(highscore);                                          //converting highscore to number
    let scores=document.getElementsByClassName("score")[0].textContent;
    let scr=Number(scores);                                                 //converting score to number
    
    if (randomNumber>guessNumber){                                          //Condition when randon number is greater than guess number
        document.getElementsByClassName('message')[0].innerHTML="Too low";
        scr--;                                                              //Reduce score by 1
        document.getElementsByClassName("score")[0].innerHTML=`${scr}`;
    }
    else if(randomNumber<guessNumber){                                      //Condition when random greater than number guessed
        document.getElementsByClassName('message')[0].innerHTML="Too high";
        scr--;
        document.getElementsByClassName("score")[0].innerHTML=`${scr}`;     //Show score
    }
    else if(randomNumber==guessNumber){
        document.getElementsByClassName('message')[0].innerHTML="You guessed it Right";//condition when random same as guessed
        document.body.style.backgroundColor="#60B347";                      //change backround color to green
        document.getElementsByClassName('number')[0].innerHTML=randomNumber;// show the number in place of '?'
        if (scr>highscr){                                                   //to check score and highscore
            document.getElementsByClassName('highscore')[0].innerHTML=`${scr}`;//
        }
    }
})

let resetBtn=document.getElementsByClassName("again")[0];               
/*function to reset score,change number,message,background color
when Again button is clicked */
resetBtn.addEventListener('click',()=>{
    document.body.style.backgroundColor="#222";
    document.getElementsByClassName('message')[0].innerHTML="Start guessing...";
    document.getElementsByClassName('number')[0].innerHTML="?";
    document.getElementsByClassName('guess')[0].value="";
    document.getElementsByClassName("score")[0].textContent="20";
    randomNumber=Math.floor(Math.random()*20);
    console.log(randomNumber);
})