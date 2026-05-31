(() => {

    class Avenger {
        constructor(
            public name: string,             
            public realName?: string
        ) { 
            console.log('Constructor Avenger llamado');
        }

        protected getFullName(): string {
            return `${this.name} (${this.realName})`;
        }

    }

    class Xmen extends Avenger {

        constructor(
            public name: string,
            public realName: string,
            public isMutant: boolean
        ) {
            super(name, realName);
            console.log('Constructor Xmen llamado');
        }
            
        get fullName() {
            return `${this.name} (${this.realName})`;
        }

        set fullName(name: string) {
            const [firstName, realName] = name.split(' ');
            this.name = firstName;
            this.realName = realName;
        }

        getfullNameDesdeXmen() {
            console.log( super.getFullName());
        }

    }

    // const wolverine = new Xmen('Wolverine', 'Logan', true);
    // //console.log(wolverine);
    // wolverine.getfullNameDesdeXmen()

    // wolverine.fullName = 'Danton Logan';
    //console.log(wolverine.fullName);


})()