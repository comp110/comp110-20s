import { Person } from "./Person";
import { Point } from "./Point";

export class Model {
    n: number;
    population: Person[];

    width: number = 100;
    height: number = 100;

    initial_infected: number = 10;

    constructor(n: number) {
        this.n = n;
        this.reset();
    }

    reset(): void {
        this.population = [];
        for (let i = 0; i < 100; ++i) {
            let x = Math.random() * this.width;
            let y = Math.random() * this.height;
            let location = new Point(x, y);
            this.population[i] = new Person(location);
            if (i < this.initial_infected) {
                this.population[i].infect();
            }
        }
    }

    tick(): void {
        let people = this.population;
        for (let i = 0; i < people.length; i++) {
            people[i].tick();
            if (people[i].location.x < 0) {
                people[i].location.x = 0;
                people[i].direction.x *= -1;
            } else if (people[i].location.x > this.width) {
                people[i].location.x = this.width;
                people[i].direction.x *= -1;
            }

            if (people[i].location.y < 0) {
                people[i].location.y = 0;
                people[i].direction.y *= -1;
            } else if (people[i].location.y > this.height) {
                people[i].location.y = this.height;
                people[i].direction.y *= -1;
            }
        }
        this.makeContacts();
    };

    makeContacts(): void {
        let people = this.population;
        for (let i = 0; i < people.length; i++) {
            for (let j = i + 1; j < people.length; j++) {
                if (people[i].location.distanceTo(people[j].location) < 2.0) {
                    people[i].contact(people[j]);
                }
            }
        }
    };
}