//equals
var angka= 100;
console.log(angka == 100) //true
console.log(angka == 20) //false
console.log("==========================")

//not equals
var sifat = "rajin";
console.log(sifat != "rajin");//true
console.log(sifat != "bandel");//true
console.log("==========================")

//strict equals
var angka = 8 ;
console.log(angka == "8")//true ,padahal "8" adalah string
console.log(angka === "8")//false ,karena type datanya berbeda
console.log(angka === 8)//true
console.log("==========================")

//not strict equals
var angka = 11;
console.log(angka != "11")//false ,padahal "11" adalah string
console.log(angka !== "11")//true ,karena type datanya berbeda
console.log(angka !== 11)//false

var number = 17 ;
console.log(number < 20);//true
console.log(number > 20);//false
console.log(number >= 20);//true ,karena terdapat sama dengan
console.log(number <= 20);//true
