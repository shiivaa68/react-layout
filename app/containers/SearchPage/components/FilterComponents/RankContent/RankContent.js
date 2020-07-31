import React from 'react';

// import Slider, { Range } from 'rc-slider';
// import 'rc-slider/assets/index.css';

import useSearchContext from 'containers/SearchPage/context';

import { RankWrapper } from './styles';

// const { Range } = Slider;
const style = { width: 500, margin: 70 };

const RankContent = value => {
  // const { Range } = Slider;

  //   const {
  //     data: { sortTypes, selectedSortTypes },
  //     action: { handleSetSelectedSortTypes },
  //   } = useSearchContext();
  console.log(value, 'value is here');
  return (
    <RankWrapper>
      {/* <Slider /> */}
      {/* <Range /> */}
      {/* {sortTypes.map(sType => {
        return (
          <Checkbox
            {...sType}
            key={sType.id}
            id={sType.id}
            label={sType.label}
            checked={selectedSortTypes.id === sType.id}
            onChange={handleSetSelectedSortTypes}
          />
        );
      })} */}
    </RankWrapper>
  );
};

export default RankContent;
