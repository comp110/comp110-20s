import { print } from "introcs";
import { multiply2d } from "./2d-arrays-helpers";

export let main = async () => {
    let table = multiply2d(10, 12);
    print(table);
};

main();