import { Model } from "./Model";

interface VoidFn {
    (): void;
}

export class View {
    model: Model;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    onPlay: VoidFn;
    onPause: VoidFn;
    onReset: VoidFn;

    constructor(model: Model) {
        this.model = model;
        this.canvas = document.getElementById("viewport") as HTMLCanvasElement; 
        this.context = this.canvas.getContext("2d");

        this.initControls();
    }

    render() {
        let scale = 5;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.model.population.length; i++) {
            let person = this.model.population[i];
            let p = this.model.population[i].location;
            let x = scale * p.x;
            let y = scale * p.y;
            if (person.isInfected()) {
                this.context.fillStyle = "red";
                this.context.strokeStyle = "red";
            } else if (person.immune) {
                this.context.fillStyle = "#58D68D";
                this.context.strokeStyle = "#58D68D";
            } else {
                this.context.fillStyle = "whitesmoke";
                this.context.strokeStyle = "whitesmoke";
            }
            this.context.beginPath();
            this.context.arc(x, y, scale, 0, 2 * Math.PI, false);
            this.context.stroke();
            this.context.beginPath();
            this.context.arc(x, y, scale / 2, 0, 2 * Math.PI, false);
            this.context.fill();
        }
    }

    initControls() {
        document.getElementById("play").addEventListener("click", () => this.onPlay());
        document.getElementById("pause").addEventListener("click", () => this.onPause());
        document.getElementById("reset").addEventListener("click", () => this.onReset());

        let n = document.getElementById("n") as HTMLInputElement;
        n.addEventListener("change", () => this.model.n = parseInt(n.value, 10));
        n.value = this.model.n.toString();

        let v = document.getElementById("v") as HTMLInputElement;
        v.addEventListener("change", () => this.model.velocity = parseFloat(v.value));
        v.value = this.model.velocity.toString();
    }
}