function getNum(arr, value) {
    let moduleArr = [];
    for (let i = 0; i < arr.length; i++) {
        moduleArr.push(arr[i][value])
    }
    return moduleArr;


}


export default getNum;