(() => {

    class Avenger {

        // private name: string = '';
        // public team: string = '';
        // public realTime?: string = '';
        static avgAge: number = 35

        constructor(private name: string, private team: string, private realTime?: string) {
            this.name = name;
            this.team = team;
            this.realTime = realTime;
        }
    
        bio() {
            return `${this.name} is part of the ${this.team} team.`;
        }

    }

    // const antman: Avenger = new Avenger("Ant-Man", "Avengers", "Scott Lang");
    // //console.log(Avenger.avgAge);
    // console.log(antman);
    // console.log(antman.bio());

})()