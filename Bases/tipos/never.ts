(()=>{

    const error = ( message: string):never => {
        throw new Error(message);
    }

    error('Este es un mensaje de error');

})()