// import React, { useState } from "react";
// import datas from './datas.json'
// const Learn=()=>{
//     const [data, setData] = useState(datas)
//     console.log(data)
//     const removeFun=(valId)=>{
//       setData(data.filter(item=>item.id!==valId))
//     } 
//     const upDateFun=(valId)=>{
//       setData(data.map(items =>{
//         if(items.id===valId){
//           return{name:"pankaj"}
//         }else{
//           return items
//         }
//       }))
//     }
//     return(
//         <>
//            <ul> 
//         <li>
//           {data.map((val, i) => (
//             <div key={i}>
//               {val.id}
//               {val.name}
//               <button onClick={()=>removeFun(val.id)}>Remove</button>
//               <button onClick={()=>upDateFun(val.id)}>Update</button>
//             </div>
//           ))}
//         </li>
//       </ul>
//       <button onClick={() => setData([])}>clear</button>
//         </>
//     );
// }
// export default Learn;



// import React, { useEffect, useState } from "react";

// const Learn=()=>{
//     const [clicked, setClicked] = useState("");
//     const [count, setCount] = useState(0);
//     useEffect(()=>{
//         alert('this is useEffect')
//     },[count])
//     return(
//         <>
//            <button onClick={()=>setClicked('Pankaj')}>Name</button>
//            <br/>
//            <button onClick={()=>setClicked('Punjab')}>adress</button>
//            <br/>
//            <button onClick={()=>setClicked('tenth')}>Class</button>
//            <br/>
//            <br/>
//            <button onClick={()=>setCount(count+1)}>Increment</button>
//            <hr/>
//            <p>{clicked}</p>
//            <p>{count}</p>
//         </>
//     );
// }
// export default Learn;

// import React, { useEffect, useState } from 'react'

// const Learn = () => {
//     const [user, setUser] = useState([]);
//     useEffect(() => {
//         fetch("https://api.github.com/users").then(res => res.json()).then(data => setUser(data)).catch(err=>console.log(err,"somthing went worng"))
//     }, [])
//     console.log(user)
//     return (
//         <div>
//             <h2>Github User</h2>
//             <ul>
//                 {
//                     user.map((val, i) => {
//                         return <li key={i}>
//                             <a href={val.html_url}>{val.login}</a>
//                         </li>
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }

// export default Learn


// useRef

// import React, { useEffect, useRef, useState } from 'react'

// const Learn = () => {
//     const[userInput, setUserInput] = useState("")
//     const renders = useRef(0)
//     useEffect(()=>{
//         renders.current = renders.current+1;
//         console.log("page has been rerender")
//     },[])
//     // console.log(renders)
//   return (
//     <div>
//       <input value={userInput} onChange={(e)=>setUserInput(e.target.value)}/>
//       <p>total counting{renders.current}</p>
//     </div>
//   )
// }

// export default Learn

// import React, { useEffect, useRef } from 'react'

// const Learn = () => {
//     const count = useRef(0);
//     useEffect(()=>{
//         console.log("page has been rerender")
//     })

//     const handleFun=()=>{
//         count.current= count.current+1;
//         console.log(`we count the value ${count.current} times`)
//     }
//   return (
//     <div>
//       <button onClick={handleFun}>Click Me</button>
//     </div>
//   )
// }
// export default Learn



//useRef with React Dom
// import React, { useEffect } from 'react'

// const Learn = () => {
//     const inputF = React.useRef(null)
//     useEffect(()=>{
//         inputF.current.focus()
//     },[])
//     function handleFocus(){
//       inputF.current.style.backgroundColor='red';
//     }
//     function handleBlur(){
//         inputF.current.style.backgroundColor='';
//     }
//   return (
//     <div>
//        <input type='text' ref={inputF} onFocus={handleFocus} onBlur={handleBlur}/>
//     </div>
//   )
// }

// export default Learn




//useLayoutEffect
// import React, { useEffect, useLayoutEffect } from 'react'

// const Learn = () => {
//     useEffect(()=>{
//         console.log("useEffect called1")
//     },[])

//     useLayoutEffect(()=>{
//         console.log("useLayout called1")
//     },[])
//     useEffect(()=>{
//         console.log("useEffect called2")
//     },[])
//     useEffect(()=>{
//         console.log("useEffect called3")
//     },[])
//     useLayoutEffect(()=>{
//         console.log("useLayout called2")
//     },[])
//   return (
//     <div>

//     </div>
//   )
// }

// export default Learn





// useTransition (isPanding=> is a variable, startTransition=>is a function)

// import React, { useState, useTransition } from 'react'

// const Learn = () => {
//     const[name, setName] = useState('');
//     const[lists, setLists] = useState([]);
//     const[isPanding, startTransition] = useTransition();

//     const list_size = 20000;

//     const handleChange =(e)=>{
//         const{value} = e.target;
//         setName(value);

//      startTransition(()=>{
//         const dataList = [];

//         for(let i=0; i<list_size; i++){
//             dataList.push(value)
//         }
//         setLists(dataList)
//      })   
//     }
//   return (
//     <div>
//       <input type='text' value={name} onChange={handleChange} />
//       {
//         isPanding ? (<div>Loding....</div>):

//         lists.map((list, i)=>{
//             return <div key={i}>{list}</div>
//         })

//     }
//     <ul>
//         <li>
//             {lists}
//         </li>
//     </ul>
//     </div>
//   )
// }

// export default Learn



//form validation 

// import React, { useState } from 'react'

// const Learn = () => {
//     const[name, setName] = useState('');
//     const[email, setEmail] = useState('');
//     const[password, setPassword] = useState("");
//     const[confPassword, setConfPassword] = useState("");
//     const[age, setAge] = useState('');
//     const[gender,setGender] = useState('')
//     const[error, setError] = useState('');

//     const validateForm=()=>{
//         const error ={};
//         if(!name){
//             error.name ="name is reqiured"
//         }
//         if(!email){
//             error.email = "Email is required"
//         }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
//              error.email = "invalid email"
//         }
//         if(!password){
//             error.password = "Password is required"
//         }
//         else if(password.length<6){
//             error.password ="enter more then 6 digit"
//         }
//         if(!confPassword){
//             error.confPassword = "conforme password is required"
//         }
//         else if(password !== confPassword){
//             error.confPassword="password is not match"
//         }
//         if(!age){
//             error.age = "age is required"
//         }
//         else if(isNaN(age) || age<18){
//             error.age="age must be 18+"
//         }
//         if(!gender){
//             error.gender = "gender is required"
//         }
//         console.log(error)
//         return error; 
//     }
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         const validationErrors = validateForm();
//         if(Object.keys(validationErrors).length>0){
//         setError(validationErrors)
//     }else{
//         console.log("form submitted");
//     }
// }
//     return (
//         <div>
//             <h1>Form Validation </h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name:</label>
//                     <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
//                     {error.name}
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
//                     {error.email}
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
//                     {error.password}
//                 </div>
//                 <div>
//                     <label>conform password:</label>
//                     <input type='password' value={confPassword} onChange={(e)=>setConfPassword(e.target.value)}/>
//                     {error.password}
//                 </div>
//                 <div>
//                     <label>Age:</label>
//                     <input type='number' value={age} onChange={(e)=>setAge(e.target.value)}/>
//                     {error.age}
//                 </div>
//                 <div>
//                     <label>Gender:</label>
//                     <select value={gender} onChange={(e)=>setGender(e.target.value)}>
//                         <option value="">select Gender</option>
//                         <option value="male">Male</option>
//                         <option value="female">female</option>
//                         <option value="trangender">Trangender</option>
                       
//                     </select>
//                     {error.gender}
//                 </div>
//                 <button type='submit' onClick={handleSubmit}>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Learn



//Axios

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Learn = () => {
    const [userdata,setData] = useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/posts").then((res)=>setData(res.data)).catch(console.error("wrong"))
    },[])
  return (
    <div>
      {userdata.map(item=>(
            <div key={item.id}>{item.title}</div>
        ))}
    </div>
  )
}
export default Learn
