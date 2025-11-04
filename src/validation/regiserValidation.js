import { FaMessage } from 'react-icons/fa6'
import { z} from 'zod'

let registerChema=z.object({
    firstName : z.string().min(1,{message : 'First Name is Required'}),
    lastName : z.string().min(1,{message : 'Last Name is Required'}),
    number : z.string().min(1,{message : 'Phone Number is Required'}).regex(/^01[0-25][0-9]{8}/,{message:'Invalid Phone Number'}) ,
    email: z.string().min(1,{message : 'Email is Required'}).email({message:'Invalid E-mail'}),
    password: z.string().min(1,{message : 'Password is Required'}).min(6,{message:'U must Enter 6 charachters At least'})
    .regex(/[A-Z]/,{message :'Your Password Must Include At Least One Capital Carachter'})
    .regex(/[.';"-+=_!@#$%^&*()?|]/,{message :'Your Password Must have At Least One Uniqe Carachter'}),
    confirmPass:z.string().min(1,{message : 'PLZ Confirm Your Password'})
}).refine(same => same.password==same.confirmPass , {message: 'Password Are Not Matching' , path : ['confirmPass']})

export default registerChema