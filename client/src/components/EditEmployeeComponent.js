import React from 'react'
import axios from 'axios'
import {
    Container,
    Col,
    Row,
} from 'react-bootstrap';
import EmployeeForm from './EmployeeFormComponent'

class EditEmployeeComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            employee_name:'',
            job:'',
            salary:'',
            id: this.props.match.params.id,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.InputChangeHandler = this.InputChangeHandler.bind(this)
    }
    componentDidMount(){
        console.log("from componentDidMount");
        axios.get(`/ems/id/${this.state.id}`)
        .then((result) => {
            const data = result.data.data
            this.setState({
                //data:data
                employee_name: data.employee_name,
                job: data.job,
                salary: data.salary,
            })
        })
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
        // const id = this.state.id
        const data = this.state
        // delete data.id
        console.log(data)
        axios.put('/ems/edit', data)
            .then((result) => {
                    console.log(result)
                    this.setState({ redirect: true })
                    //window.location.href = '/';
					this.props.history.push('/');
                })
    }
        
    render() {
        // console.log(this.state)
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <h4>Edit Employee</h4>
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
        )
    }
}

export default EditEmployeeComponent