console.log('work');


//НАЧАЛО ИГРЫ=========
let maxGame = 6
let startGame;
let value = 0
let win = 100
startGame = confirm('Play Game?')

//====================
// let catchNum = 
function tryCatchNum() {
    let tryCatchNum = +prompt("Choose the num from 1 to 6")
    return tryCatchNum
}

function compareNumbers(max  = 6) {
    const min = 2;
    let rand = Math.floor(min + Math.random() * (max + 1 - min))
    console.log(rand);
    return rand = 2
    return rand
}
let compNum = compareNumbers()
console.log(compNum);
// console.log(compareNumbers());
// console.log(compNum());

function secondGame() {
    let askSecondGame = confirm("Do you want play again?")
    if(askSecondGame) {
        maxGame += 2
        compareNumbers(maxGame)
        // tryCatchNum()
        start(startGame)
    }
}
start(startGame) 
function start(startGame) {
//СТАРТ ИЛИ КОНЕЦ=====
    if(startGame) {
    
        //alert("Let's started!")
        let num = tryCatchNum() //start
//СРАВНЕНИЕ РЕЗАЛТА И РАНДОМА
        if(compNum == num) {
            alert('You WIN');
            
            value += win
            priceOfGame(value)
            secondGame()
        } else {
            let continueGame = confirm("you lose? But you have 2nd chanse!..");
            if(continueGame) {
                // num()  //????  Почему не работает функция вызова
                let num2 = tryCatchNum()
                // num
                if(compNum == num2) {
                    console.log(compNum);
                    alert('You WIN');
                    // win = 50
                    value += (win / 2)
                    priceOfGame(value)
                    secondGame()
                } else {
                    let lastGame = confirm("you lose? But you have LAST chanse!..");
                    if(lastGame) {
                        let num2 = tryCatchNum()
                        if(compNum == num2) {
                            console.log(compNum);
                            alert('You WIN');
                            // win = 25
                            value += (win / 4)
                            priceOfGame(value)
                            secondGame()
                        } else {
                            alert('GAME OVER')
                        }
                    }
                }
            } else {
                alert("You press END GAME")
            }
        }
    } else {
        alert("GAME do not started!")
    }
}
//====================

function priceOfGame(value) {
    // val = 0
    // let val = 100
    // value += value
    console.log(value);
    
    return document.querySelector('span').innerText = value
}



// console.log(compareNumbers() === num());
// console.log(compareNumbers());
// console.log(catchNum());



//СРАВНЕНИЕ РЕЗАЛТА И РАНДОМА
// if(compareNumbers() == num()) {
//     alert('you win');
//     priceOfGame()
// } else {
//     alert("you lose");
// }
