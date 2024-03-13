const apiRequest = async(url='',optionsObject=null,erroMess=null)=>
{
     try{
        const response=fetch(url)
        if(!response.ok) throw Error("please update the app")
     }
     catch(err)
     {
        erroMess=err.Message 
     }
     finally{
         return erroMess
     }
}
export default apiRequest;