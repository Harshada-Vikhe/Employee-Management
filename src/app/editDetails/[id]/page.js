'use client'

import EditDetails from "@/components/EditDetails"

const getDetailsById= async(id)=>{
    try {
        const res = await fetch(`http://localhost:3000/api/emp/${id}`,{
            cache:"no-store"
        })

        if(!res.ok){
            throw new Error("Failed to fetch Employee")
        }

        return res.json();
    } catch (error) {
         console.log(error);
    }
}

const editDetails=async({params})=>{
    const{id}= params

    const{employee} = await getDetailsById(id);
    const{name,employeeId,phoneNumber,department,address}= employee
    return(
        <EditDetails id={id} name={name} employeeId={employeeId} phoneNumber={phoneNumber} department={department} address={address} />
    )
}

export default editDetails