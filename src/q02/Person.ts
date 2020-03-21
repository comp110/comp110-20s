import { Point } from "./Point";
import { byChance } from "./Stochastic";

export class Person {

    location: Point;
    direction: Point;

    infection: number = -1;
    immune: boolean = false;

    constructor(location: Point) {
        this.location = location;
        this.changeDirection();
    }

    changeDirection() {
        let dx = (Math.random() - 0.5) * 1;
        let dy = (Math.random() - 0.5) * 1;
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
            if (this.infection > 100) {
                this.infection = -1;
                this.immune = true;
            }
        }
        this.location = this.direction.addWith(this.location);
    }

    contact(other: Person) {
        if (this.isInfected() && !other.isInfected()) {
            other.infect();
        } else if (other.isInfected() && !this.isInfected()) {
            this.infect();
        }
    }
}