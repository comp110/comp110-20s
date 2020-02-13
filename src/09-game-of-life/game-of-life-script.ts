/**
 * This file contains support code to run today's demo and involves concepts
 * you will learn later in the semester! You can safely ignore this file!
 */
import { GameOfLifeView } from "./gol-view";
import { GameOfLifeController } from "./gol-controller";

const ROWS = 13;
const COLS = 13;

export let main = async () => {
    let view = new GameOfLifeView();
    let controller = new GameOfLifeController(view);
    view.update();
};

main();