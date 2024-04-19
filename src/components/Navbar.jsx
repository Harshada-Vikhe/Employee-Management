
import Link from 'next/link'


export default function Navbar(){
    return(
        <div className='flex justify-between mt-6 mx-auto w-4/5 bg-slate-700 p-2 px-6 h-14 rounded-md' >
         <Link href={'/'} className='text-white text-xl pt-2 font-bold'>Employee Info</Link>
         <Link href={'/addDetails'} className="bg-green-400 text-white  px-4 pt-2 text-lg rounded-md font-semibold" >Add</Link>
        </div>
    )
}