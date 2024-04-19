import mongoose, {Schema} from "mongoose"

const employeeSchema= new Schema({
    name:{
        type:String,
        required:true
     },
     employeeId:{
        type:String,
        required:true,
        unique:true
     },
     phoneNumber:{
        type:String,
        required:true
     },
     department:{
        type:String,
        required:true
     },
     address:{
        type:String,
        required:true
     }
}
)

const Employee = mongoose.models.Employee || mongoose.model("Employee",employeeSchema)

export default Employee;