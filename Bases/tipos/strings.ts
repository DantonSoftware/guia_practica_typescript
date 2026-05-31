(()=> {

    const batman: string = "Batman";
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Volcan Negro`;

    console.log(`I' m ${batman}`);
    console.log(`I' m ${linternaVerde}`);
    console.log(`I' m ${volcanNegro}`);

    console.log( batman[10]?.toUpperCase() || 'No se encontró el caracter' );
    console.log( linternaVerde[10]?.toUpperCase() || 'No se encontró el caracter' );
    console.log( volcanNegro[10]?.toUpperCase() || 'No se encontró el caracter' );

})()