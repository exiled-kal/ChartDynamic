import React, {useEffect, useState} from 'react';

function TableChart({data}) {
  
  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}

export default TableChart;
