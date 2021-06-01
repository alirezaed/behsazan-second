import React from 'react';
import {Form} from 'react-bootstrap';
import {ValidationRule} from '../../../common/validationRules';

interface InputProps{
    lable:string;
    register:any;
    name:string;
    type?:string;
    error?:{
        message:string
    };
    validationRule:ValidationRule;
}

export default function Input({
        lable,
        type,
        name,
        register,
        error,
        validationRule
    }:InputProps){
    return <Form.Group>
        <Form.Label>{lable}</Form.Label>
        <Form.Control 
            isInvalid={error && error.message} 
            {...register(name,{...validationRule})} 
            name={name} 
            id={name} 
            type={type || 'text'} />
        {error && error.message && <Form.Control.Feedback type="invalid" >{error.message}</Form.Control.Feedback>}
    </Form.Group>
}