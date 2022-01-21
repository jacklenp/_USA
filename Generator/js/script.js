let inputWeightElem = document.querySelector('#r1'),
	inputHeightElem = document.querySelector('#r2'),
	paragrWeightElem = document.querySelector('#weight'),
	paragrSizeElem = document.querySelector('#size'),
	textElem = document.querySelector('#textRange'),
	textElemStyle = textElem.style;

function paramsChanger() {
	paragrWeightElem.innerHTML = inputWeightElem.value;
	textElemStyle.fontWeight = inputWeightElem.value;
	paragrSizeElem.innerHTML = inputHeightElem.value + 'px';
	textElemStyle.fontSize = inputHeightElem.value + 'px';
	// let weightRefer = inputWeightElem.value;
	// return weightRefer;

}

inputWeightElem.addEventListener('change', paramsChanger)
inputHeightElem.addEventListener('change', paramsChanger)
