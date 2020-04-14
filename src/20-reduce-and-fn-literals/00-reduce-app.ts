import { print, csvToList } from "introcs";
import { Node, cons, first, rest, listify } from "introcs/list";

export let main = async () => {
    let input = listify(97, 94, 55, 90, 98, 2, 7, 77, 16, 62);

    // TODO #2 - Assign to result the return value of reduce with arguments:
    // 1. the input list
    // 2. your max reducer function
    // 3. an initial memo value of 0
    let result = 0;
    print("The result is: " + result);
};

// TODO #1: Define max function

// == Functional Interfaces ==
interface Reducer<T, U> {
    (memo: U, item: T): U;
}

let reduce = <T, U> (xs: Node<T>, f: Reducer<T, U>, memo: U): U => {
    if (xs === null) {
        return memo;
    } else {
        return reduce(rest(xs), f, f(memo, first(xs)));
    }
};

main();