//teste nome 
//const prompt = require ('prompt-read');



/*const A1 = prompt('Nota A1 ', 'number' );
const A2 = prompt('Nota A2', 'number' );
const soma = A1+A2 
console.log(soma);
if (soma >= 10)
{console.log('aprovado')}
else (console.log('reprovado')
)*/
 
//console.log('Meu nome é', name,'e tenho', age,' anos ', ' altura ', height, 'metro' );


//const prompt = require ('prompt-read');


/*for (let i = 0; i < 1000; i++) 
{
   console.log(i)
    
/}*/

/*var i = 5
while (i < 10) {

    console.log(i)
    i++

    
}*/


/*const  prompt = require('prompt-read')

let s = 0

do {  
     s = prompt('informe um numero: ','number')
} while (s !=99);*/



/*let x= [5,4,2,1,8] 

console.log("inicia:",x)

for (n=1; n<=5; n++){

    for (i=0; i<=3; i++){

        if (x[i] > x[i+1]){

           let aux = x[i]
           x[i] = x[i+1]
           x[i+1]= aux 
 
        }

    }
}    

console.log(x)*/





/*let x= [9,5,7,3,1] 
let troca = 1
let n=1


const  prompt = require('prompt-read')
console.log("inicia:",x);

while (n <= 5 && troca <=1) {
    for (n=1; n<=5; n++) {
      for (i=0; i<=3; i++){
          if (x[i] >= x[i+1]){
           troca = 1 
           let aux = x[i]
           x[i] = x[i+1]
           x[i+1]= aux 
        }
     }
     
  } 
  n = n + 1
  
}
console.log(x)*/








/*let x= [5,8,2,1,3] 
let i=0
let eleito= x[i]
let j= i-1


const  prompt = require('prompt-read')
console.log("inicia:",x);

for (i=1; j<=5; j++)

while (j>= 0 && x[j] >x[i]) {
    if (x[i] >= x[i+1]){
        let aux = x[i]
        x[j+i] = x[i+1]
        j=j-1
    }
    
     
     
  
  
}
console.log(x)*/


/*let x =[5,8,2,1,3] 
let i =0
let eleito =x[i]
let menor =x[i+1]
let pos =i+1


console.log("inicia:",x);

for  (i=0; i<=x; i++)
{
   for (j=i+2; i<=x; j++)
    {
        if (x[j] < menor)
        {menor = x[j]
         pos = j
        }
        
        if (menor <eleito) 
        {
            x[i] =  x[pos]
            x[pos] =eleito
  
        }
       
              
     }
}   
console.log(x)*/





/*let x =[5,8,2,1,3] 

for(let i = 0; i<=3; i++)
{
    let eleito = x[i];
    let menor = x[i+1];
    let pos = i+1;
    
    for(let j = i+2; j <=4; j++)
    {
    
        if(x[j] < menor)
        {
        menor = x[j];
        pos = j;
          }
    }
    if(menor < eleito)
    {
       x[i] = x[pos];
       x[pos] = eleito;
    }
}
console.log(x)*/


/*
function merge(x, inicio, fim) {
    let meio = 0;
    if(inicio < fim) {
        meio = Math.trunc((inicio + fim) /2)
        merge(x, inicio, meio)
        merge(x, meio+1, fim)
        intercala(x, inicio, fim, meio)
    }
}

function intercala(x, inicio, fim, meio) {
    let posLivre, inicio_vetor1, inicio_vetor2
    let aux = []
    inicio_vetor1 = inicio
    inicio_vetor2 = meio+1
    posLivre = inicio
    while(inicio_vetor1 <= meio && inicio_vetor2 <= fim) {
        if(x[inicio_vetor1] <= x[inicio_vetor2]) {
            aux[posLivre] = x[inicio_vetor1]
            inicio_vetor1++
        } else {
            aux[posLivre] = x[inicio_vetor2]
            inicio_vetor2++
        }
        posLivre++
    }
    for(let i=inicio_vetor1; i <= meio; i++) {
        aux[posLivre] = x[i]
        posLivre++
    }

    for(let i=inicio_vetor2; i <= fim; i++) {
        aux[posLivre] = x[i]
        posLivre++
    }
    for(let i=inicio; i <= fim; i++) {
        x[i] = aux[i]
    }
}

const fakeArray = [3, 1, 2, 5]

merge(fakeArray, 0, fakeArray.length-1)
console.log(fakeArray)*/





/*let x = [7,5,9,8,6]

function transforma_heap(qtde){

    let i
    let pai
    let aux

    for (let index = qtde/2; index <= 1; index--) {
        heap(i,qtde)
    }

}

function heap(i,qtde){

    let f_esq
    let f_dir
    let maior
    let aux

    if (2*i+1 <= qtde) {
        f_esq = 2*i+1
        f_dir = 2*i
        if (x[f_esq] >= x[f_dir] && x[f_esq] > x[i]) {
            maior = 2*i+1
        }else if((x[f_dir] > x[f_esq] && x[f_dir] > x[i])){
            maior = 2*i
        }
    }else if(2*i <= qtde){
        f_dir = 2*i
        if(x[f_dir] > x[i]){
            maior <- 2*i
        }

    }if(maior != i){
        aux = x[i]
        x[i] = x[maior]
        x[maior] = aux
        heap(maior, qtde)
    }

}

function ordena(qtde){

    let i
    let aux
    let ultima_posi

    for (let index = qtde; index <= 2; index--) {
        aux = x[1]
        x[1] = x[i]
        x[i] = aux
        ultima_posi = i-1
        heap(1, ultima_posi)
    }

}


console.log(x)

transforma_heap(x)

console.log(x)*/



class Aluno {
    constructor() {
    this.numero = 0
    this.nome = ""
    this.a1 = 0
    this.a2 = 0
    this.af = 0
    this.media = 0
    }
   }



var aluno = new Aluno()
aluno.numero = 1
aluno.nome = "Elmario"
aluno.a1 = 4
console.log(aluno