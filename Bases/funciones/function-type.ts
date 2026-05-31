(() => {

    const addNumber = ( a: number, b: number ): number => {
        return a + b;
    }

    const greet = ( name: string ) => `Hola ${ name }`;

    const saveTheWorld = () => `El mundo está salvado!`;

   let myFunction;

   myFunction = 10;
   console.log( myFunction );

   myFunction = addNumber;
   console.log( myFunction( 1, 2 ) );

   myFunction = greet;
   console.log( myFunction( 'Fernando' ) );

   myFunction = saveTheWorld;
   console.log( myFunction() );

})()