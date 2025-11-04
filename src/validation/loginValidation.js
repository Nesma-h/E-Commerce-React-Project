import { FaMessage } from 'react-icons/fa6'
import { z} from 'zod'

let loginChema=z.object({
    email: z.string().min(1,{message : 'Email is Required'}).email({message:'Invalid E-mail'}),
    password: z.string().min(1,{message : 'Password is Required'})
})

export default loginChema