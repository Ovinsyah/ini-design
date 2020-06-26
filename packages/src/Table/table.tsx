import React from 'react';

interface DefaultModel{
  headerTable: string[];
  formatTable: any[];
  dataTable: any[];
}

export default (props: DefaultModel) => {
  const { formatTable, headerTable, dataTable } = props;
  return (
    <table className="ini-table bordered">
      <thead>
        <tr>{headerTable.map((item, key) => <th key={key}>{item}</th>)}</tr>
      </thead>
      <tbody>
        {
          dataTable?.map((list, key) => {
            return(
              <tr key={key}>
                {formatTable.map((item, keyItem) => <td key={keyItem}> {item.item(list)}</td>)}
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};
