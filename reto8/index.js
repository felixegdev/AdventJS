function organizeGifts(gifts) {

  //First of all, we use matchAll to find the groups of numbers that are followed by letters.
  //Then we map the result to be able to work with them.
  return [...gifts.matchAll(/(\d+)([a-z])/g)].map(([_,num, letra]) => {

    // To find out how many pales we use, we divide the number we got before by 50
    //and use the Math.trunc to be sure we get a whole number. 
    const pales = Math.trunc(num / 50);
    //then we substract the number of gifts wrapped already, multiplying the number of pales used times 50 gifts inside each pale. 
    num -= pales*50;

    //Same thing with cajas, but instead of 50 in each pale, we have 10 in each caja.
    const cajas = Math.trunc(num / 10);
    //We recalculate how many gifts are left without wrapping. 
    num -= cajas*10;

    //We return the pales, cajas and bolsas, repeating each for as many as we have, and on the bolsas, we need to delete all the () extras. We do that with the replaceALl
    return (`[${letra}]`.repeat(pales)
        + `{${letra}}`.repeat(cajas)
        + `(${letra.repeat(num)})`).replaceAll("()","");
  }).join("");
}

const result1 = organizeGifts(`76a11b`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)*/