function sumValidMulOperations(memoryInput: string): number {
    // Define a regex pattern to match valid mul(X,Y) instructions
    const pattern = /mul\((\d+),(\d+)\)/g;
    
    let total = 0;
    let match: RegExpExecArray | null;

    // Iterate over all matches in the memory input
    while ((match = pattern.exec(memoryInput)) !== null) {
        // Extract X and Y from the match groups and compute their product
        const x = parseInt(match[1], 10);
        const y = parseInt(match[2], 10);
        total += x * y;
    }

    return total;
}

// Example corrupted memory input
const corruptedMemory = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

// Call the function and log the result
console.log(sumValidMulOperations(corruptedMemory));  // Output should be 161
