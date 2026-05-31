(() => {

    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
        const name = `${firstName} ${lastName}`;
        return upper ? name.toUpperCase() : name;
    }

    const name = fullName('Tony', 'Stark', true);

    console.log({ name });

})()