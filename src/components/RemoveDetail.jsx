'use client'

import { useRouter } from "next/navigation";

const RemoveDetail=({id})=>{
    const router= useRouter();

    const RemoveEmployee=async()=>{
        const confirmed= confirm("Are you sure ?")

        if(confirmed){
            const res= await fetch(`http://localhost:3000/api/emp?id=${id}`,{
                method:"DELETE",
            })

            if(res.ok){
                router.refresh();
            }
        }
    }
    
    return(
        
            <button onClick={RemoveEmployee} className="bg-red-400 text-sm p-1 text-white rounded-md ">Remove</button>
        
    )
}
export default RemoveDetail;