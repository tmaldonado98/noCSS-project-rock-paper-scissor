document.getElementById("button").setAttribute("style","visibility:hidden");
document.getElementById("pDiv").setAttribute("style","visibility:hidden");
document.getElementById("nextRound").setAttribute("style", "visibility:hidden");
document.getElementById("playAgain").setAttribute("style", "visibility:hidden");

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
}

//
let moves = ["Rock", "Paper", "Scissor"]; 

let cpuMove = moves[Math.floor(Math.random()*moves.length)];

function showCpuMove(){
document.getElementById("cpu-selection").innerHTML = cpuMove,
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
    return  document.getElementById("round-result").innerHTML = "You win round! " + possibleOutcomes[0];
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

    function showScore1(){
        if(document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
        sessionStorage.setItem('scoreAHum', 1),
        sessionStorage.setItem('scoreACpu', 0)
        }
        else if (document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove == "Paper" || document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Scissor" ||
        document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Rock"){
        sessionStorage.setItem('scoreAHum', 0),
        sessionStorage.setItem('scoreACpu', 1)
        }  
        else if(document.getElementById("humanSelection").innerHTML== "Paper" && cpuMove  == "Paper" || document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Scissor" ||
        document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Rock"){
            sessionStorage.setItem('scoreAHum', 0),
            sessionStorage.setItem('scoreACpu', 0)
    }

    let scoreTextHum = ("Player: ") + sessionStorage.getItem('scoreAHum'); 
    let scoreTextCpu = ("CPU: ") + sessionStorage.getItem('scoreACpu');

    document.getElementById("cumulScoreHum").innerHTML = scoreTextHum;
    document.getElementById("cumulScoreCPU").innerHTML = scoreTextCpu;
}

//end round


//
