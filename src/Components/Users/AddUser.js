import { useState,Fragment } from 'react';
import Button from '../UI/Button.js';
import Card from '../UI/Card.js';
import ErrorModal from '../UI/ErrorModal.js';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    
    const [usernameInput,setUsernameInput] = useState('');
    const [ageInput,setAgeInput] = useState('');
    const [error,setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(usernameInput.trim().length===0 || ageInput.trim().length===0){
            setError({
                title: 'Invalid Inputs',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if(+ageInput.trim()<1){
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (>0).'
            })
            return;
        }
        console.log(usernameInput , ageInput);
        const user = {id:props.listSize+1+'e',name:usernameInput.trim(),age:ageInput.trim()};
        props.onUserSubmission(user);
        setUsernameInput('');
        setAgeInput('');
    }

    const usernameChangeHandler = (event) => {
        setUsernameInput(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setAgeInput(event.target.value);
    }
    
    const errorHandler =  () => {
        setError(null);
    }

    return(
        <Fragment>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' value={usernameInput} onChange={usernameChangeHandler}></input>
            <label htmlFor='age'>Age</label>
            <input id='age' type='number' value={ageInput} onChange={ageChangeHandler}></input>
            <Button type='submit'>Add User</Button>
        </form>
        </Card>
        </Fragment>
    );
}

export default AddUser;
