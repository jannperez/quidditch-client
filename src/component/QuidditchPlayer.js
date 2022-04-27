import { useEffect, useState } from 'react';

const QuidditchPlayer = (props) => {
   

    const [QuidditchPlayer, setQuidditchPlayer] = useState ([])

    useEffect(()=>{
  
       (async()=>{
           try{
               const res= {};
               setQuidditchPlayer(res)
               console.log ('viewing', res)
           }catch(err) {
                console.log(err)
           }
       })
        ()
    },[])}
