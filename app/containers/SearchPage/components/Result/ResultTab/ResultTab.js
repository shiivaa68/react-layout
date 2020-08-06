import React, { useCallback } from 'react';
import Button from '../../../../../components/kit/Button';

import { TabWrapper } from './styles';

const ResultTab = ({ TabTypes = [], selectedTabID, handleActiveButton }) => {
  return (
    <TabWrapper>
      {TabTypes.length > 0 &&
        TabTypes.map(tab => (
          <Button
            key={tab.name}
            type="fullfill"
            label={tab.label}
            keepActive={selectedTabID === tab.id}
            onClick={() => handleActiveButton(tab.id)}
          />
        ))}
    </TabWrapper>
  );
};

export default ResultTab;