import React from 'react'
import './Add.css';
function Add({newItem,setNewItem,handelCheck})
{
   return(
    <div className='main'>
     <form action="" onSubmit={(e) => handelCheck(e)} className='form-container'>
         <label className='label'>Add item: </label>
         <input autoFocus type="text" placeholder='Add item name' id='add'
          value={newItem} required onChange={(e) => setNewItem(e.target.value)}/>
         <button type='submit'>+</button>
     </form>
     </div>
   );
}
export default Add;