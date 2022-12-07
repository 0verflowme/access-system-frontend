import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import api from "../api";
import { useNavigate } from 'react-router-dom';

function Login() {
   const [email, setemail] = useState('');
   const [password, setpassword] = useState('');

   const navigate = useNavigate();

   async function handleSubmit(e) {
      e.preventDefault();
      // const resp = await api.get("/");
      const resp = await api.post("/login", {
         email: email,
         password: password
      }, {
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
         }
      })
      const token = resp.data.token;
      const isAdmin = resp.data.isAdmin;
      localStorage.setItem("isAdmin", isAdmin);
      localStorage.setItem("Authorization", "Bearer " + token);
      navigate("/");
   }


   return (
      <Form className='container mt-3'>
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
         <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
         </Button>
      </Form>
   );
}

export default Login;