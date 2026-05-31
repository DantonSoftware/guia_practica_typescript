(()=> {

    type Hero = {
        name: string;
        age?: number;
        power: string[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        power: ['super speed', 'time travel'],
        getName() {
            return this.name;
        }
    };

    let superman: Hero = {
        name: 'Clark Kent',
        age: 500,
        power: ['super strength', 'flight'],
        getName() {
            return this.name;
        }
    };

})()