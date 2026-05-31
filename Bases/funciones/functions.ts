(()=> {

    const hero: string = 'Flash';

    function returnName(): string {
        return hero;
    }

    const activateBatSignal = (): string => {
        return 'Activada la Batiseñal';
    }

    console.log(typeof activateBatSignal);

    const heroName: string = returnName();
    console.log(heroName);

})()