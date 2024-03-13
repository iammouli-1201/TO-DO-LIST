import Header from "./Header";
import Content from "./Content"
import Footer from "./Footer";
import { useEffect, useState } from 'react';
import Add from "./Add";
import Search from "./Search";
import apiRequest from "./apiRequest";
function App() {
  const [item,setItem] = useState(
    []
  );
  const API="http://localhost:3000/items";
  const[isloding,setloding]=useState(true)
  useEffect(()=>{
      const fetchitems=async ()=>{
        try {
          const promis=await fetch("http://localhost:3000/items");
          const res=await promis.json();
          console.log(res);
          setItem(res);
        } catch (error) {
         
        }
        finally{
           setloding(false)
        }
      }
      setTimeout(() => {
        (fetchitems())
      }, 3000);
  },[])
  const [newItem,setNewItem]=useState('');
  const[search,setSearch]=useState('');
  const AddItem = async()=>  
  {
      const id=(item.length>0)?item[item.length-1].id+1:1;
      const newIt={id,checked:false,name:newItem}
      console.log(newIt)
      const listit=[...item,newIt]
      setItem(listit)
      const postoptions={
        method:'POST',
        header:{
           'Content-Type':'application/json'
        },
        body:JSON.stringify(newIt)
      }
      const result=await apiRequest(API,postoptions)
  }
  function handelCheck(e)
  { 
     e.preventDefault()
     AddItem()
     setNewItem('')
  }
  function myfun(id)
  {
    const curr=item.map ((itm) =>
         (itm.id===id)? {...itm,checked:!itm.checked}:itm
         )  
         setItem(curr)
  }
  function myfundel(id)
  {
    const curr=item.filter((itm) =>
        itm.id!=id
         )  
         setItem(curr)
  }
  return (
    <div className="App">
      <Header title="TO DO LIST"/>
      <Add
         newItem={newItem}
         setNewItem={setNewItem}
         handelCheck={handelCheck}
       />
       <Search 
        search={search}
        setSearch={setSearch}
       />
       <main>
        {isloding && <p>Loading..</p>}
      <Content 
        item={item.filter(itm => (itm.name).toLowerCase().includes(search.toLowerCase()))}
        myfun={myfun}
        myfundel={myfundel}
      />
      </main>
      <Footer length={item.length}/>
     </div>
  );
}

export default App;
