//1. Დაბეჭდეთ რიცხვები 2 დან 8 მდე
let numbers = [1,2,3,4,5,6,7,8,9]
console.log(numbers.slice(1,8))

//2. 5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)
 let Numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]
 for (i=4;i<Numbers.length;i+=4){
    console.log(Numbers[i])
 }
 //3. დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი
 let number= 1
 for(i=3; i<=8; i++){
    number*=i
 }
 console.log(number)

 //Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName,
 //  age და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)
  let person={
    firstname : 'giorgi',
    lastname : 'mchedlidze',
    age : 32
  } 
  for (let personkey in person){
if (personkey==='firstname' || personkey==='lastname'){
    console.log(person[personkey])
}

  }


  //დაბეჭდეთ მეოთხე დავალებაში გამოცხადებული პერსონის თითოეული property value 

let Person={
    firstname : 'giorgi',
    lastname : 'mchedlidze',
    age : 32
  } 
  for(let perskey in Person){
    console.log(perskey+':'+Person[perskey])
  }


  //6. დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"];
  //  დაბეჭდეთ მასივის თითოეული წევრი.
  let fruits = ["Apple", "Banana", "Orange"];
  for(i=0; i<fruits.length; i++)
    console.log(fruits[i])


  //7. დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits

  let Fruits = ["Apple", "Banana", "Orange",];
  Fruits.unshift("Grapes")
  Fruits.push("Pineapples")
  console.log(Fruits)
  
 
//8.დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი
let number2=1
for(i=1;i<=34;i++){
number2+=i
}console.log(number2)    
