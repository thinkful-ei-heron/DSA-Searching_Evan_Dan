import React from 'react';

export default function BinarySearch(props) {
  let count = 0;
  let result;
  const search = (toFind, dataset, start = 0, end = dataset.length - 1) => {
    count++;
    let result = null;
    console.log(toFind);
    let middle = Math.floor((start + end) / 2);
    console.log(dataset[middle]);
    if (dataset[middle] == toFind) return dataset[middle];
    if (start > end) return 'Item not found';

    if (toFind > dataset[middle]) return search(toFind, dataset, middle + 1, end);
    return search(toFind, dataset, start, middle - 1);
  };

  return (
    <>
      <h2>Binary Search: </h2>
      <p>
        Found {search(props.input, props.dataset.sort())} in {count} steps
      </p>
    </>
  );
}
