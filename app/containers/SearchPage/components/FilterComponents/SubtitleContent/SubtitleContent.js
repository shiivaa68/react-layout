import React from 'react';
import useSearchContext from 'containers/SearchPage/context';

import { FormattedMessage } from 'react-intl';

import messages from './messages';

import { SubtitleWrapper,WrapperSub,WrapperVoice ,WrapperDubbled} from './styles';

import { Checkbox } from 'components/kit';

const SubtitleContent = () => {
  const {
    data: { subtitleTypes,voiceTypes,selectedSubtitleTypes ,selectedVoiceTypes,selectedDubbing},
    action: { handleSetSelectedSubtitleTypes,handleSetSelectedVoiceTypes,handleSetSelectedDubbing },
  } = useSearchContext();

  return (
    <SubtitleWrapper>

  
<WrapperVoice>
{voiceTypes.map(voiceType => {
        return (
          <Checkbox
            {...voiceType}
            key={voiceType.id}
            id={voiceType.id}
            label={voiceType.label}
            checked={selectedVoiceTypes.map(el => el.id).includes(voiceType.id)}
            onChange={handleSetSelectedVoiceTypes}
          />
        );
      })}

</WrapperVoice>

<WrapperSub>
  {subtitleTypes.map(subType => {
        return (
          <Checkbox
            {...subType}
            key={subType.id}
            id={subType.id}
            label={subType.label}
            checked={selectedSubtitleTypes.map(el => el.id).includes(subType.id)}
            onChange={handleSetSelectedSubtitleTypes}
          />
        );
      })}
  </WrapperSub>
<WrapperDubbled>
<Checkbox
            label={<FormattedMessage {...messages.dublling} />}
            checked={selectedDubbing}
            onChange={handleSetSelectedDubbing}
          />
     
</WrapperDubbled>
  


   
    </SubtitleWrapper>
  );
};

export default SubtitleContent;

