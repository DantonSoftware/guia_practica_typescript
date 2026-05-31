(()=> {

    type Avenger = {
        name: string,
        weapon: string
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    }

    const capitanAmerica: Avenger = {
        name: 'Capitan America',
        weapon: 'Shield'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ironman, capitanAmerica, thor];

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }

})()