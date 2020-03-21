import { Point } from "./Point";
import { Cell } from "./Cell";
import { print } from "introcs";
import { Controller } from "./Controller";
import { View } from "./View";
import { Model } from "./Model";

const width = 100;
const height = 100;

let main = async () => {

    let model = new Model();
    let view = new View(model);
    let controller = new Controller(model, view);
    controller.play();

    // let population: Person[] = [];
    // for (let i = 0; i < 100; ++i) {
    //     let location = new Point(Math.random() * width, Math.random() * height);
    //     population[i] = new Person(location);
    //     if (Math.random() < 0.1) {
    //         population[i].infect();
    //     }
    // }

    // window.setInterval(() => tick(population), 16.67);
};

// let canvas = document.getElementById("viewport") as HTMLCanvasElement;
// let ctx = canvas.getContext("2d");
// let render = (population: Cell[]): void => {
// };

// let report = (people: Cell[]): void => {
//     print("--");
//     print("Infected: " + people.filter((p) => p.isInfected()).length);
//     print("Immune: " + people.filter((p) => p.immune).length);
// };
// 
// let tick = (people: Cell[]): void => {
//     for (let i = 0; i < people.length; i++) {
//         people[i].tick();
//         if (people[i].location.x < 0) {
//             people[i].location.x = 0;
//             people[i].direction.x *= -1;
//         } else if (people[i].location.x > width) {
//             people[i].location.x = width;
//             people[i].direction.x *= -1;
//         }
// 
//         if (people[i].location.y < 0) {
//             people[i].location.y = 0;
//             people[i].direction.y *= -1;
//         } else if (people[i].location.y > height) {
//             people[i].location.y = height;
//             people[i].direction.y *= -1;
//         }
//     }
//     makeContacts(people);
//     render(people);
// };
// 
// let makeContacts = (people: Cell[]): void => {
//     for (let i = 0; i < people.length; i++) {
//         for (let j = i + 1; j < people.length; j++) {
//             if (people[i].location.distanceTo(people[j].location) < 2.0) {
//                 people[i].contact(people[j]);
//             }
//         }
//     }
// };

main();