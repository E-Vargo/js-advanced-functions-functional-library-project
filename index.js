function stdInput(collection){
    return Array.isArray(collection) ? collection.slice() : Object.values(collection);
}



function myEach(collection, callback){
    let newCollection = stdInput(collection);

    for(let i = 0; i < newCollection.length; i++){
        callback(newCollection[i]);
    }
    return collection
}

function myMap(collection, callback){
    let newCollection = stdInput(collection);
    let modifiedCollection = [];

    for(let i = 0; i < newCollection.length; i++){
        modifiedCollection.push(callback(newCollection[i])); 
    }
    return modifiedCollection
}

function myReduce(collection, callback, acc){

    let newCollection = stdInput(collection);

    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
      }
    
      const len = newCollection.length;
    
      for (let i = 0; i < len; i++) {
        acc = callback(acc, newCollection[i], newCollection);
      }
      return acc;
}

function myFind(){

    
}