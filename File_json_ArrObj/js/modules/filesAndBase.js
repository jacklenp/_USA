// import fetchFunction from "../filesBase.js";
const fileAndBase = () => {
// console.log(fetchFunction);
    



let url = 'js/files.json';
let responce = fetch(url)
responce.then((responce) => responce.json())
    .then(json => {

// Left Side: File #
           const fileProductElem = document.querySelectorAll('.product_file'),
           baseProductElem = document.querySelectorAll('.product_base-tile');
           for (let i = 0; i < json.files.length; i++) {
               const files = json.files[i];
               // console.log(fileProductElem);
                   fileProductElem[i].innerHTML = files.name;
                   fileProductElem[i].style.color = 'violet';
               
               for (let key in files) {
                   // console.log(files[key]);
                   if (files[key] == false) {
                       baseProductElem[i].style.display = 'none';
                       baseProductElem[i].style.backgroundColor = 'violet';
                   } else {
                       baseProductElem[i].innerHTML = key;
                       baseProductElem[i].style.backgroundColor = 'violet';
                   }
               }
           }
//END Left Side: File #

            let sortArr = json.files.forEach(newArr => {
                // console.log(newArr);
            
             
                }); // END sortArr

        });



};
export default fileAndBase;


/* Этот код переберает File  и ренидерит от file1 до file4 
    Также отображает base
*/ 

