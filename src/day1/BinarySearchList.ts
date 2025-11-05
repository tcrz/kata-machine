export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length - 1;

    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        console.log("low point =>", low);
        console.log("mid point =>", mid);
        console.log("high =>", high);
        const value = haystack[mid];
        if (value == needle) {
            return true;
        }
        if (value > needle) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return false;
}

const l = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
console.log(bs_list(l, 69420));
