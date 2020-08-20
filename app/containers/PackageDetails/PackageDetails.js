import React from 'react';
import { OrderForm } from './components';
import { PkgDetailsContext } from './context';
import PackageDetailsManager from './PackageDetailsManager';
import { PackageDetailLayout } from './styles';

const PackageDetails = props => {
  const { data, actions } = PackageDetailsManager(props);

  return (
    <PkgDetailsContext.Provider value={{ data, actions }}>
      <PackageDetailLayout>
        <OrderForm />
      </PackageDetailLayout>
    </PkgDetailsContext.Provider>
  );
};

export default PackageDetails;
