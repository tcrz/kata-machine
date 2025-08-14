export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length - 1;

    while (low <= high) {
        // console.log("before",{low, high})
        const mid = Math.floor(low + (high - low) / 2);
        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] > needle) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
        // console.log("after",{low, high})
    }
    return false;
}

// const l = [1, 2, 3, 4, 5];
// console.log(bs_list(l, 0));
