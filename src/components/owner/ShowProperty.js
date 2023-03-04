import React, { useEffect, useState } from "react";
export default function ShowProperty()
{
    const [ownersproperty,setownersproperty] = useState([]);
    const [flattype,setflattype] = useState([]);
    const [propertytype,setproptype] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/getproperty')
          .then((res) => {
            if(res.ok)
            {
              return res.json();
            }
            else
            {
              throw new Error("server Error")
            }
          })
          .then(obj => {
            console.log(obj);
            setownersproperty(obj);
          })
          .catch((Error) =>
            alert("server problem ! sever is down")
          );


          fetch('http://localhost:8080/getflattype')
          .then((res) => {
            if(res.ok)
            {
              return res.json();
            }
            else
            {
              throw new Error("server Error")
            }
          })
          .then(obj => {
            console.log(obj);
            setflattype(obj);
          })
          .catch((Error) =>
            alert("server problem ! sever is down1")
          );

          fetch('http://localhost:8080/getproptype')
          .then((res) => {
            if(res.ok)
            {
              return res.json();
            }
            else
            {
              throw new Error("server Error")
            }
          })
          .then(obj => {
            console.log(obj);
            setproptype(obj);
          })
          .catch((Error) =>
            alert("server problem ! sever is down2")
          );
       
       
    },[]);
   
       


    return (
        <div >
             <div className="form-container">
   
    <div className="login-form">
      <div className="form">
      <h3><i>Property Details</i></h3>
        <form>
          <div className="input-container">
           
            <table className="table">
                <thead>
                    <tr>
                       
                        <th scope="co1">Price</th>
                        <th scope="co1">Status</th>
                        <th scope="co1">Address</th>
                        <th scope="co1">City</th>
                        <th scope="co1">Pincode</th>
                        <th scope="co1">State</th>
                        <th scope="co1">Flat Type</th>
                        <th scope="co1">Property Type</th>
                    </tr>
                </thead>
                <tbody>
                    {ownersproperty.map((e) => {
                        return(
                            <tr>
              
                                <td>{e.price}</td>
                                <td>{e.status}</td>
                                <td>{e.address.addline1}</td>
                                <td>{e.address.city}</td>
                                <td>{e.address.pincode}</td>
                                <td>{e.address.state}</td>
                                  
                                {
                                  flattype.map((f) =>{
                                     return(
                                      (f.ftypeid === e.ftypeid) && <td>
                                        {f.ftype}</td>)
                                  })
                                }
                                {
                                  propertytype.map((p) =>{
                                    return((p.ptypeid === e.ptypeid) && <td>{p.ptype}</td>)
                                  })
                                }
                               
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </form>
       
       
      </div>
      </div>
     
      </div>
     
      </div>
    )
}
