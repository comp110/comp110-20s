import { Point } from "./Point";
import { Person } from "./Person";
import { print } from "introcs";

const width = 100;
const height = 100;

let main = async () => {

    let population: Person[] = [];
    for (let i = 0; i < 100; ++i) {
        let location = new Point(Math.random() * width, Math.random() * height);
        population[i] = new Person(location);
        if (Math.random() < 0.1) {
            population[i].infect();
        }
    }

    window.setInterval(() => tick(population), 30);
};

let canvas = document.getElementById("viewport") as HTMLCanvasElement;
let ctx = canvas.getContext("2d");
let render = (population: Person[]): void => {
    let scale = 5; //canvas.width / width;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < population.length; i++) {
        let p = population[i].location;
        let x = scale * p.x;
        let y = scale * p.y;
        if (population[i].isInfected()) {
            ctx.fillStyle = "red";
            ctx.strokeStyle = "red";
        } else if (population[i].immune) {
            ctx.fillStyle = "#58D68D";
            ctx.strokeStyle = "#58D68D";
        } else {
            ctx.fillStyle = "white";
            ctx.strokeStyle = "white";
        }
        ctx.beginPath();
        ctx.arc(x, y, scale, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, y, scale / 2, 0, 2 * Math.PI, false);
        ctx.fill();
    }
};

let report = (people: Person[]): void => {
    print("--");
    print("Infected: " + people.filter((p) => p.isInfected()).length);
    print("Immune: " + people.filter((p) => p.immune).length);
};

let tick = (people: Person[]): void => {
    for (let i = 0; i < people.length; i++) {
        people[i].tick();
        if (people[i].location.x < 0) {
            people[i].location.x = 0;
            people[i].direction.x *= -1;
        } else if (people[i].location.x > width) {
            people[i].location.x = width;
            people[i].direction.x *= -1;
        }

        if (people[i].location.y < 0) {
            people[i].location.y = 0;
            people[i].direction.y *= -1;
        } else if (people[i].location.y > height) {
            people[i].location.y = height;
            people[i].direction.y *= -1;
        }
    }
    makeContacts(people);
    render(people);
};

let makeContacts = (people: Person[]): void => {
    for (let i = 0; i < people.length; i++) {
        for (let j = i + 1; j < people.length; j++) {
            if (people[i].location.distanceTo(people[j].location) < 2.0) {
                people[i].contact(people[j]);
            }
        }
    }
};

main();