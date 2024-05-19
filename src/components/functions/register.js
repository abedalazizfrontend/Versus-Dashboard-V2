import axios from "axios";

const RegisterNewUser=async(name,email,password)=>{

const response= await axios.post(`http://172.23.64.1:3060/register`,{
    name,email,password
})
}