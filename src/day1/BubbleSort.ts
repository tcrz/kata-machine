export default function bubble_sort(arr: number[]): void {
    let i = arr.length - 1;
    while (i > 0) {
        let swapped = false
        console.log("arr to work with", arr.slice(0, i));
        for (let j = 0; j < i; j++) {
            const next = arr[j + 1];
            const temp = arr[j];
            if (temp > next) {
                arr[j] = next;
                arr[j + 1] = temp;
                swapped = true
            }
        }
        if(!swapped) {
            break
        }
        // console.log(i, " round of movement: ", arr);
        i--;
    }

    console.log(arr);
    // return arr
}

bubble_sort([3, 7, 2, 1, 5, 9, 4]);
bubble_sort([3, 1, 2]);
