import React , {useEffect, useState}from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Hari-Vardhan')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    },[])
  return (
    <div className="text-center m-4 p-3 bg-gray-600 text-white text-3xl ">
      GitHub : {data.followers}
    </div>
  )
}

export default Github
