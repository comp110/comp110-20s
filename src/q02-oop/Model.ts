import { Cell } from "./Cell";
import { Point } from "./Point";
import { print } from "introcs";

let WIDTH = 100;
let HEIGHT = 100;

export class Model {
    n: number = 100;
    velocity: number = 0.1;
    population: Cell[];

    constructor(n: number, velocity: number) {
        this.n = n;
        this.velocity = velocity;
        this.reset();
    }

    reset(): void {
        this.population = [];
        for (let i = 0; i < this.n; ++i) {
            let cell = new Cell();
            cell.location = this.randomPosition();
            cell.direction = this.randomDirection();
            this.population[i] = cell;
        }
        this.population[0].getsSick();
    }

    randomPosition(): Point {
        let x = Math.random() * WIDTH;
        let y = Math.random() * HEIGHT;
        return new Point(x, y);
    }

    randomDirection(): Point {
        let direction = Math.random() * 2 * Math.PI;
        let dx = Math.cos(direction) * this.velocity;
        let dy = Math.sin(direction) * this.velocity;
        return new Point(dx, dy);
    }

    tick(): void {
        for (let i = 0; i < this.population.length; i++) {
            let cell = this.population[i];
            cell.tick();
            this.enforceBounds(cell);
        }
        this.checkCollisions();
    }

    enforceBounds(cell: Cell): void {
        if (cell.location.x < 0) {
            cell.location.x = 0;
            cell.direction.x *= -1;
        } else if (cell.location.x > WIDTH) {
            cell.location.x = WIDTH;
            cell.direction.x *= -1;
        }

        if (cell.location.y < 0) {
            cell.location.y = 0;
            cell.direction.y *= -1;
        } else if (cell.location.y > HEIGHT) {
            cell.location.y = HEIGHT;
            cell.direction.y *= -1;
        }
    }

    checkCollisions(): void {
        for (let i = 0; i < this.population.length; i++) {
            let cellA = this.population[i];
            for (let j = i + 1; j < this.population.length; j++) {
                let cellB = this.population[j];
                if (cellA.location.distanceTo(cellB.location) < 2.0) {
                    cellA.collideWith(cellB);
                }
            }
        }
    }

}