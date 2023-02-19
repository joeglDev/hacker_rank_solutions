/**
 * Models the movement of two objects along a arbitary positive line in steps per turn.
 * Returns "YES" if two objects meet and "NO" if not.
 *
 * @param {number}  x1 - PLacement of object 1.
 * @param {number}  v1 - Velocity per turn of object 1.
 * @param {number}  x2 - Placement of object 2.
 * @param {number}  v2 - Velocity of object 2.
 * @returns {string} - Returns "YES" if two objects meet and "NO" if not.
 */
export function kangaroo(
  x1: number,
  v1: number,
  x2: number,
  v2: number
): string {
  if (x1 > x2 && v1 > v2) {
    return "NO";
  } else if (x1 > x2 && v2 > v1) {
    if ((x1 % v2) === 0) {
      return "YES";
    } else {
      return "NO";
    }
  } else if (x2 > x1 && v1 > v2) {
    if ((x2 % v1) === 0) {
        return "YES";
      } else {
        return "NO";
      }
  }
   else {
    return "NO";
  }

  //x2 > x1 && v1 > v2
  //x2 > x1 && v2 > v1
  return "";
}
