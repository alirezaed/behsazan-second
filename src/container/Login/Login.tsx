import React from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import Input from '../../component/UI/Input/Input';
import classes from './Login.module.css';
import {useForm} from 'react-hook-form';
import * as rules from '../../common/validationRules';
import useApi from '../../common/fetch';

export default function Login(){

    const { register,handleSubmit,formState: { errors } } = useForm();

    const { login } = useApi();

    const submit=(data:any)=>{

        login({
            password:data.password,
            username:data.username
        }).then(res=>console.log(res));

    }
    return <Container>
        <Row className={classes.container}>
            <Col>
                <Form onSubmit={handleSubmit(submit)}>
                    <Input 
                        validationRule={rules.username}
                        lable='Username' 
                        register={register} 
                        error={errors.username} 
                        name='username' />
                    <Input 
                        validationRule={rules.password}
                        lable='Password' 
                        register={register} 
                        name='password' 
                        error={errors.password} 
                        type='password' />
                    <Button type='submit' variant="primary">Login</Button>
                </Form>
            </Col>
        </Row>
    </Container>
}