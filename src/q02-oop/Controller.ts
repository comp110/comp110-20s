import { Cell } from "./Cell";
import { View } from "./View";
import { Model } from "./Model";
import { print, clear } from "introcs";

export class Controller {

    model: Model;
    view: View;
    animationInterval: number;

    constructor(model: Model, view: View) {
        this.model = model;
        this.view = view;
        this.animationInterval = -1;
        this.initControls();
        this.reset();
    }

    initControls(): void {
        this.view.onPlay = () => this.play();
        this.view.onPause = () => this.pause();
        this.view.onReset = () => this.reset();
    }

    reset(): void {
        clear();
        this.model.reset();
        this.view.render();
        if (this.animationInterval === -1) {
            this.play();
        }
    }

    play(): void {
        if (this.animationInterval < 0) {
            this.animationInterval = window.setInterval(() => this.tick(), 16.67);
        }
    }

    pause(): void {
        window.clearInterval(this.animationInterval);
        this.animationInterval = -1;
    }

    tick(): void {
        this.model.tick();
        this.view.render();
        let model = this.model as any;
        if (model.steadyState !== undefined && model.steadyState()) {
            if (model.percentGotSick !== undefined) {
                print("% got sick: " + model.percentGotSick());
            }
            this.pause();
        }
    }

}