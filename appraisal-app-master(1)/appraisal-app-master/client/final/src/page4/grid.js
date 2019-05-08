import React, { Component } from 'react';
import "./grid.css";
import Select from "react-select";
import axios from "axios"

import {BrowserRouter as Router,Link} from 'react-router-dom';


const QualityOfDeliverables = [
    
    { label: "More often than not the deliverables do not meet the quality standards laid out by the team.", value: "a" },
    { label: "The deliverables mostly have quality issues, but the individual takes ownership and fixes (iterates) and solves (resolves) the quality issues being reported.", value: "b" },
    { label: "The deliverables are of acceptable quality most of the time. Is conscious of the quality parameters set and agreed. Adheres to the standards.", value: "c" },
    { label: "A strive towards high quality standards, with mixed successes.", value: "d"},
    { label: "Consistently demostrates and strives for higher quality standards, is able to deliver to those quality standards.", value: "e" },
    { label: "Ownership of Quality pushes everyone on the team towards (fostering a quality culture) striving for higher quality standards ", value: "f" },
  ];


const ProblemSolving=[

    { label: "Waits for help.",value:"a"},
    { label: "Seeks inputs/directions.",value:"b"},
    { label: "Proactively seeks inputs/directions. Puts options on the table and collaborates towards building the solution.",value:"c"},
    { label: "Takes charge and creates solution.",value:"d"},
    { label: "Effectively presents the solution through visual aids, data and documentation.",value:"e"},
    { label: "Shares and builds consensus for the solution.",value:"f"}
];
const WaysOfWorking=[

    { label: "Lacks appreciation of the process and is unable to comply with the process as agreed by the team.",value:"a"},
    { label: "Attends rituals but lacks active participation.",value:"b"},
    { label: "Actively participates in all interactions through communication, bringing clarity by providing inputs.",value:"c"},
    { label: "Fosters participation of others through encouragement, listening to others, providing clarity, asking the right questions and enablement.",value:"d"},
    { label: "Reflects on process, suggests improvements and brings about change by working with the team and key stakeholders.",value:"e"},
    { label: "Builds and commands trust in communication and process with all project stakeholders, including team.",value:"f"}
]

const Pillar1Dropdown1=[

    { label: "Deliverables are completed always.",value:"a"},
    { label: "Deliverables are completed often.",value:"b"},
    { label: "Deliverables are completed sometimes.",value:"c"},
    { label: "Deliverables are not completed and someone else has to pitch in.",value:"d"},
  
]

const Pillar1Dropdown2=[

    { label: "Works Independently requiring minimal support or help.",value:"a"},
    { label: "Needs help sometimes.",value:"b"},
    { label: "Needs constant supervision and help.",value:"c"},
   
  
]

const Pillar1Dropdown3=[

    { label: "Estimations are Mostly Right.",value:"a"},
    { label: "Tends to Over-estimate or under-estimate the efforts required.",value:"b"},
    { label: "Does not provide estimates.",value:"c"},
   
  
]

const Pillar1Dropdown4=[

    { label: "Deliverables are Mostly On Time.",value:"a"},
    { label: "Deliverables are Sometimes On Time.",value:"b"},
    { label: "Deliverables are Rarely On Time.",value:"c"},
   
  
]


const Pillar1Dropdown5=[

    { label: "Serious Effort.",value:"a"},
    { label: "Moderate Effort.",value:"b"},
    { label: "Lack of Effort.",value:"c"},
   
  
]



const Pillar1Dropdown6=[

    { label: "Deliverables were in a KNOWN area.",value:"a"},
    { label: "Deliverables were in an UNKNOWN area.",value:"b"},
  
   
  
]




class SecondGrid extends Component{
    constructor(props){
        super(props);
            this.state={
            QualityOfDeliverables:"",
            ProblemSolving:"",
            WaysOfWorking:"",
            Pillar1Dropdown1:"",
            Pillar1Dropdown2:"",
            Pillar1Dropdown3:"",
            Pillar1Dropdown4:"",
            Pillar1Dropdown5:"",
            Pillar1Dropdown6:"",

            }
            this.fnPost = this.fnPost.bind(this);

            this.fnChangeData = this.fnChangeData.bind(this);
        }

            fnChangeData(event){
                console.log(event);
                this.setState({
                    [event.name]:event.value
                })
            }

        fnPost(event){
             event.preventDefault()
            console.log(this.state);
            const data={
                QualityOfDeliverables : this.state.QualityOfDeliverables.value,
                ProblemSolving : this.state.ProblemSolving.value,
                WaysOfWorking : this.state.WaysOfWorking.value,
                Pillar1Dropdown1 : this.state.Pillar1Dropdown1.value,
                Pillar1Dropdown2 : this.state.Pillar1Dropdown2.value,
                Pillar1Dropdown3 : this.state.Pillar1Dropdown3.value,
                Pillar1Dropdown4 : this.state.Pillar1Dropdown4.value,
                Pillar1Dropdown5 : this.state.Pillar1Dropdown5.value,
                Pillar1Dropdown6 : this.state.Pillar1Dropdown6.value
             }
                        

    axios.post("http://192.168.43.18:8080/proj?tokenId="+window.localStorage.getItem("tokenid"),data)
        .then(response =>{
        console.log(response);
                 window.location.href="http://localhost:3000/ProjectPage1";
        window.localStorage.setItem("ProjectPageresult",response.data);
        this.setState({
        loading:false,
        message:response.data,
        
        })
        
        })
        
 }
render(){
    return(<>
    <body>
      <div class="row">
            <div class="col-lg-3">
        

                <table class=" table table-border">
                    <thead>
                        <tr>
                            <th scope="col">Pillar</th>
                            <th scope="col">Score</th>
                            <th scope="col">Max</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td>Effort, On Time Delivery and Meeting Deliverables.</td>
                                <td>25</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td colSpan="3"><i>Select the statement that best describes the individuals performance most of the time.</i></td>
                            </tr>
                    </tbody>
                </table>
            </div>



            <div class="col-lg-3">
                
                <table class=" table table-border">
                    <thead>
                        <tr>
                            <th scope="col">Pillar</th>
                            <th scope="col">Score</th>
                            <th scope="col">Max</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td>Quality of Deliverables.</td>
                                <td>15</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td className="q" colSpan="3">
                                    <Select options={ QualityOfDeliverables }
                                    name="QualityOfDeliverables" value={this.state.QualityOfDeliverables}
                                    onChange={(val)=>{this.fnChangeData({name:'QualityOfDeliverables', value: val})}} />                                </td>
                           </tr>
                    </tbody>
                </table>
            </div>




            <div class="col-lg-3">
                
                <table class=" table table-border">
                    <thead>
                        <tr>
                            <th scope="col">Pillar</th>
                            <th scope="col">Score</th>
                            <th scope="col">Max</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td>Problem Solving.</td>
                                <td>30</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td className='q' colSpan="3">   
<Select options={ ProblemSolving }
 name="ProblemSolving" value={this.state.ProblemSolving}
 onChange={(val)=>{this.fnChangeData({name:'ProblemSolving', value: val})}} />                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>



            <div class="col-lg-3">
                
                <table class=" table table-border">
                    <thead>
                        <tr>
                            <th scope="col">Pillar</th>
                            <th scope="col">Score</th>
                            <th scope="col">Max</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td>Ways of Working.</td>
                                <td>30</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td className='q' colSpan="3">   
                                    <Select options={ WaysOfWorking }
                                    name="WaysOfWorking" value={this.state.WaysOfWorking}
                                    onChange={(val)=>{this.fnChangeData({name:'WaysOfWorking', value: val})}} />                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>

        </div>



        <div class="row">
            <div class="col-lg-3">
                <table class=" table table-border">
                    <thead>
                        <tr>
                            <th colSpan="3">Statement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="q" colSpan="2">
<Select options={ Pillar1Dropdown1 } 
 name="Pillar1Dropdown1" value={this.state.Pillar1Dropdown1}
 onChange={(val)=>{this.fnChangeData({name:'Pillar1Dropdown1', value:val})}} />                            </td>
                        </tr>
           
                        <tr>
                            <td className='q' colSpan="2">
<Select options={ Pillar1Dropdown2 } 
 name="Pillar1Dropdown2" value={this.state.Pillar1Dropdown2}
 onChange={(val)=>{this.fnChangeData({name:'Pillar1Dropdown2', value:val})}} />                            </td>
                        </tr>

           
                        <tr>
                            <td className="q" colSpan="2">
<Select options={ Pillar1Dropdown3 } 
 name="Pillar1Dropdown3" value={this.state.Pillar1Dropdown3}
 onChange={(val)=>{this.fnChangeData({name:'Pillar1Dropdown3', value:val})}} />                            </td>
                        </tr>

            
                        <tr>
                            <td className="q" colSpan="2">
<Select options={ Pillar1Dropdown4 } 
 name="Pillar1Dropdown4" value={this.state.Pillar1Dropdown4}
 onChange={(val)=>{this.fnChangeData({name:'Pillar1Dropdown4', value:val})}} />                            </td>
                        </tr>

                        
                        <tr>
                            <td className="q" colSpan="2">
<Select options={ Pillar1Dropdown5} 
 name="Pillar1Dropdown5" value={this.state.Pillar1Dropdown5}
 onChange={(val)=>{this.fnChangeData({name:'Pillar1Dropdown5', value:val})}} />                            </td>
                        </tr>
                    
            
                        <tr>
                            <td className="q" colSpan="2">
                            
<Select options={ Pillar1Dropdown6 } 
 name="Pillar1Dropdown6" value={this.state.Pillar1Dropdown6}
 onChange={(val)=>{this.fnChangeData({name:'Pillar1Dropdown6', value:val})}} />                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>



            <div class="col-lg-3">
                <table class=" table table-border">
                    <thead>
                        <tr>
                             <th colSpan="2">Statement</th>
                             <th scope="col">Score</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                            <td colSpan="2">More often than not the deliverables do not meet the quality standards laid out by the team.</td>
                            <td colSpan="1">0</td>
                            </tr>
                            <tr>
                            <td colSpan="2">The deliverables mostly have quality issues, but the individual takes ownership and fixes (iterates) and solves (resolves) the quality issues being reported.</td>
                            <td colSpan="1">8</td>
                            </tr>
                            <tr>
                            <td colSpan="2">The deliverables are of acceptable quality most of the time. Is conscious of the quality parameters set and agreed. Adheres to the standards.</td>
                            <td colSpan="1">15</td>
                            </tr>
                            <tr>
                            <td colSpan="2">A strive towards high quality standards, with mixed successes.</td>
                            <td colSpan="1">20</td>
                            </tr>
                            <tr>
                            <td colSpan="2">Consistently demostrates and strives for higher quality standards, is able to deliver to those quality standards.</td>
                            <td colSpan="1">25</td>
                            </tr>
                            <tr>
                            <td colSpan="2">Ownership of Quality pushes everyone on the team towards (fostering a quality culture) striving for higher quality standards </td>
                            <td colSpan="1">30</td>
                            </tr>
                     </tbody>
                </table>
            </div>


            <div class="col-lg-3">
                <table class=" table table-border">
                    <thead>
                      <tr>
                         <th colSpan="2">Statement</th>
                         <th scope="col">Score</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="2">Waits for help.</td>
                            <td colSpan="1">0</td>
                            </tr>
                            <tr>
                            <td colSpan="2">Seeks inputs/directions.</td>
                            <td colSpan="1">5</td>
                            </tr>
                            <tr>
                            <td colSpan="2">Proactively seeks inputs/directions. Puts options on the table and collaborates towards building the solution.</td>
                            <td colSpan="1">12</td>
                            </tr>
                            <tr>
                            <td colSpan="2">Takes charge and creates solution.</td>
                            <td colSpan="1">18</td>
                            </tr>
                            <tr>
                            <td colSpan="2">Effectively presents the solution through visual aids, data and documentation.</td>
                            <td colSpan="1">25</td>
                            </tr>
                            <tr>
                            <td colSpan="2">Shares and builds consensus for the solution. </td>
                            <td colSpan="1">30</td>
                            </tr>
                     </tbody>
                </table>
            </div>
            
            
            
            <div class="col-lg-3">
                 <table class=" table table-border">
                    <thead>
                         <tr>
                            <th colSpan="2">Statement</th>
                            <th scope="col">Score</th>
                         </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="2">Lacks appreciation of the process and is unable to comply with the process as agreed by the team.</td>
                            <td colSpan="1">0</td>
                            </tr>
                            <tr>
                            <td colSpan="2">Attends rituals but lacks active participation.</td>
                            <td colSpan="1">5</td>
                            </tr>
                            <tr>
                            <td colSpan="2">Actively participates in all interactions through communication, bringing clarity by providing inputs.</td>
                            <td colSpan="1">10</td>
                            </tr>
                            <tr>
                            <td colSpan="2">Fosters participation of others through encouragement, listening to others, providing clarity, asking the right questions and enablement.</td>
                            <td colSpan="1">17</td>
                            </tr>
                            <tr>
                            <td colSpan="2">Reflects on process, suggests improvements and brings about change by working with the team and key stakeholders.</td>
                            <td colSpan="1">25</td>
                            </tr>
                            <tr>
                            <td colSpan="2">Builds and commands trust in communication and process with all project stakeholders, including team. </td>
                            <td colSpan="1">30</td>
                            </tr>
                   </tbody>
                   
                </table>
            
            </div>
       
            <div class="col-lg-6">
       
                <Router><Link to='/page2'>
                    <button className="btngoto3 btn waves-effect waves-light" type="submit" onClick={this.fnPost} name="action">SUBMIT
                    </button></Link>
            </Router>
            </div>



        </div>
    </body>
            
       

      </>

);
    }
}
    

export default SecondGrid;
