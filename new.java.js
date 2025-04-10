
 
// Tu manqanis asaki aris >20 , ar gadaformdeba
// tu 10da 20mde asakis aris ki gadaiformebs magram gadasaxdeli
//iqneba 5000 lari
//tu <10welze mashin gadasxdeli iqneba 1000 lari
let carAge = 19
if (carAge > 20) {
    console.log("ar gadaformdeba");
} else if (carAge>=10 && carAge<=20) {
    console.log("gadasaxdeli iqneba 5000 lari");
}else 
{
    console.log("gadasaxdeli iqneba 1000 lari");
}


//  tu xelfasi<1000 , bonusi unda iyos xelfasis 30%
//tu 1000dan 5000mde aris ,bonusi unda iyos xelfasis 10%
//tu xelfasi metia 5000-ze da gamocdileba>10 welze, bonusi 15%
//ti xelfasi>5000 da gamocdileba <10 , bonusi 0%





const array1=[1,2,3,4,5]
const array2=[6,7,8,9]
combinedArray=array1.concat(array2)
console.log(combinedArray)




//const salary=1500
//const experience=12
//let bonus;
//if (salary<1000) {
//    bonus=salary * 0.3
//}else if (salary>=1000 && salary<=5000) {
//    bonus=salary * 0.1
///} else {
//    if (experience>10) {
//        bonus=salary * 0.15
 //   } else {
  //      bonus=0
   // }
//}
//console.log(bonus)








var Fruits = ['apple', 'banana', 'orange'];
var removedFruit = Fruits.pop(); 

console.log(Fruits);

let numbers = [1, 2, 3, 4, 5];
console.log(numbers)
numbers.pop()
console.log(numbers)
let lastRemoved = numbers.pop()
console.log(numbers)
let lastRemoved2 = numbers.pop()
console.log(numbers)









var fruits = ['banana', 'orange'];

fruits.unshift('apple');

console.log(fruits);





var fruits = ['apple', 'banana', 'orange'];

var removed = fruits.shift();

console.log(removed);      // 'apple'
console.log(fruits); 




let Numbers = [1, 2, 3, 4, 5];
console.log(Numbers)
Numbers.push(6)
console.log(Numbers)
Numbers.pop(6,5,4)
console.log(Numbers)
let lastRremoved= Numbers.pop()
console.log(Numbers)
Numbers.unshift(-1,0)
console.log(Numbers)
 Numbers.shift()
console.log(Numbers)



//რამდენიმე მასივისი ელემტის გაერთიანება გვინდა
let phones = ['iphone', 'samsung', 'nokia'];
console.log(phones)
let phones1 = ['redmi', 'huawei' ]
let combinedphones=phones.concat(phones1)
console.log(combinedphones)




//vsaubrobt sliceze sadac indeqsis mixedvit vitvlit

let numberS = [1, 2, 3, 4, 5];
console.log(numberS.slice (1,3))




//indexOf -is gamosvla


let citys= ['tbilisi', 'batumi', 'zugdidi', 'rustavii', 'zestafoni', 'zugdidi']
let zugdidi = citys.indexOf('zugdidi') 
console.log(zugdidi) 
let zugdidiFromindex3 = citys.indexOf('zugdidi', 3)
console.log(zugdidiFromindex3) // sworia, anu indexof gvexmareba gavigot elementis
//  indeqsi meramdenea da aseve zugdidifromindex3 gvexmareba rom gavigot mesame
// indeqsidan meramdene indeqszea zugdidi da zugdidis indeqsi aris 5
 







//aq gvaqvs asakis shecvla da lastname is damateba
let person={
    firstName: 'John', 
    age: 25
}  

console.log(person.age)
person.age=30
console.log(person.age)
person.lastname='Smith'
console.log(person)





for (let i=0;i<5;++i){
    console.log(i)
}
//


    for (let i=10;i>2;i-=2){
        console.log(i) // anu aq xdeba is luwebi unda daibechdos 10idan 3mde
    }

    




//aq Sheqmnilia arr anu masivi da gvinda yvelas dabechdva ertiT zrdadobis mixedvit
//let i = 0 — ციკლი იწყება ინდექსით 0 (პირველი ელემენტი).

// i < arr.length — arr.length არის 4, ანუ სანამ i < 4, ციკლი გაგრძელდება.

//console.log(arr[i]) — თითოეულ ნაბიჯზე ბეჭდავს მასივის იმ ელემენტს, რომელიც ინდექსზეა i.

// i++ — ყოველ წრეზე i იზრდება 1-ით.
    let arr= ['a','b','c','d'] 
    for (let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
   



let colors= ["red", "green","black","white","blue","yellow"]
for (let i=1;i< colors.length;i+=3){
    console.log(colors[i]);
} //აქ იბეჭდება ყოველი მესამე ანუ. i=1 anu amas bechdavs radgan nu mititebulia rasac udris




let Arr= ['a','b','c','d'] 
    for (let i=0;i<arr.length;i++){
        console.log(i +":"+arr[i])
    }






    let NumberS = [4, 15, 23,55, 33, 29, 40, 48, 27]
    for (i=0; i<NumberS.length;i++) {
        if (NumberS[i] > 20)
            console.log(NumberS[i])
        } // dabechda ricxvebi romlebic metia 20z
    


// დაბეჭდეთ ყოველი მეორე რიცხვი ბოლოდან
        let NumberS1 = [4, 15,50,66,33,11,27,46,100]
        for (i=NumberS1.length-1; i>=0;i-=2) {
            console.log(NumberS1[i])
        }





    
      

   