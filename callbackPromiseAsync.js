// server response simulation function start
function serverResponseSimulation() {
    let isResponse = false;
    let timer =  ((Math.random() * 10).toFixed(0)) * 1000;
    return setTimeout(() => {
        isResponse;
        console.log(isResponse);
    }, timer);
}
// let a = serverResponseSimulation();
let a = true;
console.log(a);
// end

// callback training start 

// function processingData(data) {
//     console.log("Data:" + data );
// }

// function receiveSimulationCallback(callback) {
//     let receivedData = serverResponseSimulation();
//     console.log(receivedData);
//     callback(receivedData);
// }

// receiveSimulationCallback(processingData);