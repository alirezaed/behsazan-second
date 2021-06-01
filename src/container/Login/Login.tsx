import React from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import Input from '../../component/UI/Input/Input';
import classes from './Login.module.css';
import {useForm} from 'react-hook-form';


export default function Login(){

    const { register,handleSubmit } = useForm();


    const submit=(data:any)=>{

        console.log(data);

    }
    return <Container>
        <Row className={classes.container}>
            <Col>
                <Form onSubmit={handleSubmit(submit)}>
                    <Input lable='Username' register={register} name='username' />
                    <Input lable='Password' register={register} name='password' type='password' />
                    <Button type='submit' variant="primary">Login</Button>
                </Form>
            </Col>
        </Row>
    </Container>
}