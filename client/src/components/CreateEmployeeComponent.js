import React from 'react'
import axios from 'axios'
import { 
    Container,
    Col, 
    Row,
} from 'react-bootstrap';
import EmployeeForm from './EmployeeFormComponent'
// import Redirect from 'react-router-dom'

class CreateEmployeeComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            employee_name: '',
            job: '',
            salary: '',
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.InputChangeHandler = this.InputChangeHandler.bind(this)
    }

    InputChangeHandler(event) {
        const value = event.target.value
        const name = event.target.name

        this.setState({
            [name]: value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const data = this.state
        delete data.redirect
        axios.post('http://localhost:5000/ems/add',data)
            .then((result) => {
                console.log(result)
                this.setState({redirect: true})
                //window.location.href = '/';
				this.props.history.push('/');
            })
    }

    render(){
        // if (this.state.redirect) {
        //     return (<Redirect to='/' />)
        // }
        return(
            <div>
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <h4>New Employee Details</h4>
                            <EmployeeForm
                                Name={this.state.employee_name}
                                Job={this.state.job}
                                Salary={this.state.salary}
                                InputChangeHandler={this.InputChangeHandler}
                                handleSubmit={this.handleSubmit}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CreateEmployeeComponent