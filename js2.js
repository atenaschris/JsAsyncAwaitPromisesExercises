//Ejercicio 2
// Vamos a crear un juego de adivino.
// User story1: Un usuario ebe poder insertar un numero.
// User story2: El sistema debe tomar un numero random entre 1 y 6
// User story3: Si el numero que ha insetado el usuario es igual al numero random generado por el sistema, le damos 2 puntos al usuario.
// User story4: Si entre el numero el usuario y el nuemro generado por el sistema hay una diferencia de 1 punto, entonces damos al usuario 1 punto, de otra forma damos al usuario 0 puntos.
//User story5: EL usuario puede elegir entre reiniciar el juego o dejar de jugar.

const enterNumber = ()=>{
    return new Promise((resolve,reject)=>{
        const userNumber = +prompt("Inserta un numero entre1 y 6");
        const randomNumber = Math.floor(Math.random() * 6 +1)

        if(isNaN(userNumber)){
            reject(new Error('El valor de input no est corecto'));
        }
        if(userNumber === randomNumber){
            resolve({
                points:2,
                randomNumber,
            }); 
        } else if(userNumber === randomNumber -1 || userNumber === randomNumber +1){
            resolve({
                points:1,
                randomNumber,
            })
        }else{
            resolve({
                points:0,
                randomNumber,
            })
        }


    });

}

const continueGame = ()=>{
   
        return new Promise((resolve)=>{
           
                
                if(window.confirm("Quieres reiniciar el juego?")){
                    resolve(true);
                } else{
                    resolve(false);
                }
          
        })
    
}


   /*  const handleGuess = ()=>{
        enterNumber()
        .then((result)=>{
            alert(`El numero random generado es: ${result.randomNumber}, tienes ${result.points} puntos`);
            continueGame()
            .then((result)=>{
                if(result){
                    handleGuess()
                }else {
                    alert("Fin del juego");
                }
            })
        })
        .catch((err)=>{
            alert(err);
        })
    
    } */

    const handleGuess = async()=>{
        try{

            const result = await enterNumber();
            alert(`El numero random generado es: ${result.randomNumber}, tienes ${result.points} puntos`);
            const isContinuing = await continueGame();
            if(isContinuing){
                handleGuess();
            } else{
                alert("Fin del juego");
            }
        } catch(err){
            alert(err)
        }

    }

  

        handleGuess()
    

    


