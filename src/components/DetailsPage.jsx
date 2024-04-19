import Link from "next/link"
import RemoveDetail from "./RemoveDetail"


const getEmployee= async()=>{
  try {
    const res= await fetch("http://localhost:3000/api/emp",{
      cache:"no-store"
    })
    
    if(!res.ok){
      throw new Error('Failed to fetch employee')
    }
    return res.json();

  } catch (error) {
    console.log(error);
  }
}


const DetailsPage=async()=>{
    const{employee}=await getEmployee();
    return(
      <>
      
       <div  className="relative overflow-x-auto mt-9">
          <table className="w-4/5 m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      
      <th className="px-6 py-3">NAME</th>
      <th className="px-6 py-3">ID</th>
      <th className="px-6 py-3">PHONE</th>
      <th className="px-6 py-3">DEPARTMENT</th>
      <th className="px-6 py-3">ADDRESS</th>
      <th className="px-6 py-3" colSpan={2}>Action</th>
      
      
    </tr>
  </thead>
  {employee.map(emp=>(
  <tbody key={emp._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <tr>
     
      <td className="px-6 py-3">{emp.name}</td>
      <td className="px-6 py-3">{emp.employeeId}</td>
      <td className="px-6 py-3">{emp.phoneNumber}</td>
      <td className="px-6 py-3">{emp.department}</td>
      <td className="px-6 py-3">{emp.address}</td>
      <td  ><RemoveDetail id={emp._id}/></td>
      <td ><Link href={`/editDetails/${emp._id}`} className="bg-black  text-sm text-white p-1 rounded-md w-fit">Update</Link></td>
    </tr>
    </tbody>
    ))}
    </table>
    </div>
    
    </>
    )
}

export default DetailsPage