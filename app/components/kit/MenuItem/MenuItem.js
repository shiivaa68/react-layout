import React from 'react';

import  {HeaderLink}  from './style';

const MenuItem = ({ to, label }) => <HeaderLink to={to}>{label}</HeaderLink>;

export default MenuItem;
