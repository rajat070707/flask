import React from  "react";
import Select3 from "./Select3"
import table from 'table';
const Pillar3=() =>{
    return(

        <div className="row">
            <div className="col s6">
                <div className="card blue lighten-1">
                    <div className="card-content white-text">
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
                                    <td>Problem Solving</td>
                                    <td>scccooore</td>
                                    <td>25</td>
                                </tr>
                            </tbody>


                        </table>

                    </div>
                    <Select3/>

                </div>

            </div>


        </div>



    )
}


export default Pillar3;