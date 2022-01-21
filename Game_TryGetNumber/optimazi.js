let startGame
let askExit
let randNum = randomNumbers()

let maxGame = 6
let value = 0
let win = 100

function askPlay() {
    startGame = true
	// startGame = confirm('Play Game?');
	start(startGame)
}
// askPlay() 
document.querySelector('.main_block button').onclick = askPlay


function start(startGame) {
	//СТАРТ ИЛИ КОНЕЦ=====
	if(startGame) {
		// console.log('start');
		// alert('start');
		// compareNum()
        // console.log(compareNum() );
        
        progressGame()
	} else {
		askExitQ()
	}
}

function inputUserNum(maxNum = 6) {
	let inputUserNum = prompt(`Choose the num from 1 to ${maxNum}`)
    console.log(inputUserNum);
    if (maxNum < inputUserNum) {
        alert('You input more then MAX Namber')
    }
    // console.log(checkCorrectNum(inputUserNum));
    checkCorrectNum(inputUserNum)
    return inputUserNum
}

function proposeNewGame() {
    if(confirm("Continue the Game?")) {
        // maxGame += 2
        // inputUserNum(maxGame)
        askPlay()
    } else{
        askExitQ()
    }
	 //start
	// if(randNum == num) {
		// alert('You WIN');
		// value += win
		// console.log(value);
		// priceOfGame(value)
		// secondGame()
	// } 
    // return (randNum == num)
	//  else if (randNum == num) {
	// 	alert('You put wrong number')
	// }
}

function moreChanse() {
    // let chanse = 2
    // do {
    //     chanse--;
    //     console.log(chanse);
    //     // confirm("You lose! But you have 2nd chanse!..");
    //     // inputUserNum()
    //     // moreChanse()
    //     document.querySelector('.lives').innerHTML = chanse;
    // } while (chanse > 0);
    // alert('vse')
// ********************
    let continueGame = confirm("You lose! But you have 2nd chanse!..");
    if(continueGame) {
        askPlay()
        let num2 = inputUserNum()
        if(randNum == num2) {
            alert('WIN')
    //         proposeNewGame()
    //         // win = 50
    //         value += (win / 2)
    //         priceOfGame(value)
    //         proposeNewGame()
        } else  {
            alert('LoSE')
        }
    } 


    // if(continueGame) {
            
    //     } else {
    //         let lastGame = confirm("you lose? But you have LAST chanse!..");
    //         if(lastGame) {
    //             let num2 = tryCatchNum()
    //             if(compNum == num2) {
    //                 console.log(compNum);
    //                 alert('You WIN');
    //                 // win = 25
    //                 value += (win / 4)
    //                 priceOfGame(value)
    //                 secondGame()
    //             } else {
    //                 alert('GAME OVER')
    //             }
    //         }
    //     }
    // } else {
    //     alert("You press END GAME")
    // }

    
    else {
        askExitQ()
    }
}

function progressGame() {
    let num = inputUserNum()

    if(randNum == num) {
        alert('WIN')

        value += win
        priceOfGame(value)
        setTimeout(() => {
            proposeNewGame()
        },1300)
    } else  {
        alert('LoSE')
        // moreChanse()
    }
}

function randomNumbers(max  = 6) {
	const min = 2;
	let rand = Math.floor(min + Math.random() * (max + 1 - min))
	console.log(rand);
	return rand = 2
	return rand
}

function checkCorrectNum(inputUserNum) {
    switch (inputUserNum) {
        case '0':
            alert('Input from 1')
            askPlay()
            break;
        case '':
            alert('Ohhh...You do not put the Number!')
            askPlay()
            break;
        // case null:
        // //     if(!confirm('Stop the Game?')) {
        // //         askPlay() 
        // //         // console.log(inputUserNum());
        // //         // inputUserNum() // ??? Почему выдает ошибку?
        // //     }
        //     alert('You stop the Game')
        //     break;
    
        // default:
        //     break;
    }
}

function priceOfGame(value) {
    console.log(value);
    return document.querySelector('span').innerText = value
}


function askExitQ() {
	askExit = confirm('You want EXIT?')
	if(askExit) {
		// return alert("You finish the Game! Bye");
	} else {
		alert("You continue the Game");
		return askPlay()
	} 
	// return confirm('You want EXIT?')
}












