import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';
import api from "../api"

function Addmodal() {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const [email, setemail] = useState('');
   const [password, setpassword] = useState('');
   const [isAdmin, setisAdmin] = useState(false);
   const [confirmpassword, setconfirmpassword] = useState('');
   const [user, setuser] = useState('');
   // const naviate = useNavigate();

   function handleisAdmin() {
      setisAdmin(!isAdmin);
   }

   const isCurrAdmin = JSON.parse(localStorage.isAdmin);

   async function handleSubmit(e) {
      e.preventDefault();
      const resp = await api.post("/addMember", {
         user: user,
         email: email,
         password: password,
         isAdmin: isAdmin
      }, {
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': localStorage.getItem('Authorization')
         }
      })
      handleClose();
   }

   return (
      <>
         <Button disabled={!isCurrAdmin} className='mb-3' align="end" variant="primary" onClick={handleShow}>
            Add Member
         </Button>

         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Add Details</Modal.Title>
            </Modal.Header>
            <Modal.Body className='container'>
               <Form className='container'>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Username</Form.Label>
                     <Form.Control type="text" placeholder="Your Username" value={user} onChange={(e) => setuser(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setemail(e.target.value)} />
                     <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                     </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                     <Form.Label>Confirm Password</Form.Label>
                     <Form.Control type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox" onChange={handleisAdmin}>
                     <Form.Check type="checkbox" label="Make Admin" />
                  </Form.Group>
                  {/* <Button variant="primary" type="submit" onClick={handleSubmit}>
                     Submit
                  </Button> */}
               </Form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={handleSubmit}>
                  Submit
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

export default Addmodal;