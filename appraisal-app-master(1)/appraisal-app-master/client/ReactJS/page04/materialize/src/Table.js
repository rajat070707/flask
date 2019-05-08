import React from  "react";
import table from 'table';

const Table =() =>{
    return(

      <table>
      <thead>
        <tr>
            <th>Project</th>
            <th>Score for the project</th>
            <th>Name</th>
            <th>EmailID</th>
        </tr>
      </thead>

      <tbody>
          <tr>
              <td>abc</td>
              <td>score</td>
              <td>rajat</td>
              <td>rajat.kumargupt@nineleaps</td>
          </tr>
      </tbody>
      </table>
    )
}


export default Table;