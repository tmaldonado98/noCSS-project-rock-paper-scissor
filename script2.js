document.getElementById("button").setAttribute("style","visibility:hidden");
document.getElementById("pDiv").setAttribute("style","visibility:hidden");
document.getElementById("playAgain").setAttribute("style", "visibility:hidden");
document.getElementById("nextRound").setAttribute("style", "visibility:hidden");

let round1ScoreHum = "Player: " + sessionStorage.getItem('scoreAHum');
let round1ScoreCPU = "CPU: " + sessionStorage.getItem('scoreACpu');

document.getElementById("cumulScoreHum").innerHTML = round1ScoreHum;
document.getElementById("cumulScoreCPU").innerHTML = round1ScoreCPU;

document.getElementById("endSeriesPl").setAttribute("style", "visibility:hidden");
document.getElementById("endSeriesCpu").setAttribute("style", "visibility:hidden");



function showButton(){
    document.getElementById("button").setAttribute("style","visibility:visible");
}

function showPDiv(){
    document.getElementById("pDiv").setAttribute("style", "visibility:visible");
}

function showPlayAgain(){
    document.getElementById("playAgain").setAttribute("style", "visibility:visible");
}

function showNextRound (){
    document.getElementById("nextRound").setAttribute("style", "visibility:visible");
    if(sessionStorage.getItem('scoreBHum') == 2){
        document.getElementById("nextRound").setAttribute("style", "visibility:hidden")
    }
    else if(sessionStorage.getItem('scoreBCpu') == 2){
        document.getElementById("nextRound").setAttribute("style", "visibility:hidden")
    }
}

//
let moves = ["Rock", "Paper", "Scissor"]; 

let cpuMove = moves[Math.floor(Math.random()*moves.length)];

function showCpuMove(){
document.getElementById("cpu-selection").innerHTML = cpuMove;
conditional()
}

function computerMove(){
    return moves[Math.floor(Math.random()*moves.length)]
}

//console.log(cpuMove);
//


//
function popNoSelection(){
    document.getElementById("humanSelection").innerHTML = "No option selected."
};


function popRock(){
    document.getElementById("humanSelection").innerHTML = "Rock"
};


function popPaper(){
    document.getElementById("humanSelection").innerHTML = "Paper"
};


function popScissor(){
    document.getElementById("humanSelection").innerHTML = "Scissor"
};
//


//
let possibleOutcomes = ["Rock beats scissors!", "Paper beats rock!", "Scissor beats paper!", "Stalemate!"];

        
function one(){
   return document.getElementById("round-result").innerHTML = "CPU wins the round! " + possibleOutcomes[1];
}     

function two(){
    return   document.getElementById("round-result").innerHTML = possibleOutcomes[3];
} 

function three(){
    return   document.getElementById("round-result").innerHTML = "You win the round! " + possibleOutcomes[2];
} 

function four(){
    return  document.getElementById("round-result").innerHTML = "You win the round! " + possibleOutcomes[0];
} 

function five(){
    return   document.getElementById("round-result").innerHTML = "CPU wins the round! " + possibleOutcomes[2];
} 

function six(){
    return  document.getElementById("round-result").innerHTML = possibleOutcomes[3];
} 

function seven(){
    return  document.getElementById("round-result").innerHTML = possibleOutcomes[3];
} 

function eight(){
    return   document.getElementById("round-result").innerHTML = "You win the round! " + possibleOutcomes[1];
} 

function nine(){
    return   document.getElementById("round-result").innerHTML = "CPU wins the round! " + possibleOutcomes[0];
} 
//


//
function conditional(){
        if (document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove == "Paper"){
            return one();
        }
        else if (document.getElementById("humanSelection").innerHTML== "Paper" && cpuMove  == "Paper"){
            return two();
        }
        else if (document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper"){
            return three();
        }
        else if (document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor") {
            return   four();
        }
        else if (document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Scissor"){
            return    five();
        }
        else if (document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Scissor"){
            return    six();
        }
        else if (document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Rock") {
            return  seven();
        }
        else if (document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
            return   eight();
        }
        else if (document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Rock"){
            return   nine();
        }
    }
//

//

    function showScore2(){
        //1 if player scored 1 in first round and scores 1 again in round two
        if(sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 &&  document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
        sessionStorage.setItem('scoreBHum', 2),
        sessionStorage.setItem('scoreBCpu', 0),
        document.getElementById("endSeriesPl").setAttribute("style", "visibility:visible");
        }
        //2 if player scored 1 in first round and stalemate in round two
        else if (sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML== "Paper" && cpuMove  == "Paper" || sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Rock"){
        sessionStorage.setItem('scoreBHum', 1),
        sessionStorage.setItem('scoreBCpu', 0)
        }
        //3 if player scored 0 in first round (and cpu scores 1) and stalemate in round two
        else if (sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 1 && document.getElementById("humanSelection").innerHTML== "Paper" && cpuMove  == "Paper" || sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 1 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 1 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Rock"){
        sessionStorage.setItem('scoreBHum', 0),
        sessionStorage.setItem('scoreBCpu', 1)
        }
        //4 if player scored 0 (and cpu scored 1) in first round and scores 1 in round two.
        else if(sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 1 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 1 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 1 && document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
        sessionStorage.setItem('scoreBHum', 1),
        sessionStorage.setItem('scoreBCpu', 1)
        }
        //5 if player scored 1 in first round and scores 0 in round two
        else if (sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove == "Paper" || sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Rock"){
        sessionStorage.setItem('scoreBHum', 1),
        sessionStorage.setItem('scoreBCpu', 1)
        } 
        //6 if player scored 0 in first round and scores 0 in round two
        else if (sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 1 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove == "Paper" || sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 1 && document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 1 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Rock"){
        sessionStorage.setItem('scoreBHum', 0),
        sessionStorage.setItem('scoreBCpu', 2),
        document.getElementById("endSeriesCpu").setAttribute("style", "visibility:visible");
        } 
        //7 if player stalemate in first round and scores 1 in round two
        else if (sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
        sessionStorage.setItem('scoreBHum', 1),
        sessionStorage.setItem('scoreBCpu', 0)
        }  
        //8 if player stalemate in first round and scores 0 in round two
        else if (sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove == "Paper" || sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Rock"){
        sessionStorage.setItem('scoreBHum', 0),
        sessionStorage.setItem('scoreBCpu', 1)
        } 
        //9 if stalemate in first round and stalemate in second round
        else if(sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML== "Paper" && cpuMove  == "Paper" || sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Rock"){
        sessionStorage.setItem('scoreBHum', 0),
        sessionStorage.setItem('scoreBCpu', 0)
        }
    let scoreTextHum = ("Player: ") + sessionStorage.getItem('scoreBHum'); 
    let scoreTextCpu = ("CPU: ") + sessionStorage.getItem('scoreBCpu');

    document.getElementById("cumulScoreHum").innerHTML = scoreTextHum;
    document.getElementById("cumulScoreCPU").innerHTML = scoreTextCpu;
}



//end round