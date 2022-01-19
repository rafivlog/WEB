// let arr = new Array();
// let n = parseInt(prompt("Enter Length"));
// for(let i=0;i<n;i++){
//     arr[i] = parseInt(prompt(i+1 +"Enter a array number"));
// }
// arr.sort(function(a,b){
//     return a-b;
// })
// console.log(arr[arr.lenght-2]);

// let sum = 0;
// for(let i=0;i<n;i++){
//     console.log(arr[i]);
//     sum+=arr[i];
// }
// console.log(arr.sort(function(a,b){
//     return a-b;
// }))
// let max = 0;
// for(let i=0;i<n;i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// console.log(max);



// let score = [
//     ['Tamim' , 30],
//     ['Liton' , 70],
//     ['Akbar' , 60],
//     ['Shakib' , 90],
//     ['Mushfiq' , 50]
// ]
// let highestRunScorer = score[0][1];
// let  name;
// for (let i = 0;i < score.length;i++) {
//     if (highestRunScorer < score[i][1]) {
//         name = score[i][0];
//         highestRunScorer = score[i][1];
//     }
// }
// console.log('Highest Run Scorer ' + name + ' = ' + highestRunScorer);


// console.log(Math.sqrt(25));
// console.log(Math.sqrt(25));
// // sin(), cos(), tan() ...
// console.log(Math.sin(25));
// console.log(Math.abs(-25));
// console.log(Math.pow(2, 3));
// console.log(Math.floor(2.4));
// console.log(Math.ceil(2.4));
// console.log(Math.round(2.4));
// console.log(Math.max(2, 8));
// console.log(Math.min(2, 8));
// // returns value between 0 to 1 by default
// console.log(Math.random());
// // returns value between 0 to 5 
// console.log(Math.random() * 6);
// // returns value between 0 to 5 integer value
// console.log(Math.floor(Math.random() * 6));
// // returns value between 1 to 5 integer value
// console.log(Math.floor(Math.random() * 5) + 1);



// let date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getDay());

let photos = new Array;
for(let i=0;i<3;i++){
    photos[i] = "images/img"+(i+1)+".jpg";
}

let imgtag = document.querySelector("img");

let count = 0;
function next(){
    count++;
    if(count>=photos.length){
        //console.log(photos.length);
        count = 0;
        imgtag.src = photos[count];
    }else{
        imgtag.src = photos[count];
    }
}

function prev(){
    count--;
    if(count<0){
        //console.log(photos.length);
        count = photos.length-1;
        imgtag.src = photos[count];
    }else{
        imgtag.src = photos[count];
    }
}