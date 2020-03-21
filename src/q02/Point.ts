export class Point {

    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    translate(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }

    distanceTo(other: Point): number {
        let xDelta2 = (other.x - this.x) ** 2;
        let yDelta2 = (other.y - this.y) ** 2;
        return Math.sqrt(xDelta2 + yDelta2);
    }

    addWith(other: Point): Point {
        return new Point(this.x + other.x, this.y + other.y);
    }

    toString(): string {
        return this.x + ", " + this.y;
    }

}