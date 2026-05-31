(() => {

    class Avenger {
        name;
        power;

        constructor(name = 'No Name', power = 0) {
            this.name = name;
            this.power = power;
        }
    }

    const FlyingAvenger = class extends Avenger {
        flying;

        constructor() {
            super()
            this.flying = true;            
        }
    }

    const hulk = new Avenger('Hulk', 'Super strength');
    console.log(hulk);

})()