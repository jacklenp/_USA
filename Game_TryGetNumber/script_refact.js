// console.log("ref 2");
/* 
// Поверхностный анализ алгоритма игры.
// 1) когда нужно ввести значение, а я жму отмена... 
	 то мне выскакивает сообщение что я проиграл.... это не правильно... 
	 я должено выскочить сообщение,что я хочу выйти из игры.
// 2) интервал для игры не растет, постоянно от 1до6
// 3) и хотелось бы видеть в правом верхнем углу актуальный результат, 
	сколько попыток осталось и сколько я уже выиграл.

 */



// document.querySelector('.main_block button').onclick = askPlay
let startGame
let askExit
let randNum = randomNumbers()

let maxGame = 6
let value = 0
let win = 100

function askPlay() {
	startGame = confirm('Play Game?');
	start(startGame)
}
askPlay() 

function start(startGame) {
	//СТАРТ ИЛИ КОНЕЦ=====
	if(startGame) {
		console.log('start');
		// alert('We start =)');
		startIfAgree()
	} else {
		// askExit = askExitQ()
		askExitQ()
		// if(askExit) {
		// 	console.log("You finish the Game! Bye");
		// } else {
		// 	console.log("You start new Game");
		// 	askPlay()
		// } 
		console.log('end');
	}
}

function startIfAgree() {
	let num = tryCatchNum() //start
	if(randNum == num) {
		alert('You WIN');
		
		value += win
		console.log(value);
		// priceOfGame(value)
		// secondGame()
	} 
	 else if (randNum == num) {
		alert('You put wrong number')
	}
}

function tryCatchNum(maxNum = 8) {
	let tryCatchNum = +prompt(`Choose the num from 1 to ${maxNum}`)
	if(tryCatchNum && !0 && '') {
		return tryCatchNum
	} else {
		// let stopOrContinue = confirm('Are you want stop game?')
		let stopOrContinue = confirm('You input wrong Number?')
		// tryCatchNum()
		if(stopOrContinue) {
			alert('End')
		} else {
			// return tryCatchNum
		}
	}
}

function randomNumbers(max  = 6) {
	const min = 2;
	let rand = Math.floor(min + Math.random() * (max + 1 - min))
	console.log(rand);
	return rand = 2
	return rand
}


function askExitQ() {
	askExit = confirm('You want EXIT?')
	if(askExit) {
		return alert("You finish the Game! Bye");
	} else {
		alert("You continue the Game");
		return askPlay()
	} 
	// return confirm('You want EXIT?')
}


// let sum = 0;
// while (true) {
//   let value = +prompt("Введите число", '');
//   if (!value) break; // (*)
//   sum += value;
// }
// alert( 'Сумма: ' + sum ); 

// ============
// ============
// ============

// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);













