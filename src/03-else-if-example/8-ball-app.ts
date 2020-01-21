import { print, random, promptString } from "introcs";

export let main = async () => {

    let isPlaying = true;
    while (isPlaying) {
        let question = await promptString("Ask a Yes/No Question");
        let response = random(0, 2);
        if (response === 0) {
            print("Very doubtful.");
        } else {
            if (response === 1) {
                print("Ask again later.");
            } else {
                print("It is certain!");
            }
        }
        let shouldContinue = await promptString("Ask another? yes/no");
        isPlaying = shouldContinue === "yes";
    }

    print("Have a great day!");

};

main();