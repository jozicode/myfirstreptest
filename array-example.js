
let arrayTemporaneo =[];

const arroriginale = ['a','b','d','e'];

arrayTemporaneo = arroriginale.map(valore => valore.toUpperCase());
console.log(arrayTemporaneo);
//oppure

arrayTemporaneo  = [];

for(let i =0; arroriginale[i]; i++ ){

arrayTemporaneo[i] = arroriginale[i].toUpperCase();

}
console.log(arrayTemporaneo);

// oppure

arrayTemporaneo= [];

arroriginale.forEach((valore, indice)  => {

arrayTemporaneo[indice] = valore.toUpperCase()

});
console.log(arrayTemporaneo);