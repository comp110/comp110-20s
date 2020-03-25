import { Model } from "./Model";
import { View } from "./View";
import { Controller } from "./Controller";

let main = async () => {
    let model = new Model(25, 0.2);
    let view = new View(model);
    let controller = new Controller(model, view);
    controller.play();
};

main();