export interface ValidationRule{
    required?:string;
    pattern?:{
        value:RegExp,
        message:string
    },
    maxLength?:{
        value:number,
        message:string
    }
}

export const username:ValidationRule = {
    required:'This field is required',
    maxLength:{
        value:16,
        message:'Maximum length is 16 characters'
    }
}

export const password:ValidationRule = {
    required:'This field is required',
    pattern:{
        value:/^[A-Za-z]\w{7,14}$/,
        message:'Your password should contain capital and numbers'
    }
}