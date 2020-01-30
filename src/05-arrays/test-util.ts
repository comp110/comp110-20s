import { print } from "introcs";

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
        print("-- Expected: " + expected);
        print("-- Actually: " + actual);
    }
};

/**
 * This function is given a test name for diagnostic purposes.
 * 
 * It is then given an expected string result. This should be what your
 * test is *expecting* to be the correct result.
 * 
 * It is then given the actual string produced. This will be
 * compared with the expected string for equality.
 * 
 * If the two strings are equal, then the test passes. If they are
 * different in any way, then the test fails.
 */
export let testString = (name: string, expected: string, actual: string): void => {
    if (expected === actual) {
        print("PASS: " + name);
    } else {
        print("FAIL: " + name);
        print("-- Expected: " + expected);
        print("-- Actually: " + actual);
    }
};

/*
 * This function is given a test name for diagnostic purposes.
 * 
 * It is then given an expected number array. This should be what your
 * test is *expecting* to be the correct result.
 * 
 * It is then given the actual number array in question. This will be
 * compared with the expected array for equality.
 * 
 * If the two number arrays are equal, then the test passes. If they are
 * different in any way, then the test fails.
 */
export let testArray = (name: string, expected: number[], actual: number[]): void => {
    let passed = true;
    if (expected.length === actual.length) {
        for (let i = 0; i < expected.length; i++) {
            passed = passed && expected[i] === actual[i];
        }
    } else {
        passed = false;
    }

    if (passed) {
        print("PASS: " + name);
    } else {
        print("FAIL: " + name);
        print("-- Expected: " + expected);
        print("-- Actually: " + actual);
    }
};
