// server response simulation function start
function serverResponseSimulation() {
    let isResponse = true;
    let timer =  ((Math.random() * 10).toFixed(0)) * 1000;
    return setTimeout(() => {
        console.log(timer);
        console.log(isResponse);
    }, timer);
}
serverResponseSimulation();
// end

