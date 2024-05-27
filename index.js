// Task 01:
const iterateWithAsyncAwait = async (arr) {
    for (let i = 0 ; i <arr.lenght ; i++ ){
        console.log(arr[i])
    }
    await new Promise((resolve) => setTimeout(resolve, 1000))
}

// Task 02
async function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Fetched data');
        }, 1000);
    });
}

async function awaitCall() {
    const data = await fetchData();
    console.log(data);
}

// Task 03
async function firstFunction() {
    // Attendre 1 seconde avant d'afficher le message
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('First function complete');
}

async function secondFunction() {
    // Attendre 1 seconde avant d'afficher le message
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Second function complete');
}

async function thirdFunction() {
    // Attendre 1 seconde avant d'afficher le message
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Third function complete');
}

async function chainedAsyncFunctions() {
    // Appeler les trois fonctions séquentiellement
    await firstFunction();
    await secondFunction();
    await thirdFunction();
}