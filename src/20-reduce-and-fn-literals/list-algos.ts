import { Node, first, rest, cons, listify } from "introcs/list";

export interface Predicate<T> {
    (item: T): boolean;
}

export interface Transform<T, U> {
    (item: T): U;
}

export interface Reducer<T, U> {
    (memo: U, item: T): U;
}

export let filter = <T> (xs: Node<T>, test: Predicate<T>): Node<T> => {
    if (xs === null) {
        return null;
    } else if (test(first(xs))) {
        return cons(first(xs), filter(rest(xs), test));
    } else {
        return filter(rest(xs), test);
    }
};

export let map = <T, U> (xs: Node<T>, f: Transform<T, U>): Node<U> => {
    if (xs === null) {
        return null;
    } else {
        return cons(f(first(xs)), map(rest(xs), f));
    }
};

export let reduce = <T, U> (xs: Node<T>, f: Reducer<T, U>, memo: U): U => {
    if (xs === null) {
        return memo;
    } else {
        return reduce(rest(xs), f, f(memo, first(xs)));
    }
};