import {useState,useEffect} from 'react'
import useAuth from '../../hooks/useAuth'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import NavBar from '../../components/NavBar'


import React from 'react'
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';




function TeamsPage(){
    
    const [teams,setTeams]=useState([])
    const [name,setName]=useState([])

   const me = useAuth()
   const user=me&&me['username']
  
// const test=

   console.log(user)
   http://127.0.0.1:8000/dj/api/teams/
   useEffect(() => {
    fetch("http://127.0.0.1:4000/dj/api/teams",{ method: 'GET', credentials: 'include' })
    
    .then(response => response.json())
   
    
    .then(data => {
        // console.log("asdf",data);
        setTeams(data)
    })

  },[])
  
   
  console.log("teams are",teams)
  const teamCards = teams?.map(team=>{
    return (
    <Card style={{ width: '18rem' }} className="block-example border border-dark w-5 bg-warning mx-auto bg-warning">
    <Card.Img variant="top" src="https://avatars.dicebear.com/api/bottts/${team.teamName}.svg" />
    <Card.Body>
      <Card.Title>{team.teamName} </Card.Title>
      <Card.Text class="small">
        Created at: {team.created_at}
      </Card.Text>
    </Card.Body>
    <table>
    <tbody>
        <tr>
            <th>UserName</th>
            <th>UserID</th>
            <th>Role</th>
        </tr>
        
        {team.users.map(option=><tr><td>{option.username}</td><td>{option.user_id}</td><td>{option.role=='sm'?"Scrum master":"Developer"}</td></tr>)}
     
        </tbody>
    </table>
    {/* <ListGroup className="list-group-flush">{team.users.map(option=><ListGroupItem><ListGroupItem>{option.username}</ListGroupItem></ListGroupItem>)} */}
      {/* <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
    {/* </ListGroup> */}
    {/* <Card.Body>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body> */}
    </Card>
    )
})

    // useEffect(()=>{
    //     console.log("The object me is:",me)
    //     // // console.log(me['roles'])
    //     // console.log("Team members are:",me['teams'][0]['users'])
    //     // document.write("Team members are:",me['teams'][1]['users'])


    //     // console.log(me['username'])
    //     // if(me['teams'][1]['users']=='sm1'){
    //     //     document.writeln('Scrum Master')
    //     // }
    //     // else{
    //     //     document.write("Developer")
    //     // }
    

    // })
    return (
        <>
        <NavBar />
        <div class="d-flex flex-column flex-md-row " >

        {teamCards}
        </div>
        </>
    )

    
}

export default TeamsPage