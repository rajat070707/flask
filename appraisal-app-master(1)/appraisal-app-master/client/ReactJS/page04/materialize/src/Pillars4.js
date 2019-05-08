import React from  "react";
import Select4 from "./Select4"
import table from 'table';
const Pillar4=() =>{
    return(

        <div className="row">
            <div className="col s6">
                <div className="card yellow lighten-1">
                    <div className="card-content black-text">
                        <table>
                            <thead>
                                <tr>
                                    <th>Pillar</th>
                                    <th>Score</th>
                                    <th>Max</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ways of Working</td>
                                    <td>scccooore</td>
                                    <td>25</td>
                                </tr>
                            </tbody>


                        </table>

                    </div>
                    <Select4/>

                </div>

            </div>


        </div>



    )
}


export default Pillar4;