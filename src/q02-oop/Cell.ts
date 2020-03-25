import { Point } from "./Point";

export class Cell {
    // The position of the Cell in the simulated environment.
    location: Point;
    // The direction the Cell will move in each time tick.
    direction: Point;
    // The sickness property is 0 when not infected, > 0 when sick.
    sickness: number = 0;

    getsSick(): void {
        this.sickness = 1;
    }

    tick(): void {
        this.location = this.location.addWith(this.direction);
    }

    isSick(): boolean {
        return this.sickness > 0;
    }

    collideWith(other: Cell): void {
        if (this.isSick() && !other.isSick()) {
            other.getsSick();
        } else if (other.isSick() && !this.isSick()) {
            this.getsSick();
        }
    }

}