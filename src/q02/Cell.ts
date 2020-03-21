import { Point } from "./Point";

export class Cell {

    location: Point;
    direction: Point;
    velocity: number;

    infection: number = -1;
    immune: boolean = false;

    constructor(location: Point, velocity: number) {
        this.location = location;
        this.velocity = velocity;
        this.randomDirection();
    }

    randomDirection() {
        let direction = Math.random() * 2 * Math.PI;
        let dx = Math.cos(direction) * this.velocity;
        let dy = Math.sin(direction) * this.velocity;
        this.direction = new Point(dx, dy);
    }

    isInfected() {
        return this.infection >= 0;
    }

    infect() {
        if (!this.immune) {
            this.infection = 0;
        }
    }

    tick() {
        if (this.isInfected()) {
            this.infection++;
            if (this.infection > 300) {
                this.infection = -1;
                this.immune = true;
            }
        }
        this.location = this.direction.addWith(this.location);
    }

    contact(other: Cell) {
        if (this.isInfected() && !other.isInfected()) {
            other.infect();
        } else if (other.isInfected() && !this.isInfected()) {
            this.infect();
        }
    }
}