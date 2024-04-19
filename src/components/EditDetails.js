import { useRouter } from "next/navigation";
import { useState } from "react";

const EditDetails=({id,name,employeeId,phoneNumber,department,address})=>{
    const[newName,setnewName]=useState(name);
    const[newEmployeeId,setnewEmployeeId]=useState(employeeId);
    const[newPhoneNumber,setnewPhoneNumber]=useState(phoneNumber);
    const[newDepartment,setnewDepartment]=useState(department);
    const[newAddress,setnewAddress]=useState(address);

    const router= useRouter();

    const handleSubmit=async(e)=>{
       e.preventDefault();

       try {
        const res= await fetch(`http://localhost:3000/api/emp/${id}`,{
            method:"PUT",
            headers:{
                "Content-type" : "application/json"
            },
            body:JSON.stringify({newName,newEmployeeId,newPhoneNumber,newDepartment,newAddress})
        })
        if(res.ok){
            router.push('/')
            router.refresh();
        }else{
            throw new Error('Failed to update topic')
        }
       } catch (error) {
        console.log(error);
       }
    }

    return(
        <div className="m-auto w-2/4">
        <h1 className="font-bold my-1">Update Information</h1>
        <form  onSubmit={handleSubmit} className="flex flex-col border border-neutral-600  p-4 shadow-xl h-[450px] rounded-md">
            <label className="mt-2" for="ename">Employee name : </label>
            <input  className="border border-slate-500 px-4 py-1" id="ename" type="text" placeholder="Enter your Name"
             onChange={(e)=>setnewName(e.target.value)}
             value={newName}
            />
            <label  className="mt-4" for="eid">Employee ID : </label>
            <input  className="border border-slate-500 px-4 py-1" id="eid" type="text" placeholder="Enter Your id"
             onChange={(e)=>setnewEmployeeId(e.target.value)}
             value={newEmployeeId}
            />
            <label  className="mt-4" for="ephone">Phone : </label>
            <input  className="border border-slate-500 px-4 py-1" id="eaddr" type="text" placeholder="Enter Your phone number"
             onChange={(e)=>setnewPhoneNumber(e.target.value)}
             value={newPhoneNumber}
            />
            <label className="mt-4" for="eaddr">Address : </label>
            <textarea  className="border border-slate-500 px-4 py-1" placeholder="Enter address"
             onChange={(e)=>setnewAddress(e.target.value)}
             value={newAddress}
            ></textarea>
            <label  className="mt-4" for="edept">Department : </label>
            <input  className="border border-slate-500 px-4 py-1" id="edept" type="text" placeholder="Enter Your department"
             onChange={(e)=>setnewDepartment(e.target.value)}
             value={newDepartment}
            />
            <button className="bg-green-400 w-fit  p-2 rounded-md mx-auto mt-4" type="submit">Update</button>
        </form>
       </div>
    )
}

export default EditDetails;