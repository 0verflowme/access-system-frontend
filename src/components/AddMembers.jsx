import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import api from '../api'
import { useState, useEffect } from 'react';
import Addmodal from './Addmodal';
import Loader from './Loader';
function AddMembers() {
   const [members, setmembers] = useState([]);
   const [loader, setloader] = useState(true);

   useEffect(() => {
      const getmembers = async () => {
         const resp = await api.get('/addMember', {
            headers: { "Authorization": localStorage.getItem('Authorization') }
         });
         setmembers(resp.data.users);
         setloader(false);
      }
      getmembers();
   }, []);



   return (
      <div className='container mt-5 d-flex flex-wrap '>
         <Addmodal />
         {
            loader && <Loader />
         }
         {
            members.map((member) => {
               return (
                  <Card key={member._id} className='mb-3 me-3 ms-3' style={{ width: '18rem' }}>
                     <Card.Body>
                        <Card.Title>{member.user}</Card.Title>
                        <Card.Text>
                           Email: {member.email}
                        </Card.Text>
                        <Card.Text>
                           Admin: {member.isAdmin.toString()}
                        </Card.Text>
                        <Button variant="danger">Go somewhere</Button>
                     </Card.Body>
                  </Card>
               );
            })
         }
      </div>
   );
}

export default AddMembers;