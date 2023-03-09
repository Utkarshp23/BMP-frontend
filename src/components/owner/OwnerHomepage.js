import React,{useEffect} from "react";
export default function OwnerHomepage()
{
    useEffect(() => {
        var userSel = document.getElementById('addproperty');
      
    
        fetch('http://localhost:8080/getproperty')
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
    
            res.map((v) => {
              var opt = document.createElement('table');
              opt.value = v.ftypeid;
              opt.textContent = v.ftype;
              userSel.appendChild(opt);
            });
          });
      }, []);
    


    return(
        <div>
            <h1>Welcome to Owner Page</h1>
            <input type="button" id="addproperty" value="Add Property"
            onClick={(e) =>
            <table>
                <tr>
                    <td>

                    </td>
                </tr>
            </table> }/>
        </div>
        
    )
}