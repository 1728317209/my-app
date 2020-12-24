import React from 'react';

export default class Table extends React.Component {
  render(): JSX.Element {
    return (
      <table>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    );
  }
}

class Columns extends React.Component {
  render(): JSX.Element {
    return (
      // 这里用 div 会报错：<td> cannot appear as a child of <div>.
      <React.Fragment>
        <td>1</td>
        <td>2</td>
      </React.Fragment>
    );
  }
}
