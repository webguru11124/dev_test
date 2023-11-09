function mergeSortedArrays(A, B) {
    let merged = [];
    let i = 0;
    let j = 0;

    while (i < A.length && j < B.length) {
        if (A[i] < B[j]) {
            merged.push(A[i]);
            i++;
        } else {
            merged.push(B[j]);
            j++;
        }
    }

    // If there are remaining elements in A or B, append them to the merged array
    while (i < A.length) {
        merged.push(A[i]);
        i++;
    }

    while (j < B.length) {
        merged.push(B[j]);
        j++;
    }

    return merged;
}

let A = [3, 5, 12];
let B = [8, 10, 16];

console.log(mergeSortedArrays(A, B));  // Output: [3, 5, 8, 10, 12, 16]