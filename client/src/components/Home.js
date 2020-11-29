import React, { Component } from 'react';
import axios from 'axios';
import ListEmployeesComponent from './ListEmployeesComponent';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        axios.get('/ems/')
            .then((result) => {
                delete this.state.data;
                this.setState({
                    data: result.data.data
                });
            })
    }
    onRecordDelete=(id)=>{
        this.setState({data: this.state.data.filter(employee => employee.id !== id)});
    }
    render() {
        // console.log(this.state.data[0])
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <ListEmployeesComponent list={this.state.data}
                            onRecordDelete={this.onRecordDelete} 
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
