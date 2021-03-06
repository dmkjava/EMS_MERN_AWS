import React from 'react'
import {
    Row,
    Col,
    Button,
    Form,
    FormGroup,
} from 'react-bootstrap';
class EmployeeFormComponent extends React.Component{
    render(){
        return(
            <Form onSubmit={this.props.handleSubmit}>
                <FormGroup as={Row}>
                    <Col sm={1}>
                        <Form.Label htmlFor="name" sm={2}>Name</Form.Label>
                    </Col>
                    <Col sm={10}>
                        <Form.Control
                            name="employee_name"
                            type="text"
                            placeholder="Name"
                            value={this.props.Name}
                            onChange={this.props.InputChangeHandler}
							style={{borderWidth: "2px", borderStyle: "solid", borderColor:"#78adc8", borderRadius: "10px", height: "40px"}}


                        />
                    </Col>
                </FormGroup>
                <FormGroup as={Row}>
                    <Col sm={1}>
                        <Form.Label htmlFor="job" >Job</Form.Label>
                    </Col>
                    
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            name="job"
                            placeholder="Job"
                            value={this.props.Job}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup as={Row}>
                    <Col sm={1}>
                        <Form.Label htmlFor="salary" sm={2}>Salary</Form.Label>
                    </Col>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            name="salary"
                            placeholder="Salary"
                            value={this.props.Salary}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>

                <FormGroup as={Row}>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button type="submit">Submit</Button>
                    </Col>
                </FormGroup>
            </Form>  
        )
        
    }
}

export default EmployeeFormComponent