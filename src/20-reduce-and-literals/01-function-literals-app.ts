import { print } from "introcs";
import { listify } from "introcs/list";
import { Predicate, filter, Transform, map, Reducer, reduce } from "./list-algos";

export let main = async () => {
    let input = listify("University", "of", "North", "Carolina");
    print("input: " + input);
    let filtered = ""; // TODO: filter input by longWord
    print("filtered: " + filtered);
    let transformed = ""; // TODO: transform filtered by firstLetter
    print("transformed: " + transformed);
    let reduced = ""; // TODO: reduce transformed by concatenate
    print("reduced: " + reduced);
};

let longWord = (item: string): boolean => {
    return item.length > 4;
};

let firstLetter = (item: string): string => {
    return item[0];
};

let concatenate = (memo: string, item: string): string => {
    return memo + item;
};

main();