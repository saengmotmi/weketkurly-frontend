import React, { Component } from "react";

export default class TableBody extends Component {
  render() {
    return (
      <table className="table-body">
        <tbody>
          <tr>
            <td className="number">공지</td>
            <td className="title">
              <div className="padding">금주의 Best 후기 안내</div>
            </td>
            <td className="userName">Marketkurly</td>
            <td className="date">2019-11-01</td>
            <td className="help">
              <span>0</span>
            </td>
            <td className="watch">
              <span>64138</span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
