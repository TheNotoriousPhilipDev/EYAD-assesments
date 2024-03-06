class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

class City {
    constructor(name) {
        this.name = name;
        this.residents = [];
    }

    addResident(person) {
        this.residents.push(person);
    }
}

class Graph {
    constructor() {
        this.people = [];
        this.cities = [];
    }

    addPerson(name, age, cityName) {
        const city = this.findOrCreateCity(cityName);
        const person = new Person(name, age, city);
        this.people.push(person);
        city.addResident(person);
    }

    addCity(cityName) {
        const city = new City(cityName);
        this.cities.push(city);
        return city;
    }

    findOrCreateCity(cityName) {
        let city = this.cities.find(city => city.name === cityName);
        if (!city) {
            city = this.addCity(cityName);
        }
        return city;
    }

    printResidentsOfCity(cityName) {
        const city = this.cities.find(city => city.name === cityName);
        if (!city) {
            console.log("City not found.");
            return;
        }
        console.log(`Residents of ${cityName}:`);
        city.residents.forEach(person => {
            console.log(`- ${person.name}, ${person.age}`);
        });
    }
}


const myFirstGraph = new Graph();

// Add some cities
myFirstGraph.addCity("New York");
myFirstGraph.addCity("Los Angeles");

// Add some people
myFirstGraph.addPerson("Alexis", 30, "New York");
myFirstGraph.addPerson("Felipe", 25, "Los Angeles");
myFirstGraph.addPerson("Magaly", 35, "New York");

// Print residents of a city
myFirstGraph.printResidentsOfCity("New York");
