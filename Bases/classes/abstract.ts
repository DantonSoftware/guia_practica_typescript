(() => {

    class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}
    }

    class Xmen extends Mutante {

        salvarMundo() {
            return 'Mundo salvado!';
        }
    }

    class villian extends Mutante {

        conquistarMundo() {
            return 'Mundo conquistado!';
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const joker = new villian('Joker', 'Jack Napier');

    // console.log(wolverine);
    // console.log(joker);

    const printName = (character: Mutante) => {
        console.log(character.name);
    }

    // printName(wolverine);
    // printName(joker);

})()