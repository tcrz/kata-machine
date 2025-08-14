/**
 * You are in a building with n floors. You have 2 identical crystal balls.
 * A ball will break if it is dropped from floor number T or higher, and will not break from any floor below T.
 * Your goal is to find the exact floor T where the balls start breaking,
 * using the minimum number of drops in the worst case.
 * @param breaks - boolean array where breaks[i] indicates if a ball breaks when dropped from floor i
 * @returns the floor number where balls start breaking, or -1 if they never break
 */
export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmount;

    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpAmount;

    for (; i < breaks.length; i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
