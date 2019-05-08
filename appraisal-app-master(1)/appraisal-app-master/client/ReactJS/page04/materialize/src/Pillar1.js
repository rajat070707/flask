import React from  "react";
import Selects from "./Select"
import table from 'table';
const Pillar1=() =>{
    return(

        <div className="row">
            <div className="col s6">
                <div className="card indigo lighten-1">
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
                                    <td>Efforts,ontimedelivery and meetups</td>
                                    <td>scccooore</td>
                                    <td>25</td>
                                </tr>
                            </tbody>


                        </table>

                    </div>
                    <Selects/>

                </div>

            </div>


        </div>



    )
}


export default Pillar1;