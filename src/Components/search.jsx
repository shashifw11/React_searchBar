 import {useState , useEffect} from "react" ; 
 import {Link} from "react-router-dom" ; 
 import axios from "axios" ; 
 
 
export const Search = () =>{
    const [text , setText] = useState("") ; 
    const [search_data , setSearch_data] = useState([]) ; 
    const [loading , setLoading] =  useState(false) ; 
   
       console.log(search_data) 
     
      
   const searchData = async ()=>{
         try{ 
            setLoading(true)
           axios.get(`http://localhost:8080/data?q=${text}`).then((data)=>{
                  return  setSearch_data(data.data)
             })
                }catch(err){
                   console.log("err", err); 
               }
               setLoading(false)
            }


  const getData = async ()=>{
       search_data = await searchData() ; 
      
      
        if(search_data === undefined){
            return false
        }else{
            search_data.forEach(function(item){
                return setSearch_data(item)
            })
        }
       
    }    

    const Debounce=(fn,d)=>{
        let timer ; 
     return function (){
          let context= this ; 
           let args = arguments ; 
         clearTimeout(timer) ; 
             timer =   setTimeout(()=>{
                
                 getData.apply(context,arguments);
               
               } , d)
          }
     } 

     const SerachBar = Debounce(getData,400) ; 

    return <div>
       <input type = "text"  onKeyUp={SerachBar}  onChange = {(e)=>setText(e.target.value)} placeholder = "search country"/>
       <button>Search</button>
       {search_data.slice(0,7).map((item,i)=> loading ? ("LOADING..."): (<Link to = {`${item.id}`}><div key = {i}>{item.country}</div></Link>))}
     </div>
}