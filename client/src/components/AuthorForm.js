import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useMutation} from '@apollo/client'
import {getAuthors} from '../graphql-client/queries';
import { addSingleAuthor } from '../graphql-client/mulations';

const AuthorForm = () => {

    const [newAuthor, setNewAuthor] = useState({
        name:'',
        age:''
    })

    const {name, age} = newAuthor;
    
    const onInputChange = (e) => {
        setNewAuthor({
            ...newAuthor,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addAuthor({
            variables:{
                name,
                age:parseInt(age)
            },
            refetchQueries:[{query:getAuthors}]
        })
        setNewAuthor({name:'',genre:'',authorId:''})
    }

    const [addAuthor, dataMutation] = useMutation(addSingleAuthor)

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Control type="text" placeholder="Author name" name="name" value={name} onChange={onInputChange} />
            </Form.Group>
            <Form.Group>
                <Form.Control type="number" placeholder="Age" name="age" value={age} onChange={onInputChange} />
            </Form.Group>
            <Button className="float-right" variant="info" type="submit" >
                Add author
            </Button>
        </Form>
    )
}

export default AuthorForm
