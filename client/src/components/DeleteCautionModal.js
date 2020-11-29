import React from 'react';
import axios from 'axios';
import { Button, 
    Modal, 
 } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";

class DeleteCautionModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
        this.delete = this.delete.bind(this)
    }

    delete(){
        console.log(this.props.id);
        const data = {id: this.props.id}
        console.log(data);
        // let history = useHistory();
        // axios.delete('http://localhost:5000/mhs/delete', 
        //         {data: {id: this.props.id},
        //         headers: {
        //             Authorization: 'authorizationToken'
        //           },
        //     })
            axios({
                url: '/ems/delete',
                method:'delete',
                data : {id: this.props.id},
              })
           .then((result) => {
            //    const data = result.data.data
               console.log(result)
               this.props.toggle()
               this.props.onRecordDelete(this.props.id);
        })
        
    }
    render() {
        // console.log(this.props.id)
        return (
            <div>
                <Modal show={this.props.modal} 
                    onHide={this.props.toggle} 
                    className={this.props.className}  
                    backdrop="static"
                    keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure to delete it? {this.props.id}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.delete}>Delete Me!</Button>{' '}
                        <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default DeleteCautionModal;