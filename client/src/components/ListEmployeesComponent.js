import React from 'react';
import {Table, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
// import Pagination from "../components/Pagination";
import Modal from './DeleteCautionModal';
import { withRouter } from "react-router-dom";

class ListEmployeesComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            id:''
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {

        this.setState({
            modal: !this.state.modal,
        });
    }
	editEmployee=(id)=>{
		console.log("editEmployee", id);
	    this.props.history.push(`/edit/${id}`);
	}
    
    render() {
        // const url = 'http://localhost:5000/'
        const lists = this.props.list.map((e, i) => {
            // console.log(e);
             return (
                 <tr key={i}>
                     <td>{i+1}</td>
                     <td>{e.employee_name}</td>
                     <td>{e.job}</td>
                     <td>{e.salary}</td>
                     <td className="align-content-center">
                     			
                        <Button variant="success" size='sm' onClick={() => this.editEmployee(e.id)} ><FontAwesome name='edit' /></Button>{'  '}
                        <Button variant="danger" size='sm' key={e.id} onClick={() => this.setState({ id: e.id }, this.toggle)} ><FontAwesome name='trash' /></Button> 
                    </td>
                 </tr>
             )
         })
        return (
            <div>
                <Modal
                    modal={this.state.modal}
                    toggle={this.toggle}
                    id={this.state.id}
                    onRecordDelete={this.props.onRecordDelete}
                />
                <Table hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { lists }
                    </tbody>
                </Table>
            </div>
        );
    }
}
        
//export default ListEmployeesComponent
export default withRouter(ListEmployeesComponent);
