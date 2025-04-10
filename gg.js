// Tu manqanis asaki aris >20 , ar gadaformdeba
// tu 10da 20mde asakis aris ki gadaiformebs magram gadasaxdeli
//iqneba 5000 lari
//tu <10welze mashin gadasxdeli iqneba 1000 lari

let carAge=15
if (carAge>20){
    console.log("ar gadaformdeba")
}else if(carAge>=10 && carAge<=20){
    console.log("gadasaxdelia 5000 gel")
}else {
    console.log("gadasaxdelia 1000 gel")
}


//  tu xelfasi<1000 , bonusi unda iyos xelfasis 30%
//tu 1000dan 5000mde aris ,bonusi unda iyos xelfasis 10%
//tu xelfasi metia 5000-ze da gamocdileba>10 welze, bonusi 15%
//ti xelfasi>5000 da gamocdileba <10 , bonusi 0%
 let salary = 5500
 let bonus = 0
 let experience= 9
 if (salary<1000){
    bonus=salary*0.3
console.log(bonus)
 } else if (salary>=1000 && salary<5000){
    bonus=salary*0.1
    console.log(bonus)
 } else if (salary>5000 && experience >10){
    bonus=salary*0.15
    console.log(bonus)
 } else  {
    bonus=salary*0
    console.log(bonus)
 }
 
array1=[1,2,3,4,5,]
array2=[6,7,8,9]
combinedArray=array1.concat(array2)
console.log(combinedArray)

//

let numbers = [1, 2, 3, 4, 5];
console.log(numbers)
numbers.pop
console.log(numbers)
lastremoved=numbers.pop()
console.log(numbers)
lastRemoved2= numbers.pop()
console.log(numbers)
lastRemoved3= numbers.pop()
console.log(numbers)
lastRemoved4= numbers.pop()
console.log(numbers)
lastRemoved5= numbers.pop()
console.log(numbers)
























//გამოაცხადეთ ორი ცვლადი , მიანიჭეთ მნიშვნელობები 87 და 65, დაბეჭდეთ (console.log()) ამ რიცხვების ჯამი
let a=87
let b=65
console.log(a+b)
//გამოაცხადეთ ობიექტი student, ფროფერთებით: firstName, lastName, age, email, marks,
//  დაბეჭდეთ student ის სახელი
let student ={
    firstname: 'gio',
    lastname: 'mched',
    age : 30,
    email : 'g.mche@Mail.ru',
    marks : 100
} 
console.log(student.firstname)


//გამოაცხადეთ ორი ცვლადი m და n მნიშვნელობებით 45 და 23,
// დაბეჭდეთ მათი ჯამი თუ m მეტია n ზე , თუ არადა დაბეჭდეთ n.
let m=45
let n=23
if (m > n ){
    console.log(m+n)
}else {
    console.log(n)
}


//გამოაცხადეთ ცვლადი studentName და მიანიჭეთ მნიშვნელობად თქვენი სახელი.
//  დაბეჭდეთ “Rise and shine, “თქვენი სახელი” !” 
// ( მაგ თუ სახელი არის Irakli  უნდა დაიბეჭდოს Rise and shine, Irakli ! )
let studentName = "giorgi"
console.log("rise an shine, irakli !" )


//გამოაცხადეთ ცვლადი bonus და salary ცვლადები, salary -ს მიანიჭეთ სასურველი რიცხვითი მნიშვნელობა,
// დაწერეთ თუ ხელფასი არის 2000 ლარი ან მეტი მაშინ ბონუსი არის 0, 
// თუ ხელფასი 2000 ze ნაკლებია მაშინ ბონუსი არის ხელფასის 10%. 
// დაბეჭდეთ ბონუსი (ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი მნიშვნელობა და შემდეგ დაბეჭდოთ bonus)

let Salary = 10500; 
let Bonus;
if (Salary>=2000){
    Bonus=0
console.log(Bonus)
} 

// გამოაცხადეთ ცვლადი a, b და c. სადაც a = 23, b=a-ნახევარი, c= a-ს და b-ს ჯამი. დაბეჭდეთ c.
let A=23
let B=A/2
C=A+B
console.log(C)


//გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ.
let phones = ['Iphone', 'Samsung', 'Pixel', 'Huawei', 'Xiaomi' ]
console.log(phones)



//დაბეჭდეთ phones მასივის ბოლო პირველი და ბოლო ელემენტი ( ცალ-ცალკე console.log ეგში)
let Phones = ['Iphone', 'Samsung', 'Pixel', 'Huawei', 'Xiaomi' ]
console.log(Phones[0])
console.log(Phones[Phones.length-1])


//
let person= {
    firstname : 'gio',
    Lastname : 'mched',
    age: 30
} 
for (let personkey in person){
    console.log(personkey+':'+person[personkey]) //amogvibechdavs firstname:gio, lastname :mched da a.sh.
}