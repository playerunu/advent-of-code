import fs from 'fs';

namespace day3 {
    const solve = (content: string) => {
        let sum = 0;

        let done = false;
        let currentIndex = 0;
        while (!done) {
            const start = content.indexOf('mul(', currentIndex);
            let end;

            if (start === -1) {
                done = true;
                break;
            } 
            end = content.indexOf(')', start);
            if (end === -1) {
                done = true;
                break;
            }
            const numbersStr = content.substring(start + 4, end);
            const numbers = numbersStr.split(',');
            if (numbers.length !== 2) {
                currentIndex = start + 4;
                continue;
            } 
            

            const first = Number(numbers[0]);
            const second = Number(numbers[1]);
            if (!Number.isNaN(first) && !Number.isNaN(second)) {
                if (first >= 0 && first <= 999 && second >= 0 && second <= 999) {
                    sum += first * second;
                }
              
                currentIndex = end;
                console.log(numbersStr);
            } else {
                currentIndex = start + 4;
            }
        }
        return sum;
    }

    const part1 = () => {
        const content = fs.readFileSync("./advent of code 2024/day3/input.txt", "utf-8");
        
        let sum = 0;

        let done = false;
        let currentIndex = 0;
        while (!done) {
            const start = content.indexOf('mul(', currentIndex);
            let end;

            if (start === -1) {
                done = true;
                break;
            } 
            end = content.indexOf(')', start);
            if (end === -1) {
                done = true;
                break;
            }
            const numbersStr = content.substring(start + 4, end);
            const numbers = numbersStr.split(',');
            if (numbers.length !== 2) {
                currentIndex = start + 4;
                continue;
            } 
            

            const first = Number(numbers[0]);
            const second = Number(numbers[1]);
            if (!Number.isNaN(first) && !Number.isNaN(second)) {
                if (first >= 0 && first <= 999 && second >= 0 && second <= 999) {
                    sum += first * second;
                }
              
                currentIndex = end;
                console.log(numbersStr);
            } else {
                currentIndex = start + 4;
            }
        }
        console.log(sum);
    }

    const part2 = () => {
        const content = fs.readFileSync("./advent of code 2024/day3/input2.txt", "utf-8");
        
        let sum = 0;
        let start = 0;

        while (start < content.length) {
            let end = content.indexOf('don\'t()', start);
            if (end === -1) {
                end = content.length;
            }
            sum += solve(content.substring(start, end));
            start = content.indexOf('do()', end + 1);
            if (start === -1) {
                start = content.length;
            }
        }
        console.log(sum);
    }

    //part1();
    part2();
}