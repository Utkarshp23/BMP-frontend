import React from 'react';
import { useLocation } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
import { GoHome } from 'react-icons/go';
import { RxCrossCircled } from 'react-icons/rx';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './PropertyPage.scss';

const PropertyPage = () => {
  const location = useLocation();
  // console.log(location.state.pType);

  var property = location.state.property;
  var index = location.state.index;
  var fType = location.state.fType;
  var pType = location.state.pType;

  const navigate = useNavigate();
  var handleFeedbacks = (e) => {
    e.preventDefault();
  };

  var handleRequests = (e) => {
    e.preventDefault();
  };

  var handleDeleteProp = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(property),
    };
    fetch('http://localhost:8080/deleteproperty', options)
      .then((res) => res.json)
      .then((msg) => {
        console.log(msg);
        navigate('/myproperties');
      });
  };
  var handleUpdateProp = (e) => {
    e.preventDefault();
    navigate('/updateprop', { state: { index, property, fType, pType } });
  };

  return (
    <div className='prop-page-container'>
      <div className='prop-page'>
        <div className='prop-header'>
          <div className='prop-number'>
            <div id='circle'>{1}</div>
          </div>
          <div className='prop-button'>
            <button
              type='button'
              className='btn btn-outline-danger'
              onClick={(e) => {
                handleDeleteProp(e);
              }}
            >
              <MdDelete size={25} />
            </button>
            <button
              type='button'
              className='btn btn-outline-info'
              onClick={(e) => {
                handleUpdateProp(e);
              }}
            >
              Update
            </button>
          </div>
        </div>
        <div className='prop-price'>
          <HiOutlineCurrencyRupee size={35} />
          <span>{location.state.property.price}</span>
        </div>
        <div className='prop-ptyp-status'>
          <span className='badge text-bg-primary'>{location.state.pType}</span>
          <span className='badge text-bg-warning'>
            {/* {location.state.property.status} */}
            Not Dealed
          </span>
        </div>
        <div className='prop-address'>
          <h6>
            <u>Address:</u>
          </h6>
          <span>{location.state.property.address.addline1}, </span>
          <span>{location.state.property.address.city}, </span>
          <span>{location.state.property.address.state}</span>
        </div>
        <div className='prop-ftype'>
          <GoHome size={30} />
          <span>{location.state.fType}</span>
        </div>
        <div className='prop-requests'>
          <button
            type='button'
            className='btn btn-success position-relative'
            onClick={(e) => {
              handleRequests(e);
            }}
          >
            Requests
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
              1+
              <span className='visually-hidden'>unread messages</span>
            </span>
          </button>
          <ul className='list-group'>
            <li className='list-group-item'>
              <div className='cust-name'>Utkarsh</div>
              <div className='req-btns'>
                <AiOutlineCheckCircle
                  className='req-acc'
                  size={30}
                  color='green'
                />
                <RxCrossCircled className='req-rej' size={30} color='red' />
              </div>
            </li>
            <li className='list-group-item'>Dapibus ac facilisis in</li>
            {/* <li className='list-group-item'>Morbi leo risus</li>
            <li className='list-group-item'>Porta ac consectetur ac</li>
            <li className='list-group-item'>Vestibulum at eros</li> */}
          </ul>
        </div>

        <div className='prop-feedbacks'>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={(e) => {
              handleFeedbacks(e);
            }}
          >
            Feedbacks <span className='badge badge-light'>4</span>
          </button>
          <ul className='list-group'>
            {/* <li className='list-group-item'>
              <span className='cust-name'>Utkarsh Pawar</span>
              <div className='requ-butts'>Hello</div>
            </li> */}
            <li className='list-group-item'>Dapibus ac facilisis in</li>
            <li className='list-group-item'>Morbi leo risus</li>
            {/* <li className='list-group-item'>Porta ac consectetur ac</li>
            <li className='list-group-item'>Vestibulum at eros</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
