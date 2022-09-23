let banana = 1
let nescau = 6.99
let cotonete = 2.99

console.log("banana = R$3.00 , nescau = R$6.99, cotonete = R$2.99")

if(banana < nescau && banana < cotonete){
    console.log("Compre Banana é o produto mais barato")
}else if (nescau < banana && nescau < cotonete){
    console.log("Compre nescau é o produto mais barato")
}else{
    console.log("Compre cotonete é o produto mais barato")
}