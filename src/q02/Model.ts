import { Cell } from "./Cell";
import { Point } from "./Point";

let WIDTH = 100;
let HEIGHT = 100;

export class Model {
    n: number = 100;
    velocity: number = 0.1;
    initialInfected: number = 1;
    time: number = 0;

    population: Cell[];

    constructor() {
        this.reset();
    }

    reset(): void {
        this.time = 0;
        this.population = [];
        for (let i = 0; i < this.n; ++i) {
            let x = Math.random() * WIDTH;
            let y = Math.random() * HEIGHT;
            let location = new Point(x, y);
            this.population[i] = new Cell(location, this.velocity);
            if (i < this.initialInfected) {
                this.population[i].infect();
            }
        }
    }

    tick(): void {
        this.time++;
        this.checkBounds();
        this.makeContacts();
    }

    checkBounds(): void {
        let cells = this.population;
        for (let i = 0; i < cells.length; i++) {
            cells[i].tick();
            if (cells[i].location.x < 0) {
                cells[i].location.x = 0;
                cells[i].direction.x *= -1;
            } else if (cells[i].location.x > WIDTH) {
                cells[i].location.x = WIDTH;
                cells[i].direction.x *= -1;
            }

            if (cells[i].location.y < 0) {
                cells[i].location.y = 0;
                cells[i].direction.y *= -1;
            } else if (cells[i].location.y > HEIGHT) {
                cells[i].location.y = HEIGHT;
                cells[i].direction.y *= -1;
            }
        }
    }

    makeContacts(): void {
        let cells = this.population;
        for (let i = 0; i < cells.length; i++) {
            for (let j = i + 1; j < cells.length; j++) {
                if (cells[i].location.distanceTo(cells[j].location) < 2.0) {
                    cells[i].contact(cells[j]);
                }
            }
        }
    }
}