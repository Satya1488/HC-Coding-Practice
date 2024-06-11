
function numberOfWays(n) {

    let firstStep = 1;
    let secondStep = 1;

    for (let i=2; i <= n; i++) {

        let currentStep = firstStep + secondStep;
        secondStep = firstStep;
        firstStep = currentStep;
    }

    console.log(firstStep);

}

numberOfWays(4);