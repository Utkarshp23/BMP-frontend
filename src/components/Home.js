import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Home = () => {
  return (
    <div className='home_container'>
      <div className='input-group'>
        <div className='form-outline'>
          {/* <label className="form-label" htmlFor="form1">Search</label> */}
          <input
            type='search'
            id='form1'
            className='form-control'
            placeholder='Search'
          />
        </div>
        <button type='button' className='btn btn-primary'>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Home;
