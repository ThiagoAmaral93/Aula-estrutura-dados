const maxHeapify = (arr, n, i, sort) => {
    let largest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index
    if (sort === 'name') {
        //If left child is smaller than root
        if (l < n && arr[l].nome > arr[largest].nome) {
            largest = l;
        }

        // If right child is smaller than smallest so far 
        if (r < n && arr[r].nome > arr[largest].nome) {
            largest = r;
        }
    } else if (sort === 'id') {
        //If left child is smaller than root
        if (l < n && arr[l].id > arr[largest].id) {
            largest = l;
        }

        // If right child is smaller than smallest so far 
        if (r < n && arr[r].id > arr[largest].id) {
            largest = r;
        }
    } else if (sort === 'age') {
        //If left child is smaller than root
        if (l < n && arr[l].idade > arr[largest].idade) {
            largest = l;
        }

        // If right child is smaller than smallest so far 
        if (r < n && arr[r].idade > arr[largest].idade) {
            largest = r;
        }
    }


    // If smallest is not root 
    if (largest != i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        // Recursively heapify the affected sub-tree 
        maxHeapify(arr, n, largest, sort);
    }
}

// main function to do heap sort 
const heapSort = (arr, sort) => {
    const arrayLenght = arr.length
    // Build heap (rearrange array) 
    for (let i = parseInt(arrayLenght / 2 - 1); i >= 0; i--) {
        maxHeapify(arr, arrayLenght, i, sort);
    }

    // One by one extract an element from heap 
    for (let i = arrayLenght - 1; i >= 0; i--) {
        // Move current root to end 
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap 
        maxHeapify(arr, i, 0, sort);
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


const banana = [2, 5, 1, -25, 1203123]
console.log(heapSort(persons, 'age'))