/**
 * You are in a building with n floors. You have 2 identical crystal balls.
 * A ball will break if it is dropped from floor number T or higher, and will not break from any floor below T.
 * Your goal is to find the exact floor T where the balls start breaking,
 * using the minimum number of drops in the worst case.
 * @param breaks - boolean array where breaks[i] indicates if a ball breaks when dropped from floor i
 * @returns the floor number where balls start breaking, or -1 if they never break
 */
export default function two_crystal_balls(breaks: boolean[]): number {
    const jump = Math.floor(Math.sqrt(breaks.length));
    let breakIndex = -1;
    for (let i = 0; i < breaks.length; i += jump) {
        console.log(i);
        if (breaks[i]) {
            breakIndex = i;
            break;
        }
    }
    const startIndex = breakIndex - jump;
    for (let i = startIndex; i < breakIndex; i++) {
        console.log(i);
        if (breaks[i]) {
            breakIndex = i;
            break;
        }
    }
    return breakIndex;
}

two_crystal_balls([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
]);
