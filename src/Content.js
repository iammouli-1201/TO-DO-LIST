import React from 'react'
import './Contect.css';
const Content = ({item,myfun,myfundel}) => { 
  return (
    <div className='main'> 
      {(item.length)?(
       <ol>
        <table>
         {item.map((itm) => (
              <tr key={itm.id}>
              <td><input type="checkbox" checked={itm.checked} onClick={()=>myfun(itm.id)}/></td>
              <td><lable>{itm.name}</lable></td>
              <td><button onClick={()=> myfundel(itm.id)}>Delete</button></td>
             </tr>
          ))}
        </table>
       </ol>):"List is Empty"}
    </div>
  );
 }

export default Content;