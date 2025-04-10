//let a=67, b=40
//if (a>b) {
//    console.log(a);
//} else if(a=b){
//    console.log("a=b");
//}
// else{
//   console.log(b);
//
//}




//let student={
//    firstname:"გიორგი",
//  lastname:"მჭედლიძე",
//score : [77,33,10]
//}
//console.log(student.firstname)
//console.log(student.score[2])


//let year=1700, century
//if (year>2000) {century=21}
//else if (year>1900 && year<2000) {century=20}
//else if (year>=1800 && year<=1900) {century=19}
//else {century="unknown"}
//console.log(century)


//let a=21
//{
//  let a =210
//console.log(a)

//}
//console.log(a)



//let b=21
//let d=200
//console.log(d-b)




//const c=10
//console.log(c)



//let _=10
//console.log(_)



//var obj1={'cat': 'playful'}
//var obj2={'cat': 'playful'}
//console.log (obj1===obj2)





//let someObject={Name: "giorgi"}
//console.log(someObjectName = null)





//function add(a, b) {
//  return a + b;
//}
//console.log(add(5, 6));





//let A=8
//let B=A++
//console.log(B)
//console.log(A)






//let day="monday"
//switch(day){
//case "monday":
//console.log("its a first day of the week")
//break;
//  case "friday":
//console.log("its a day near weekend")
// break;
// default: 
//  console.log("its a regular day")
//}





//let A=4, B=23,
//C=A>B? A-5 : A+B
//console.log(C)





var A=21
console.log(A)
{
    var A = 221
    console.log(A)
}




let day = "friday"
switch(day){
case "monday":
console.log("its a first day of the week")
break;
  case "friday":
console.log("its a day near weekend")
 

default: 
 console.log("its a regular day")

}



let colors1 = ['red','green','black','yellow']
console.log(colors1)
let colors2=['pink','blue','white','purple']
console.log(colors2)
combinedcolors=colors1.concat(colors2)
console.log(combinedcolors)


//
day = "thuday"
switch (day){
  case "sunday":
  console.log("weekend")
  case "friday":
    console.log("weekendis dasawyisi")
    case "monday":
      console.log("samushao dge")
      default:
        console.log("sxva dgeebi")
}//

let Numbers = [1, 2, 3, 4, 5];
Numbers.pop()
console.log(Numbers)
Numbers.push(5,6)
console.log(Numbers)
Numbers.shift()
console.log(Numbers)
Numbers.unshift(-1,0,1)
console.log(Numbers)






//

let numberS = [1, 2, 3, 4, 5,6,7,8,9,0,11,22,33,44,55,66,77,99,100,13,16,18,8];
console.log(numberS.slice(3,21))
let number= numberS.indexOf(8)
console.log(number)
let number1 = numberS.indexOf(8,8)
console.log(number1)


//


let colors = ['red','green','black','yellow','pink','blue','white','purple']
for (i=0; i<colors.length; i+=2 ){
  console.log(colors[i])
} for (i=colors.length-1;i>=0; i-=2 ){
  console.log(colors[i])
}for (i=0; i<colors.length;i++){
  console.log(colors[i])
}for (i=colors.length-1;i>=0;i-- ){
  console.log(colors[i])
}for (i=0;i<colors.length;i++){
  console.log(i+':'+colors[i])
}

let NumberS = [1, 2, 3, 4, 5];
console.log(NumberS.slice (1,3))
let numb = NumberS.indexOf(5)
console.log(numb)
///



let person={
  firstName: 'John', 
  age: 25
}  
console.log(person)
person.age=30
console.log(person)
person.lastName= "mchedlo"
console.log(person)
//
let numbers = [1,2,3,4,5,6,7,8,9,10]
for (let i=10;i>=2;i-=2){
  console.log(i)
}for (let i=2; i<=10;i+=2 ){
  console.log(i)
}


let arr= ['a','b','c','d'] 
    for (let i=0;i<arr.length;i++){
        console.log(arr[i])
    }


    let Colors= ["red", "green","black","white","blue","yellow"]
for (let i=0;i< Colors.length;i+=3){
    console.log(Colors[i]);
} 


let Arr= ['a','b','c','d'] 
    for (let i=0;i<arr.length;i++){
        console.log(i +":"+arr[i])
    }



    let NumbeRS = [4, 15, 23,55, 33, 29, 40, 48, 27,20]
    for(i=0;i<NumbeRS.length;i++)
      if (NumbeRS[i]>20 ){
        console.log(NumbeRS[i])
      }