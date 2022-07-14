 import { useParams } from "react-router-dom"
 import {useState,useEffect} from "react" ; 
 import axios from "axios" ; 
export const SearchID = () =>{
    const {id} = useParams() ;   
    //   console.log(ID) ; 
    const [data , setData] = useState([]) 
         console.log(data) ;  

     useEffect(()=>{
        getData()
     },[])  
       const getData = () =>{
          axios.get(`http://localhost:8080/data/${id}`).then((data)=>{
             return setData(data.data); 
          })
       }

      


    return <div>
          {data.country}
    </div>
}