// participantes
// Thiago Amaral
// Victor Cardoso
// Rodrigo Pereira dos Santos
// Matheus Seibt
// Raryson Pereira Rost

const prompt = require ('prompt-read');

const maxHeapify = (arr, n, i, type, sort) => {
    let largest = i;
    let l = 2 * i + 1; // indice do item da esquerda
    let r = 2 * i + 2; // indice do item da direita

    if (type === 'name' && sort === 'desc') {
        // se o item da esquerda é maior que o raiz
        if (l < n && arr[l].nome < arr[largest].nome) {
            largest = l;
        }
        // se o item da direita é maior que o raiz
        if (r < n && arr[r].nome < arr[largest].nome) {
            largest = r;
        }
    } else if (type === 'id' && sort === 'desc') {
        // se o item da esquerda é maior que o raiz
        if (l < n && arr[l].id < arr[largest].id) {
            largest = l;
        }

        // se o item da esquerda é maior que o raiz
        if (r < n && arr[r].id < arr[largest].id) {
            largest = r;
        }
    } else if (type === 'age' && sort === 'desc') {
        // se o item da esquerda é maior que o raiz
        if (l < n && arr[l].idade < arr[largest].idade) {
            largest = l;
        }

        // se o item da esquerda é maior que o raiz
        if (r < n && arr[r].idade < arr[largest].idade) {
            largest = r;
        }
    }



    
    if (type === 'name' && sort === 'asc') {
        // se o item da esquerda é menor que o raiz
        if (l < n && arr[l].nome > arr[largest].nome) {
            largest = l;
        }

        // se o item da direita é menor que o raiz
        if (r < n && arr[r].nome > arr[largest].nome) {
            largest = r;
        }
    } else if (type === 'id' && sort === 'asc') {
        // se o item da esquerda é menor que o raiz
        if (l < n && arr[l].id > arr[largest].id) {
            largest = l;
        }

        // se o item da direita é menor que o raiz
        if (r < n && arr[r].id > arr[largest].id) {
            largest = r;
        }
    } else if (type === 'age' && sort === 'asc') {
        // se o item da esquerda é menor que o raiz
        if (l < n && arr[l].idade > arr[largest].idade) {
            largest = l;
        }

        // se o item da direita é menor que o raiz
        if (r < n && arr[r].idade > arr[largest].idade) {
            largest = r;
        }
    }

    // se é menor não é a raiz
    if (largest != i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        // faz a recursivdade com heapify e pega a sub arvore
        maxHeapify(arr, n, largest, type, sort);
    }
}
// funcao principal do heap
const heapSort = (arr, type, sort) => {
    const arrayLenght = arr.length
    // organiza o heap (reorganiza o array)
    for (let i = parseInt(arrayLenght / 2 - 1); i >= 0; i--) {
        maxHeapify(arr, arrayLenght, i, type, sort);
    }

    // um por um retira os itens do heap
    for (let i = arrayLenght - 1; i >= 0; i--) {
        // move a atual raiz para o final
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // chama a funcao maxHeapify para reduzir o heap
        maxHeapify(arr, i, 0, type, sort);
    }
    return arr
}



var persons = [{
        id: 1,
        nome: "Isaac Newton",
        idade: 28
    },
    {
        id: 2,
        nome: "Friedrich Gauss",
        idade: 33
    },
    {
        id: 3,
        nome: "Marie Curie",
        idade: 29
    },
    {
        id: 4,
        nome: "Hedy Lamarr",
        idade: 23
    },
    {
        id: 5,
        nome: "Albert Einstein",
        idade: 39
    },
    {
        id: 6,
        nome: "Nicolau Copernico",
        idade: 30
    },
    {
        id: 7,
        nome: "Galileu Galilei",
        idade: 25
    },
    {
        id: 8,
        nome: "Alexander Volta",
        idade: 36
    },
    {
        id: 9,
        nome: "AndrÃ©-Marie AmpÃ¨re",
        idade: 23
    },
    {
        id: 10,
        nome: "James Clerk Maxwell",
        idade: 25
    },
    {
        id: 11,
        nome: "James Prescott Joule",
        idade: 33
    },
    {
        id: 12,
        nome: "James Watt",
        idade: 23
    },
    {
        id: 13,
        nome: "Archimedes de Siracusa",
        idade: 39
    },
    {
        id: 14,
        nome: "Simom Ohm",
        idade: 35
    }
]

// tamo pedindo pro usuario qual campo ele quer ordenar do objeto
const selectedType = prompt('1 - Digite 1 para ordenar por ID\n2 - Digite 2 para ordenar por idade\n3 - Digite 3 para ordenar por nome\n')
let parsedtype = 2
// parseamo o campo para uma constante definida para melhor compreensão
if(selectedType === '1') {
    parsedtype = 'id'
} else if (selectedType === '2') {
    parsedtype = 'age'
} else if (selectedType === '3') {
    parsedtype = 'name'
}

// parseamo o campo para uma constante definida para melhor compreensão
const selectedSort = prompt('1 - Digite 1 para ordenar por decrescente\n2 - Digite 2 para ordenar por crescente\n')
let parsedSort = 2
if(selectedSort === '1') {
    parsedSort = 'desc'
} else if (selectedSort === '2') {
    parsedSort = 'asc'
} else {
    parsedSort = 'asc'
}

// listamos os dados solicitados pelo usuário
console.log(heapSort(persons, parsedtype, parsedSort))