import express, {Request,Response} from 'express'
import {body,validationResult} from 'express-validator'
import { response } from 'express'

const router=express.Router()

router.post('api/users/signup',[
  body('email').isEmail().withMessage('Emailmust be valid'),
  body('password')
  .trim()
  .isLength({min:4,max:20})
  .withMessage('password must be between 4 to 20 characters')
],(req:Request,res:Response)=>{
  const errors=validationResult(req)
  
  if(!errors.isEmpty()){
    return res.status(400).send(errors.array())
  }
  
  const {email,password}=req.body
})

export {router as signupRouter}
