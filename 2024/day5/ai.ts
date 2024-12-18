function parseRules(rules: string[]): Map<number, Set<number>> {
    const orderMap = new Map<number, Set<number>>();
    rules.forEach(rule => {
        const [x, y] = rule.split('|').map(Number);
        if (!orderMap.has(y)) {
            orderMap.set(y, new Set<number>());
        }
        orderMap.get(y)!.add(x);
    });
    return orderMap;
}

function isCorrectOrder(update: number[], orderMap: Map<number, Set<number>>): boolean {
    const pageIndices = new Map<number, number>();
    update.forEach((page, index) => pageIndices.set(page, index));

    for (const [y, xSet] of orderMap.entries()) {
        if (pageIndices.has(y)) {
            for (const x of xSet) {
                if (pageIndices.has(x) && pageIndices.get(x)! > pageIndices.get(y)!) {
                    return false;
                }
            }
        }
    }
    return true;
}

function findMiddlePage(update: number[]): number {
    const middleIndex = Math.floor(update.length / 2);
    return update[middleIndex];
}

function main() {
    const rules = [
        "47|53", "97|13", "97|61", "97|47", "75|29", "61|13",
        "75|53", "29|13", "97|29", "53|29", "61|53", "97|53",
        "61|29", "47|13", "75|47", "97|75", "47|61", "75|61",
        "47|29", "75|13", "53|13"
    ];

    const updates = [
        [75, 47, 61, 53, 29],
        [97, 61, 53, 29, 13],
        [75, 29, 13],
        [75, 97, 47, 61, 53],
        [61, 13, 29],
        [97, 13, 75, 29, 47]
    ];

    const orderMap = parseRules(rules);
    let totalMiddlePageSum = 0;

    updates.forEach(update => {
        if (isCorrectOrder(update, orderMap)) {
            const middlePage = findMiddlePage(update);
            totalMiddlePageSum += middlePage;
            console.log(`Correct order: ${update}, Middle page: ${middlePage}`);
        } else {
            console.log(`Incorrect order: ${update}`);
        }
    });

    console.log(`Total sum of middle pages: ${totalMiddlePageSum}`);
}

main();
