var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let currentGas = 0;
    let startStation = 0;
    
    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i] - cost[i];
        currentGas += gas[i] - cost[i];
        
        if (currentGas < 0) {
            // Reset starting station and total gas
            startStation = i + 1;
            currentGas = 0;
        }
    }
    
    // If total gas is positive, a solution exists, return the start station index
    return totalGas >= 0 ? startStation : -1;
};

// Example usage:
const gas1 = [1,2,3,4,5];
const cost1 = [3,4,5,1,2];
console.log(canCompleteCircuit(gas1, cost1)); // Output: 3

const gas2 = [2,3,4];
const cost2 = [3,4,3];
console.log(canCompleteCircuit(gas2, cost2)); // Output: -1
