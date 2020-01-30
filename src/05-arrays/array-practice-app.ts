import { print } from "introcs";

export let main = async () => {
    
    // TODO: Add Test Cases

};

// TODO: Write a function skeleton for `sum`

/**
 * This function is given a test name for diagnostic purposes.
 * 
 * It is then given an expected number. This should be what your
 * test is *expecting* to be the correct result.
 * 
 * It is then given the actual number in question. This will be
 * compared with the expected number for equality.
 * 
 * If the two numbers are equal, then the test passes. If they are
 * different in any way, then the test fails.
 */
export let testNumber = (name: string, expected: number, actual: number): void => {
    if (expected === actual) {
        print("PASS: " + name);
    } else {
        print("FAIL: " + name);
        print("-- Expected RV: " + expected);
        print("-- Actual RV: " + actual);
    }
};

main();