import * as fs from 'fs';

namespace day5 {
  
    const part1 = () => {
        const content = fs.readFileSync("./2024/day5/input.txt", "utf-8");

        const lines = content.split('\n');
        let orderingRules = new Map<number, Set<number>>();

        let isReadingRules = true;
        let sum = 0;
        for (let line of lines) {
            if (!line) {
                isReadingRules = false;
                continue;
            }
            if (isReadingRules) {
                const [lower,higher] = line.split('|').map(Number);
                if (!orderingRules.has(higher)) {
                    orderingRules.set(higher, new Set<number>());
                }
                orderingRules.get(higher).add(lower);
            } else {
                const updates = line.split(',').map(Number);
                const updateIndices = new Map<number, number>();
                updates.forEach((update, index) => updateIndices.set(update, index));

                let isCorrectOrder = true;
                for (const [key, predecesors] of orderingRules.entries()) {
                    if (updateIndices.has(key)) {
                        for (let predecesor of predecesors) {
                            if (updateIndices.has(predecesor) && updateIndices.get(key) < updateIndices.get(predecesor) ) {
                                isCorrectOrder = false;
                                break;
                            }
                        }
                    }
                    if (isCorrectOrder === false){
                        break;
                    }
                }
                if (isCorrectOrder) {
                    sum += updates[Math.round((updates.length -1) /2 )];
                }
            }
        }
        console.log(sum);
    }

    const part2 = () => {
        const content = fs.readFileSync("./2024/day5/input.txt", "utf-8");

        const lines = content.split('\n');
        let orderingRules = new Map<number, Set<number>>();

        let isReadingRules = true;
        let sum = 0;
        for (let line of lines) {
            if (!line) {
                isReadingRules = false;
                continue;
            }
            if (isReadingRules) {
                const [lower,higher] = line.split('|').map(Number);
                if (!orderingRules.has(higher)) {
                    orderingRules.set(higher, new Set<number>());
                }
                orderingRules.get(higher).add(lower);
            } else {
                let updates = line.split(',').map(Number);

                let hasChanges = false;
                let swapped = false;
                do {
                    swapped = false;
                    for (let index = 0; index < updates.length - 1; index++) {
                        const a = updates[index];
                        const b = updates[index + 1];
                        //console.log(a,b);
                        if (orderingRules.has(a) && orderingRules.get(a).has(b)) {
                            updates[index + 1] = a;
                            updates[index] = b;
                            hasChanges = true;
                            swapped = true;
                        }
                    }
                } while (swapped);

                if (hasChanges) {
                    sum += updates[Math.round((updates.length -1) /2 )];
                }
            }
        }
        console.log(sum);
    }

    //part1();
    part2();
}