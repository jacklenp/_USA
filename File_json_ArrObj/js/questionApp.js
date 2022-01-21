import getFunc from './modules/function.js';

let repeatValueArr = [
    { "workDay": 1, "calendarDay": 1},
    { "workDay": 2, "calendarDay": 2},
    { "workDay": 2, "calendarDay": 3},
    { "workDay": 3, "calendarDay": 4},
    { "workDay": 3, "calendarDay": 5},
    { "workDay": 3, "calendarDay": 6},
    { "workDay": 4, "calendarDay": 7},
    { "workDay": 5, "calendarDay": 8}
];


    let newArr = [];

    for (let i = 0; i < repeatValueArr.length; i++) {
        newArr.push(repeatValueArr[i]['workDay'])
    }
    console.log(newArr);

    console.log('moduleArr', getFunc(repeatValueArr, "workDay"));
    console.log('moduleArr', getFunc(repeatValueArr, "calendarDay"));
    
    let user = { name: 'John',id: 325443};
    let admin = { name: 'Admin',id: 12656345};

    function  sayHi() {
        alert(this.name);
        alert(this.id);
    }


    user.f = sayHi;
    admin.f = sayHi;

    user.f()
    admin.f()

    admin['f']()




//get unique value of "workday"
let sortRepeateVal = repeatValueArr.map(obj => {
    // console.log(obj.workDay);
    repeatValueArr.forEach(function(item){
    // console.log(item.calendarDay);
    if (obj.workDay) { 
        // console.log(item.calendarDay);
        let a = 0;
        a += item.calendarDay
        document.querySelector('div').innerHTML = a;
    }
    })

    return obj.workDay
});

let uniqueNumDays = [...new Set(sortRepeateVal)]
// console.log(uniqueNumDays);
// console.log('sortRepeateVal', sortRepeateVal);


//DON't KNOW how get several value of "calendarDay" in one table cell
// repeatValueArr.forEach(function(item){
//     console.log(item.calendarDay);
//     if (sortRepeateVal) { 
//         // console.log(item.calendarDay);
        
//     }
//     })
let getSeveralVal = repeatValueArr.map(obj => {

   for (const key in obj) {
        // console.log(obj[key]);

       if (Object.hasOwnProperty.call(obj, key)) {
           const el = obj[key];
        //    console.log(el); // вывод ниже:
           /*
            2 1
            3 2
            2 3
            4
            3
            5
            3
            6
            4
            7
            5
            8

           */
           
        }
    }
    
    // console.log(obj);
    
    return obj.workDay;
});
