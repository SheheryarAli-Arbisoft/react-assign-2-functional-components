import React, { Fragment } from 'react';

import { Navbar as CustomNavbar, NavbarBrand } from '../components/Navbar';

const Navbar = () => {
  return (
    <Fragment>
      <CustomNavbar>
        <NavbarBrand>
          <i className='fas fa-cloud-sun-rain'></i>Weather App
        </NavbarBrand>
      </CustomNavbar>
    </Fragment>
  );
};

export default Navbar;
