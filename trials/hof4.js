//function that provides us new type of control flow.


function unless(test,then){
    if(!test)then();
}


function repeat(n,action){
    for(var i =0;i<n;i++){
        action(i);
    }
}


repeat(3,n=>{
    unless(n%2==1,()=>{
        console.log(n,"is even")
    })
});


[1,2,3].forEach(i=>console.log(i));

