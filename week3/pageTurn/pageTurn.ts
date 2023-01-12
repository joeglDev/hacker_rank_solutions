/*
 * Complete the 'pageCount' function below.
 * Given n = book length in pages and p page to find, find and print the minimum number of pages that must be turned in order to arrive at page .
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

/**
 * Function calculates the minimum number of page turns required to reavh a given page p of a book of pages n.
 *
 * @param {number} n - Length of the book in pages.
 * @param {number} p - Page number of the page to reach.
 * @returns {number} pagesToTurn - Number of page turns required to reach page p.
 */
export function pageCount(n: number, p: number): number {
  //variables
  let pagesToTurn = 0;
  const midpointOfBook = n / 2;

  //page p is 1st or last page of the book.
  if (p === 1 || p === n) {
  } else if (p === n - 1 && n % 2 === 0) {
    //page p is page before the last page of the book and last page is even.
    pagesToTurn += 1;
  } else if (midpointOfBook >= p) {
    //page p is in the 1st half of the book.
    let currentPage = 1;
    while (currentPage < p) {
      currentPage += 2;
      pagesToTurn += 1;
    }
  } else {
    //page p is in the latter half of the book.
    let currentPage = n - 1;
    while (currentPage > p) {
      currentPage -= 2;
      pagesToTurn += 1;
    }
  }

  return pagesToTurn;
}
