import { Person } from "./Person";

export class Controller {
    model: Person[];
    animationInterval: number;

    cosntructor(model: Person[], view: View) {
        this.model = model;
        this.animationInterval = -1;
    }

    play() {

    }

}