import fs from 'fs';

namespace day1 {
    const part1 = () => {
        const fileContent = fs.readFileSync("./advent of code 2024/day1-input.txt", "utf-8");
        const lines = fileContent.split("\n");

        const firstArray: number[] = [];
        const secondArray: number[] = [];

        lines.forEach((line) => {
            const numbers = line.split('   ');
            firstArray.push(Number(numbers[0]));
            secondArray.push(Number(numbers[1]));
        });

        firstArray.sort();
        secondArray.sort();

        let sum = 0;
        firstArray.forEach((nr, index) => {
            sum += Math.abs(nr - secondArray[index]);
        });

        console.log(sum);
    }

    const part2 = () => {
        const fileContent = fs.readFileSync("./advent of code 2024/day1-input2.txt", "utf-8");
        const lines = fileContent.split("\n");

        const firstArray: number[] = [];
        const secondGroupMap = new Map<number, number>();

        lines.forEach((line) => {
            const numbers = line.split('   ');
            firstArray.push(Number(numbers[0]));

            const secondNumber = Number(numbers[1]);
            if (secondGroupMap.has(secondNumber)) {
                secondGroupMap.set(secondNumber, secondGroupMap.get(secondNumber) as number + 1);
            } else {
                secondGroupMap.set(secondNumber, 1);
            }
        });

        let sum = 0;
        firstArray.forEach((nr) => {
            if (secondGroupMap.has(nr)) {
                sum += nr * (secondGroupMap.get(nr) as number);
            }
        });

        console.log(sum);
    }

    //part1();
    part2();
}