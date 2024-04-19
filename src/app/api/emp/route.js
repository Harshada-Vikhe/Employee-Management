import ConnectDB from "@/lib/mongoConnect";
import Employee from "@/model/user";
import { NextResponse } from "next/server";


export async function POST(request){
  const{name,employeeId,phoneNumber, department,address}=await request.json();

  await ConnectDB();

  const newEmployee =await Employee.create({name,employeeId,phoneNumber, department,address});

  await newEmployee.save();
  
  return NextResponse.json({message:"Employee Created"},{status:200})
}

export async function GET(request){
   await ConnectDB();

   const employee= await Employee.find();
   return NextResponse.json({employee})
}

export async function DELETE(request){
  const id = request.nextUrl.searchParams.get('id')
  console.log(id);

  await ConnectDB();

  await Employee.findByIdAndDelete(id)

  return NextResponse.json({message:"Employee deleted"},{status:200})
}