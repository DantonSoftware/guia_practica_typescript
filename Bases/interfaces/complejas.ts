(() => {

    interface Client {
        name: string;
        age: number;
        address?: Address;
        getFullAddress( id: string ): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Jorge',
        age: 25,
        address: {
            id: 1,
            zip: '12345',
            city: 'Madrid'
        },
        getFullAddress: (id: string) => {
            // Implementation for getting full address based on the provided id 
            return `Full address for ${id}`;
        }
    }

    const client2: Client = {
        name: 'Ana',
        age: 30,
        address: {
            id: 2,
            zip: '54321',
            city: 'Barcelona'
        },
        getFullAddress: (id: string) => {
            // Implementation for getting full address based on the provided id 
            return `Full address for ${id}`;
        }
    }



})()