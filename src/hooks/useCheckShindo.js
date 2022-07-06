import React, {useState, useEffect} from 'react'

const useCheckShindo = (scale) => {
    
  let [shindo, setShindo]  = useState(null);
    
    useEffect(() => {
      setShindo(()=>{
        switch(scale) {
            case 0:
              return  shindo = 0;
               
           case 10:
            return   shindo = 1;
                
           case 20:
             return   shindo =2;
              
           case 30:
             return  shindo = 3;
             
           case 40:
              return  shindo = 4;
           case 45:
            return   shindo = "5 lower";
           case 50:
            return  shindo = "5 upper";
           case 55:
            return   shindo = "6 lower";
           case 60:
            return   shindo = "6 upper";
           case 70:
            return    shindo = 7;   
            
            default:
             return 'No information'

        };
      }
       

      )
      
    }, [])
    
 
   
    return shindo;
}

export default useCheckShindo