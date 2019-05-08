import React from  "react";
import Select2 from "./Select2"
import table from 'table';
const Pillar2=() =>{
    return(

        <div className="row">
            <div className="col s6">
                <div className="card green lighten-1">
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
                                    <td>Quality of deliverables</td>
                                    <td>scccooore</td>
                                    <td>25</td>
                                </tr>
                            </tbody>


                        </table>

                    </div>
                    <Select2/>

                </div>

            </div>


        </div>



    )
}


export default Pillar2;