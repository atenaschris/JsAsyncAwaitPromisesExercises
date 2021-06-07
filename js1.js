//Ejercicio 1.
//traducir està historia en codigo.
// Mi amigo me promete que , en 2 semanas, me hara unos pasteles para mi cumpleano.
//Si mi amigo no se enferma(goza de buena salud), entonces me harà 1 pasteles
//pero si mi amigo se enferma, entonces no me har ningun pastel.
//De todos modos, independentmiente de lo que mi amigo haga, Yo voy a festajar mi cumpleano
//Extra: hacer el refactoring con la nueva sintaxis async - await
    

const onMyBirthday = (isKayoSick)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            
            if(!isKayoSick){
                resolve(1);
            }else{
                reject(new Error('Mi amigo no me harà ningun pastel porquè està enfermo'));
            }

        }, 2000);
    });
}

/* console.time("Timer");

onMyBirthday(false)
    .then((result)=>{
        console.timeLog("Timer")
        console.log(`Mi amigo me harà ${result} pastel porquè no està enfermo` );
    })
    .catch((err)=>{
        console.timeLog("Timer")
        console.log(err);
    })
    .finally(()=>{
        console.log('Enfermo o no, voy a festejar mi cumpleano ');
    }) */

    const refactoring = async ()=>{
        try{
            const result =  await onMyBirthday(false);
            console.time("Timer");
            console.log(`Mi amigo me harà ${result} pastel porquè no està enfermo` );

        } catch(err){
            console.log(err);
        } finally{
            console.log('Enfermo o no, voy a festejar mi cumpleano ');
        }
    }

    refactoring();
