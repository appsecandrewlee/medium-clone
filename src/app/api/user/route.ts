import {NextResponse} from "next/server";
import { db } from "../../../server/db";
import {hash} from 'bcrypt';
import * as z from "zod"

//this is tested to work for registering an endpoint using curl 
const Validator = z.object({
    email: z.string().min(1, "Email is required").email("Please enter a real email"),
    password: z.string().min(1, 'Require Password').min(10, "Password must have less than 10 characters"),
})

export async function POST(req: Request){
    try {
        const body= await req.json();

        const {email,password} =Validator.parse(body);

        const existingUserByEmail = await db.user.findUnique({
            where: {email: email}
        })

        if (existingUserByEmail){
            return NextResponse.json({user: null,message: "This user already exists"},{status: 409})
        }

        const hashedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data: { 
                email,
                password: hashedPassword
            }
        });

        const {password: newUserPassword, ...rest} = newUser

        return NextResponse.json({user: rest, message:"User created successfully"}, {status: 201});
    }catch (error){
        return NextResponse.json({message:"Unknown error detected!"}, {status: 500});
    }
}