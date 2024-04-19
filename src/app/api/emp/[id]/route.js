import ConnectDB from "@/lib/mongoConnect";
import Employee from "@/model/user";
import { NextResponse } from "next/server";


export async function PUT(request,{params}){
    const{id}=params;
    const{newName:name,newEmployeeId:employeeId,newPhoneNumber:phoneNumber, newDepartment:department,newAddress:address}=await request.json();

    await ConnectDB();

    await Employee.findByIdAndUpdate(id,{name,employeeId,phoneNumber,department,address})

    return NextResponse.json({message:"Employee data updated...."})
}

export async function GET(request,{params}){
    const{id}= params;

    await ConnectDB();

    const employee=  await Employee.findOne({_id:id})

    return NextResponse.json({employee},{status:200})
}