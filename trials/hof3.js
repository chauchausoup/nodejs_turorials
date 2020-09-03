//function that change other function

function noisy(f){
    return (...args)=>{
        console.log('calling with :'+ args);
        let result = f(...args);
        console.log(`called with ${args}, returned, ${result} `);
        return result;
    };
}

noisy(Math.min)(3,2,1);

console.log(typeof noisy(Math.min)); // returns a function thus clears our understanding
