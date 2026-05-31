(()=> {

    let flash :{name: string, age?: number, power: string[], getName?: () => string} = {
        name: 'Barry Allen',
        age: 24,
        power: ['super speed', 'time travel'],
        getName() {
            return this.name;
        }
    };

    let superman: {name: string, age?: number, power: string[], getName?: () => string} = {
        name: 'Clark Kent',
        age: 500,
        power: ['super strength', 'flight'],
    };



})()