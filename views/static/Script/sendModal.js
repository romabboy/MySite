export async function sendForm1(obj){
    try {
      let a = await fetch("/formCB",{
        method: "POST",
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(obj)
   })
      return a.ok;

    } catch (error) {

      return error;

    }
 


}