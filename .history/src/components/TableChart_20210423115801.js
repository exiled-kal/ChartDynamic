import React, {useEffect, useState} from 'react';

function TableChart({data}) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table cellPadding={0} cellSpacing={8}>
      <thead>
        <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
      </thead>
      <tbody>
        {data.map(row => )}
      </tbody>
    </table>
  );
}

export default TableChart;
