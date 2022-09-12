let str = prompt("");
let arr = str.split("");
let n = Math.ceil(Math.random() * (arr.length -3));
let m = Math.ceil(Math.random() * arr.length);
 console.log(str);
 if(arr.length > 3){
  arr.splice(n, 3)
 }else if(arr.length < 3){
    arr.splice(m, 0, "t", "u", "v")
 }
 str = arr.join("");
 
 console.log(str);

let str2 = "Lorem ipsum dolor sit amet consectetur";
let arr2 = str2.split(" ")

arr2.sort(function (a, b) {
    if(a.length > b.length){
        return -1;
    }else if(a.length > b.length){
        return 1
    }
})
str2 = arr2.join(" ")
console.log(str2)



let str3 = "Lorem ipsum dolor sit amet consectetur";
let arr3 = str3.split(" ");
arr3.sort( (a, b) => a.localeCompare(b));
str3 = arr3.join(" ");
console.log(str3);