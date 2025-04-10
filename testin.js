
//გამოაცხადეთ ორი ცვლადი , მიანიჭეთ მნიშვნელობები 87 და 65,
//  დაბეჭდეთ (console.log()) ამ რიცხვების ჯამი
let a=87;
let b=65;
let c=a+b;
console.log(c);



//მოაცხადეთ ობიექტი student, ფროფერთებით: firstName, lastName, age, email, marks,
 //ბეჭდეთ student ის სახელი

 const student={
    FirstName:"giorgi",
    LastName:"mchedlidze",
    age: 32,
    marks:[2,5,6,7,8],
 }
 console.log(student.FirstName);
    console.log(student.LastName);
console.log(student.age);
console.log(student.marks);



// გამოაცხადეთ ორი ცვლადი m და n მნიშვნელობებით 45 და 23, დაბეჭდეთ მათი ჯამი თუ m მეტია n ზე , 
// თუ არადა დაბეჭდეთ n
let m=45;
let n=23;
if(m>n){
    console.log(m+n);
}else{
    console.log(n);
}



//გამოაცხადეთ ცვლადი studentName და მიანიჭეთ მნიშვნელობად თქვენი სახელი.
//  დაბეჭდეთ “Rise and shine, “თქვენი სახელი” !”
//  ( მაგ თუ სახელი არის Irakli  უნდა დაიბეჭდოს Rise and shine, Irakli ! )
let studentName="giorgi";
console.log("rise and shine,"+"giorgi"+"!");


//გამოაცხადეთ ცვლადი bonus და salary ცვლადები, salary -ს მიანიჭეთ სასურველი რიცხვითი მნიშვნელობა, დაწერეთ თუ ხელფასი არის 2000 ლარი ან მეტი მაშინ ბონუსი არის 0, თუ ხელფასი 2000 ze ნაკლებია მაშინ ბონუსი არის ხელფასის 10%. დაბეჭდეთ ბონუსი (ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი მნიშვნელობა და შემდეგ დაბეჭდოთ bonus)
let salary=1800;
let bonus;
if(salary>=2000){
    bonus=0;
} else if (salary<2000){
    bonus=salary*0.1;
}
console.log(bonus);





let A=23;
let B=A/2;
let C=A+B;
console.log(C);






let phones= ["iphone", "samsung", "pixel","huawei","xsaomi"];
console.log(phones[0],phones[4]);





const greet = (name) => {
    return "Hello " + name;
  };
  console.log(greet("Giorgi"));

  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.length);








  let skillList ={
    status: 200,
    error: false,
    message: "skills found",
    data: [
        [
            {
                skill_name: "PHP"
            }
        ],
        [
            {skill_name: "node js"}
        ]
    ]
  }
    console.log(skillList.data[1].skill_name);






    let text = "apple, banana, cherry";
    let result = text.split(", ");
    console.log(result);





    let d=8
    let g="8"             //tipi sqvs sxva
     console.log(d==g)
      console.log(d===g);
     
     

//tu age<18 sexs ar vadzlevt  - vwerrt rom arasrulwlovania
// tu 20-65-mde aris sesxs vadzlevt
// tu 65+ sesxs ar vadzlevt
let age=26;
let isWarking=false;

if(age<18) {
    console.log("sesxs ar vadzlevt-arasrulwlovani");
}else if(age<=65){
    if (isWarking=true) console.log("sesxi damtkicebulia");
    else console.log("ar mushaobt da ar dagimtkicdat");
}else {
    console.log("sesxs ar vadzlevt");

}


let o =6, z=87; 
if (o>z) c=o;
else c= z
console.log(c);

//mokle varianti
let N= o>z? o:z;
console.log(N);



var Fruits = ['apple', 'banana', 'orange'];
var removedFruit = fruits.pop(); 
console.log(removedFruit);
console.log(fruits);
 



var fruits = ['apple']
var removedFruit = fruits.pop
