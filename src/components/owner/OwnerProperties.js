import React, { useEffect, useState } from 'react';
import PropertyItem from '../layout/PropertyItem';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './OwnerProperties.scss';

export default function OwnerProperties() {
  const [properties, setProperties] = useState([]);
  const [fTypes, setFTypes] = useState([]);
  const [pTypes, setPTypes] = useState([]);

  const navigate = useNavigate();
  const myState = useSelector((state) => state.logged);

  useEffect(() => {
    fetch(`http://localhost:8080/getpropertybyid/${myState.userId}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('server Error');
        }
      })
      .then((obj) => {
        console.log(obj);
        setProperties(obj);
      })
      .catch((Error) => alert('server problem ! sever is down'));

    fetch('http://localhost:8080/getflattype')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('server Error');
        }
      })
      .then((obj) => {
        console.log(obj);
        setFTypes(obj);
      })
      .catch((Error) => alert('server problem ! sever is down'));

    fetch('http://localhost:8080/getproptype')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('server Error');
        }
      })
      .then((obj) => {
        console.log(obj);
        setPTypes(obj);
      })
      .catch((Error) => alert('server problem ! sever is down2'));
  }, []);

  var handleAddProperty = (e) => {
    e.preventDefault();
    navigate('/addproperty');
  };

  return (
    // <div>
    //   <div className='form-container'>
    //     <div className='login-form'>
    //       <div className='form'>
    //         <h3>
    //           <i>Property Details</i>
    //         </h3>
    //         <form>
    //           <div className='input-container'>
    //             <table className='table'>
    //               <thead>
    //                 <tr>
    //                   <th scope='co1'>Price</th>
    //                   <th scope='co1'>Status</th>
    //                   <th scope='co1'>Address</th>
    //                   <th scope='co1'>City</th>
    //                   <th scope='co1'>Pincode</th>
    //                   <th scope='co1'>State</th>
    //                   <th scope='co1'>Flat Type</th>
    //                   <th scope='co1'>Property Type</th>
    //                 </tr>
    //               </thead>
    //               <tbody>
    //                 {ownersproperty.map((e) => {
    //                   return (
    //                     <tr>
    //                       <td>{e.price}</td>
    //                       <td>{e.status}</td>
    //                       <td>{e.address.addline1}</td>
    //                       <td>{e.address.city}</td>
    //                       <td>{e.address.pincode}</td>
    //                       <td>{e.address.state}</td>

    //                       {flattype.map((f) => {
    //                         return (
    //                           f.ftypeid === e.ftypeid && <td>{f.ftype}</td>
    //                         );
    //                       })}
    //                       {propertytype.map((p) => {
    //                         return (
    //                           p.ptypeid === e.ptypeid && <td>{p.ptype}</td>
    //                         );
    //                       })}
    //                     </tr>
    //                   );
    //                 })}
    //               </tbody>
    //             </table>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className='page-header'>
        <h4>My Properties</h4>
        <button
          type='button'
          className='btn btn-outline-secondary'
          onClick={(e) => handleAddProperty(e)}
        >
          Add property
        </button>
      </div>
      <div className='hr-line'></div>
      <div className='prop-collection-container'>
        {properties.map((property, i) => (
          <PropertyItem
            index={i}
            property={property}
            fType={fTypes.map((f) => f.ftypeid === property.ftypeid && f.ftype)}
            pType={pTypes.map((p) => p.ptypeid === property.ptypeid && p.ptype)}
          />
        ))}
      </div>
    </div>
  );
}
