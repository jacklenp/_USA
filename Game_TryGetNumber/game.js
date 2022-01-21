let btnCheck = document.querySelector('.inputButton')
let input = document.querySelector('.inputNumber')
let lives = document.querySelectorAll('.lives')
let maxNumGame = document.querySelector('.input_block h2 span');
console.log(maxNumGame);
let rand = randNumber()
// console.log('rand', rand);
let tryNumber = 2
let value = 0
let win = 100
let maxGame = 6

// lives.innerHTML = tryNumber;
livesUser()


document.querySelector('.main_block button').onclick = start

function start() {
    document.querySelector('.main_block').style.display = 'none';
    document.querySelector('.input_block').style.display = 'block';
    document.querySelector('.input-wrap').style.display = 'block';
    livesUser()
    // lives.innerHTML = tryNumber;
    debugger
} 

function livesUser() {
    lives.forEach(element => {
        element.innerHTML = tryNumber
    });
}



function getNumUser() {

    // alert('You input WRONG number!')
    // if (inputUserNum == "" || inputUserNum == 0 || inputUserNum == null) {
        let inputUserNum = Number(input.value)
        return inputUserNum
    // }
    // console.log(inputUserNum);
}

// btn.addEventListener('click', compareResults)
// debugger
// btnCheck.addEventListener('click', mainDescission)

function mainDescission() {
    alert('123')
    console.log(getNumUser());
    debugger
    if(!getNumUser()) {
        alert('NOT Num')
        return
    }
    // console.log(input);
    // console.log(getNumUser());
    // console.log(getNumUser);
    if (getNumUser() === randNumber()) {
        // winGame(100)
        winNum()
        maxGame += 2
        console.log(maxGame);
        randNumber(maxGame)
        // input.style.backgroundColor = 'green';
        // input.style.color = '#fff';
        // alert ('');
        // lastResult.style.backgroundColor = 'green';
        input.value = '';
        setGameOver();
    } else if (tryNumber == 0) {
        alert('!!!GAME OVER!!!');
        // lives.innerHTML = 0;
        lives.forEach(el => {
            el.innerHTML = 0;
            
        });
        input.value = '';
        // livesUser(0)
        setGameOver();
    } 
    else if (tryNumber == 1) {
        alert('!!!You have LAST chanse!!!');
        if (getNumUser() === randNumber()) {
            // winGame(50)
            winNum()
        }
        tryNumber--;
        input.value = '';
        
        // lives.innerHTML = 0;
        // lowOrHi.textContent = '';
        // setGameOver();
    } 
    else {
        // input.style.backgroundColor = 'red';
        // input.style.color = '#fff';
        tryNumber--;
        livesUser()
        // lives.innerHTML = tryNumber;
        console.log('tryNumber', tryNumber);
        alert('Wrong!');
        
        // if (tryNumber === 2) {
        //     // alert(2131232132132)
        //     // if (getNumUser() === randNumber()) {
        //         winGame(50)
        //     // }
        //     input.value = ''
        // }
        // input.value = '';


        if(getNumUser() < randNumber()) {
            alert('Last number was too low!') ;
            randNumber(maxGame);
            input.value = '';
        } else if(getNumUser() > randNumber()) {
            alert('Last number was too high!');
            randNumber(maxGame);
            input.value = '';
        }
    }

}

function winNum() {
    if( tryNumber == 3 ) {
        winGame(100)
    } else if (tryNumber == 2) {
        winGame(50)
    } else if (tryNumber == 1) {
        winGame(25)
    }
}


function compareResults() {
    console.log(getNumUser());
    // let rand = randNumber()
    // document.querySelector('.input_block h4 span').textContent = rand
    console.log('rand', rand);
    console.log('tryNumber', tryNumber);
    if (tryNumber == 1) {
        if(rand == getNumUser()) {
            winGame(100);
            setGameOver()
        }
        // } else if (tryNumber == 4) {
             // else if (tryNumber) {
        //     console.log(tryNumber);
    } else {
        alert('wrong Numb')
        tryNumber++
        if (tryNumber == 2) {
            console.log('Количество спроб ', tryNumber)
            let continueGame = confirm("you lose? But you have 2nd chanse!..");
            if (continueGame) {
                btn.addEventListener('click', secondChanse)
                // secondChanse(continueGame)
            }
            // if(continueGame) {
            // // let rand2 = randNumber()
            // // console.log('rand2', rand2);
            //     if(rand == getNumUser()) {
            //         console.log(tryNumber);
            //         winGame(50)
            //             // value += (win / 2)
            //             // priceOfGame(value)
        }
            //     // } else if (tryNumber == 4) {
            //     }        
            // } // end Continue 2
        }
    console.log('rand at end', rand);
    // console.log('Новое рандомное', rand = randNumber());
    // input.value = ''

    let TEMP = () => {
        //     /* 
        //     switch (tryNumber) {
        //         case 1:
        //             console.log(tryNumber);
        //             alert('Have 2 chanse')
        //             if (rand == input.value) {
        //                 if (tryNumber == 1) {
        //                     value += (win / 2)
        //                     priceOfGame(value)
        //                 }
        //             } else {
        //                 alert('Lose')
        //             }
        //             break;
        //         case 2:
        //             alert('Have 3 chanse')
        //             if (rand == input.value) {
        //                 if (tryNumber == 1) {
        //                     value += (win / 2)
        //                     priceOfGame(value)
        //                 }
        //             } else {
        //                 alert('Lose')
        //             }
        //             break;
        //         case 3:
        //             alert("Game Over")
        //             document.querySelector('.main_block').style.display = 'block';
        //             document.querySelector('.input_block').style.display = 'none';
        //             tryNumber = 1
        //             break;
            
        //         default:
        //             break;
        //     }
        //      */
        //     // alert("Loese")
        // }

}
}


function secondChanse(continueGame) {
    if(continueGame) {
    let rand2 = randNumber()
    let input2 = getNumUser()
    // console.log('rand2', rand2);
        if(rand2 == input2) {
            // console.log(tryNumber);
            winGame(50)
            setGameOver()
            if (tryNumber == 2) {
                // value += (win / 2)
                // priceOfGame(value)
            } else if (tryNumber == 3) {
                alert('ewefrewqoifjreoguwrw')
            }        
        } 
    } // end Continue 2
}

function setGameOver() {
    document.querySelector('.main_block').style.display = 'block';
    document.querySelector('.input_block').style.display = 'none';
    document.querySelector('.input-wrap').style.display = 'none';
    document.querySelector('.main_block button').textContent = 'Start new game';
    tryNumber = 3;
}
// function resetGame() {
//   guessCount = 1;
//   const resetParas = document.querySelectorAll('.resultParas p');
//   for(let i = 0 ; i < resetParas.length ; i++) {
//     resetParas[i].textContent = '';
//   }

//   resetButton.parentNode.removeChild(resetButton);
  
//   input.value = '';
//   randomNumber = Math.floor(Math.random() * 100) + 1;
// }

console.log('====================');     

function winGame(currentWin = 100) {
    // console.log('rand equel', rand);
    // console.log('rand2 equel', rand2);
    value += currentWin
    priceOfGame(value)
    alert(`Congratulations! You got it right! You win ${currentWin}$`)
    tryNumber = 3
}      

// function randNumber() {
//     let rand = Math.floor(1 + Math.random() * (6 + 1 - 1))

//     console.log('start fn rand:', rand);
//     return rand
// }

function randNumber(max  = 6) {
	const min = 2;
    maxNumGame.innerHTML = max;
	let rand = Math.floor(min + Math.random() * (max + 1 - min))
	console.log('randNumber rand', rand);
	return rand = 6
	return rand
}
// randNumber()
function priceOfGame(value) {
    console.log(value);
    document.querySelectorAll('.gameWins').forEach(element => {
        return element.innerText = value
    });
    // return document.querySelector('.gameWins').innerText = value
}

function gameOver() {
    
}
