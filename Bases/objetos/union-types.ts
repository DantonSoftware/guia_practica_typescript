(()=> {

    type Hero = {
        name: string;
        age?: number;
        power: number[];
        getName?: () => string;
    }

    let myCustomVariable: (string | number | Hero) = 'Hello World';
    console.log(typeof myCustomVariable);

    myCustomVariable = 42;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Superman',
        age: 30,
        power: [1],
    }

    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);

})()