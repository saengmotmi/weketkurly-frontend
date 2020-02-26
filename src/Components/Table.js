import React, { Component } from 'react';
import TableBody from './TableBody';

export default class Table extends Component {
    render() {
        return (
            <div className = "form">
                <table className = "table-header">
                    <tbody>
                        <tr>
                            <th className = "number">번호</th>
                            <th className = "title">제목</th>
                            <th className = "userName">작성자</th>
                            <th className = "date">작성일</th>
                            <th className = "help">도움</th>
                            <th className = "watch">조회</th>
                        </tr>
                    </tbody>
                </table>
                <TableBody />
                <TableBody />
                <TableBody />
                <TableBody />
                <TableBody />
                <TableBody />
                <TableBody />
            </div>
        )
    }
}