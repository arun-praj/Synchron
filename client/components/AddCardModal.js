import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'

const AddCardModal = ({ show, handleClose }) => {
   return (
      <div>
         <Modal show={show} size='lg' onHide={() => handleClose(false)}>
            <Modal.Header closeButton>
               <Modal.Title>Add Standup Card</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form.Group className='mb-3'>
                  <Form.Label>Disabled select menu</Form.Label>
                  <Form.Select>
                     <option>Disabled select</option>
                  </Form.Select>
               </Form.Group>
            </Modal.Body>
         </Modal>
      </div>
   )
}

export default AddCardModal
