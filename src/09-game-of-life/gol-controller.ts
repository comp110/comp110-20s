import * as model from "./gol-model";
import { GameOfLifeView } from "./gol-view";

/**
 * The purpose of the controller is to handle user events
 * which then impact the model and subsequently cause the
 * view to update.
 * 
 * This file involves concepts you will learn about later in
 * COMP110. For now you can ignore this file!
 */
export class GameOfLifeController {

    view: GameOfLifeView;

    stepButton: HTMLButtonElement;
    startButton: HTMLButtonElement;
    stopButton: HTMLButtonElement;
    clearButton: HTMLButtonElement;

    interval: number = -1;
    duration: number = 250;

    constructor(view: GameOfLifeView) {
        this.view = view;

        this.stepButton = document.getElementById("step") as HTMLButtonElement;
        this.startButton = document.getElementById("start") as HTMLButtonElement;
        this.stopButton = document.getElementById("stop") as HTMLButtonElement;
        this.clearButton = document.getElementById("clear") as HTMLButtonElement;

        model.reset();
        this.initEvents();
    }

    initEvents(): void {
        this.view.onselect = this.handleSelect.bind(this);
        this.stepButton.onclick = this.step.bind(this);
        this.startButton.onclick = this.start.bind(this);
        this.stopButton.onclick = this.stop.bind(this);
        this.clearButton.onclick = this.clear.bind(this);
    }

    handleSelect(x: number, y: number): void {
        if (this.interval === -1) {
            model.toggle(x, y);
            this.view.update();
        }
    }

    step(): void {
        model.step();
        this.view.update();
    }

    start(): void {
        if (this.interval === -1) {
            this.interval = window.setInterval(() => this.step(), this.duration);
        }
    }

    stop(): void {
        if (this.interval !== -1) {
            window.clearInterval(this.interval);
            this.interval = -1;
        }
    }

    clear(): void {
        this.stop();
        model.reset();
        this.view.update();
    }

}