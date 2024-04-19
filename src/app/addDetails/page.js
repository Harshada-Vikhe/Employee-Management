'use client'


import { useRouter } from "next/navigation";
import {  useState } from "react";



const addDetails=()=>{
  const[name,setName]=useState("");
  const[employeeId,setEmployeeId]=useState("");
  const[phoneNumber,setPhoneNumber]=useState("");
  const[department,setDepartment]=useState("");
  const[address,setAddress]=useState("");
 
  const router= useRouter();

  const handleSubmit=async(e)=>{
    e.preventDefault();

     if(!name || !employeeId || !phoneNumber || !department || !address){
        alert('All fields are mandatory')
     }
        
     try {
         const res = await fetch('http://localhost:3000/api/emp',{
            method:"POST",
            headers:{
                "Content-type":"aplication/json"
            },
            body:JSON.stringify({name,employeeId,phoneNumber,department,address})
         })
          console.log(res);
         if(res.ok){
            router.push('/')
            router.refresh();
         }else{
            throw new Error("Failed to create a Employee")
         }


     } catch (error) {
        console.log(error);
     }



  }


    return(
       <div className="m-auto w-2/4">
        <h1 className="font-bold mb-1 ">Add New Employee</h1>
        <form onSubmit={handleSubmit} className="flex flex-col border border-neutral-600  p-4 shadow-xl h-[450px] rounded-md ">
            <label className="mt-2" for="ename">Employee name : </label>
            <input  className="border border-slate-500 px-4 py-1" id="ename" type="text" placeholder="Enter your Name"
             onChange={(e)=>setName(e.target.value)}
             value={name}
            />
            <label  className="mt-4" for="eid">Employee ID : </label>
            <input  className="border border-slate-500 px-4 py-1" id="eid" type="text" placeholder="Enter Your id"
            onChange={(e)=>setEmployeeId(e.target.value)}
            value={employeeId}
            />
            <label  className="mt-4" for="ephone">Phone : </label>
            <input  className="border border-slate-500 px-4 py-1" id="eaddr" type="text" placeholder="Enter Your phone number"
             onChange={(e)=>setPhoneNumber(e.target.value)}
             value={phoneNumber}
            />
            <label className="mt-4" for="eaddr">Address : </label>
            <textarea  className="border border-slate-500 px-4 py-1" placeholder="Enter address"
            onChange={(e)=>setAddress(e.target.value)}
            value={address}
            ></textarea>
            <label  className="mt-4" for="edept">Department : </label>
            <input  className="border border-slate-500 px-4 py-1" id="edept" type="text" placeholder="Enter Your department"
            onChange={(e)=>setDepartment(e.target.value)}
            value={department}
            />
            <button  className="bg-green-400 w-fit  p-2 rounded-md mx-auto mt-4" type="submit">Add Employee</button>
        </form>
       </div>
    )
}

export default addDetails;