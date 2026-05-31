(() => {

    class Apocalipsis {

        static instance: Apocalipsis;

        private constructor( public name: string ) {}

        static callApocalipsis(name: string) {
            if ( !Apocalipsis.instance ) {
                Apocalipsis.instance = new Apocalipsis(name);
            }
            return Apocalipsis.instance;
        }
        
    }

    // const apocalipsis = new Apocalipsis('Apocalipsis');
    const apocalipsis = Apocalipsis.callApocalipsis('Apocalipsis');
    console.log(apocalipsis); 

})()