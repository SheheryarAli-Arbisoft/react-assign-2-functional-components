import React, { Fragment } from 'react';

import { Navbar as CustomNavbar, NavbarBrand } from '../components/Navbar';

export const Navbar = () => {
  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
    <Fragment>
      <CustomNavbar>
        <NavbarBrand>
          <i className='fas fa-cloud-sun-rain' />
          Weather App
        </NavbarBrand>
      </CustomNavbar>
    </Fragment>
  );
};
