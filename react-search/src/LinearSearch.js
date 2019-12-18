import React from 'react';

export default function LinearSearch(props) {
  let count = 0;
  let result;
  const search = (toFind, dataset) => {
    for (let i = 0; i < dataset.length; i++) {
      count++;
      if (dataset[i] == toFind) {
        result = dataset[i];
        break;
      } else result = 'Item not found';
    }

    return result;
  };

  return (
    <>
      <h2>Linear Search: </h2>
      <p>
        Found {search(props.input, props.dataset)} in {count} steps
      </p>
    </>
  );
}
