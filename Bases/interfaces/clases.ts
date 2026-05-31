(() => {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower( id: number): string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {
        constructor(
            public name: string,
            public realName: string,
            public age: number
        ) {}
        mutantPower( id: number): string {
            return this.name + '' + this.realName + '' + this.age + '' + id;
        }
    }

    const wolverine = new Mutant('Wolverine', 'Logan', 30);
    const mystique = new Mutant('Mystique', 'Raven Darkhölme', 25);

})()