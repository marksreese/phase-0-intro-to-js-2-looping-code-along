function writeCards(array=[], event){
    const returnArray=[];
    for (let counter=0; counter<array.length; counter++){
        returnArray.push(`Thank you, ${array[counter]}, for the wonderful ${event} gift!`);
    }
    return returnArray;
}

function countDown(integer){
    while (integer>=0){
        console.log(integer);
        integer--;
    }
}