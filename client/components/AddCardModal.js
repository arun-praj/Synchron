import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import useAuth from '../hooks/useAuth'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'

const AddCardModal = ({ show, handleClose }) => {
   const me = useAuth()
   const [selectedOption, setSelectedOption] = useState()
   const [inTeam, setInTeam] = useState(true)
   if (!me) {
      return <Spinner />
   }
   return (
      <div>
         <Modal show={show} size='lg' onHide={() => handleClose(false)}>
            <Modal.Header closeButton>
               <Modal.Title>Add Standup Card</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form.Group className='mb-3'>
                  <Form.Label>Select Team member</Form.Label>
                  <Form.Select onChange={() => setSelectedOption}>
                     <option selected> --- </option>
                     {me.teams.length > 0 ? (
                        me?.teams[0].users.map((user) => {
                           return <option value={user.id}>{user.username}</option>
                        })
                     ) : (
                        <option selected disabled>
                           You are not in any team. Please join team first.
                        </option>
                     )}
                  </Form.Select>
               </Form.Group>
            </Modal.Body>
         </Modal>
      </div>
   )
}

export default AddCardModal
