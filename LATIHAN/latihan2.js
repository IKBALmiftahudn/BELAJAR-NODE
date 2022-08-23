var name = "Ahmad" ;
var gajiK = 4500000 ; 
console.log("Nama Saya :" +name)
 console.log("Gaji Kotor :" +gajiK)
console.log("============================================")


var pajak = 2.5 *gajiK ;
var hasil = pajak / 100 ;
console.log("Potongan Pajak 2,5% :" + hasil)
var bpjs = 250000;
var PotonganI =50000;
console.log("Potongan BPJS :" +bpjs)
console.log("Potongan Infak :" +PotonganI)
console.log("============================================")


var TotalP = bpjs + PotonganI + hasil ;
console.log("Total Potongan :" +TotalP)
console.log("============================================")


var TunjanganT = 10000;
var totalHARIK = 24 ;
console.log("Tunjangan Transport :" +TunjanganT)
console.log("Total Hari Kerja :" +totalHARIK)
console.log("============================================")


var totalT = TunjanganT*totalHARIK ;
console.log("Total Tunjangan :" +totalT)
console.log("============================================")


var PGAJI = gajiK - TotalP +totalT;
console.log("Gaji Bersih :" + PGAJI)
console.log("============================================")



