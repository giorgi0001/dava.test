
// 1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , 
// თუ რიცხვები ტოლია დააბრუნებს 0 -ს

function max(m, n) {
    if (m > n) {
        return m;
    } else if (n > m) {
        return n;
    } else {
        return 0;
    }
}
console.log(max(5, 10)); 




//2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10));







//3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)
function printName() {
    console.log("გიორგი მჭედლიძე");
}
printName();







//4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი
//  და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)
function getFullName(firstname, lastname) {
    return firstname + " " + lastname;
}
console.log(getFullName("გიორგი", "მჭედლიძე"));



5. //Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n)
//  და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი 
// ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, 
// დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას.
// Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); 

//6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)

const student = {
    firstname: "გიორგი",
    lastname: "მჭედლიძე",
    getFullName: function() {
        return this.firstname + " " + this.lastname;
    }
};
console.log(student.getFullName());





//7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) 
// და ფუნქცია დააბრუნებს  ქულების ჯამს

function getTotalScore(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    return sum;
  }
  
  const studentScores = [4, 7, 5, 3, 2];
  
  console.log(getTotalScore(studentScores));  



 //დაბეჭდეთ სტუდენტის სახელი და ასაკი

const student2 = {
    firstname: "გიორგი",
    age:32,
    getFullName: function() {
        return (this.firstname + " " + this.age);
    
    }
};
console.log(student2.getFullName());
