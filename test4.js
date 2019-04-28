// var fun =  function(input) {
//     let a = 100;

//     if (input) {
//         let b = a + 1;
//         console.log('inner loop' +b);
//     }
//     console.log('outer loop'+b);
// }

// fun(1);

function Item(){

    for(var i=0; i<100000; i++){
    console.log(i);

    }

    return "End";
}


async function f1(){


   let res= await Item();

    console.log(res);
}


f1();