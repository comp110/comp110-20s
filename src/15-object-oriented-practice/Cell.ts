import { Point } from "./Point";

export class Cell {
    // The position of the Cell in the simulated environment.
    location: Point;
    // The direction the Cell will move in each time tick.
    direction: Point;

    // The sickness property is 0 when not infected, > 0 when sick.
    sickness: number = 0;

    // Helper method to "infect" a Cell
    getsSick(): void {
        this.sickness = 1;
    }

    // Part #1: Define a void method named `tick` with no parameters.
    // Its purpose is to reassign this object's location property the result
    // of adding this object's location property with its direction
    // property. Hint, look at the Point class to see its addWith method.

    // Part #2: Define a method named `isSick` with no parameters
    // that returns a boolean. It should return true if this object's
    // sickness property is greater than 0 and false otherwise.
    isSick(): boolean {
        return false;
    }

    // Part #3: Complete the method `collideWith`.
    // Its implementation should be such that if this cell is sick
    // and the other isn't, then infect the other cell by calling its
    // infect method. Be sure the logic is true in the inverse, as well.
    collideWith(other: Cell): void {
        // TODO
    }
}