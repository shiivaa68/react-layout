import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { PackageItem } from 'components/kit';
import PackageManager from './PackagesManager';

import {
  PackageViewLayout,
  Title,
  PackageWrapper,
  Line,
  PackagesBoxContainer,
} from './styles';

const PackagesPage = () => {
  const {
    data: { packages },
    actions: {},
  } = PackageManager();

  return (
    <PackageViewLayout>
      {/* <Line/> */}
      <PackageWrapper>
        <Title>
          <FormattedMessage {...messages.titlePackage} />
        </Title>

        <PackagesBoxContainer>
          {packages &&
            packages.length > 0 &&
            packages.map(pkg => <PackageItem key={pkg.id} {...pkg} />)}
        </PackagesBoxContainer>
      </PackageWrapper>
    </PackageViewLayout>
  );
};

export default PackagesPage;
