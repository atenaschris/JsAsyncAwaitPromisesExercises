let stocks = {
    fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"],
}


//callbacks hell


/* let order = (fruit_name, call_production)=>{
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected`);
        call_production();
    }, 2000);
    

} */

/* let production = ()=>{
    setTimeout(() => {       
        console.log('production has started');
        setTimeout(() => {
            console.log('the fruit has been chopped');
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`);
                setTimeout(() => {
                   console.log('the machine has been started');
                   setTimeout(() => {
                       console.log(` the ice cream was placed on ${stocks.holder[0]}`);
                       setTimeout(() => {
                        console.log(`${stocks.toppings[0]} was added as toppings`);
                        setTimeout(() => {
                            console.log('serve ice cream');
                        }, 2000);
                       }, 3000);
                   }, 1000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);
}

order(0,production); */


//Same thinghs with promises

let is_shop_opened = false;

/* let order = (time,work)=>{
    return new Promise( (resolve,reject)=>{
        if (is_shop_opened) {
            setTimeout(() => {
                resolve(work())
            }, time);
        } else{
            reject(new Error('Customer left'));
        }
    })
   
   
}

order(2000,()=>console.log(`${stocks.fruits[0]} was selected`))

.then(()=>{
    return order(0000,()=>console.log('Production has started'))
})
.then(()=>{
    return order(2000,()=>console.log('The fruit was chopped'))
})
.then(()=>{
    return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`))
})
.then(()=>{
    return order(1000,()=> console.log(` the ice cream was placed on ${stocks.holder[0]}`))
})
.then(()=>{
    return order(3000,()=> console.log(`${stocks.toppings[0]} was added as toppings`))
})
.then(()=>{
    return order(2000,()=> console.log('serve ice cream'))
})

.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log('The shop has to close');
}) */


//How the keyword await works

/* let customording =  ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(console.log("Which topping do you want?"));
        }, 4000);
    })
}

let kitchen = async function(){
    console.log("A");
    console.log("B");
    console.log("C");
    await customording();
    console.log("D");
    console.log("E");
}
kitchen()

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking other orders"); */

function time(ms){
    return new Promise((resolve,reject)=>{
        if (is_shop_opened) {
            setTimeout(resolve,ms)  
                
            
        } else{
            reject(console.log("shop is closed"))
        }
    })
}

async function kitchen() {
    try{
        await time(2000)
        console.log(`${stocks.fruits[0]} was selected`);
        await time(0000)
        console.log('Start the production');
        await time(2000)
        console.log('cut the fruit');
        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`);
        await time(1000)
        console.log(` the ice cream was placed on ${stocks.holder[0]}`);
        await time(3000)
        console.log(`${stocks.toppings[0]} was added as toppings`);
        await time(1000)
        console.log('serve ice cream');
    }
    catch(err){
        console.log("customer left");
    }
    finally{
        console.log("shop closed");
    }
}

kitchen()