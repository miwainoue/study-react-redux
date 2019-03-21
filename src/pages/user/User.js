import React, { Component } from 'react';
import UserForm from './UserForm';

export default class User extends Component{
    render(){
        let list = [
            {
                name: 'miwa',
                email: 'miwa@miwa'
            },
            {
                name: 'miwa2',
                email: 'miwa2@miwa'
            }
        ]

        return(
            <div>
                <UserForm></UserForm>
                <table border="1px">
                    <tbody>
                        {list.map((item) => {
                            return <tr>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.email}
                                        </td>
                                    </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}