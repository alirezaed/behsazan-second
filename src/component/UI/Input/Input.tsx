import React from 'react';
import {Form} from 'react-bootstrap';

interface InputProps{
    lable:string;
    register:any;
    name:string;
    type?:string;
}

export default function Input({lable,type,name,register}:InputProps){
    return <Form.Group>
        <Form.Label>{lable}</Form.Label>
        <Form.Control {...register(name)} name={name} id={name} type={type || 'text'} ></Form.Control>
    </Form.Group>
}