import React from 'react';
import auth from '../hoc/auth';

const SecretList = props => (
  <div>
    <h2 className="center-align">Secret List</h2>
    <ol>
      <li>Heather</li>
      <li>Mike</li>
      <li>Tammy</li>
      <li>Bob</li>
      <li>Barbra</li>
      <li>Billy</li>
    </ol>
  </div>
)


export default auth(SecretList);
