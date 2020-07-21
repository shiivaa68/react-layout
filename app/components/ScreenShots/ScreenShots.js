import React,{useState ,useMemo} from 'react';
import { FormattedMessage } from 'react-intl'
import ReactImageVideoLightbox from 'react-image-video-lightbox';


import messages from './messages';

import { ScreenShotWrapper, Title,LightBox,ImageCover } from './styles';

const ScreenShots = ({ screenshots, trailer_path }) =>
 {
   const [lightboxOpen,setlightboxOpen] = useState(false);

  const imageData = useMemo(()=>{
    const images = screenshots && screenshots.map(img =>({url:img,type:'photo'})) || [];
    const videos = trailer_path ? [{url:trailer_path,type:'video'}] :[];
    return [...images,...videos]
  },[screenshots,trailer_path]);


  const IMAGE_SIZE ='200x160';

 

  return (
    <ScreenShotWrapper>
      <Title>
        <FormattedMessage {...messages.title} />
      </Title>
      <ImageCover>
      {imageData.length > 0 && imageData.map(imgData => (
     
            <img key={imageData.url} src={`${imgData.url}&size=${IMAGE_SIZE}`}   onClick={() => setlightboxOpen(true)} />
           
      ))}

      </ImageCover>
      {lightboxOpen && (
     
              <LightBox>
          <ReactImageVideoLightbox
            data={imageData}
            startIndex={0}
            showResourceCount={true}
            onCloseCallback={() => setlightboxOpen(false)}
          />
        </LightBox>
      
    
        
      )}
     </ScreenShotWrapper>
  );
};

export default ScreenShots;

