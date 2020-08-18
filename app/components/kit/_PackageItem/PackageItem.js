import React,{useCallback} from 'react';
import { withRouter } from 'react-router-dom';
import {PublicRoutes} from 'utils/routes';
import {PackageContainer,TitlePackage,DescriptionArea,DescriptionPackage,PriceArea,PriceAreaOff,ButtonWrapper} from './styles';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

const PackageItem = ({id,name,description,day,price,price_discount,history,...rest}) =>{
    const {push} = history;


const handleNavigatePackageDetails = useCallback(() => {
    push(PublicRoutes.packageDetailsRoute(id));
  }, []);
    return (
        <PackageContainer>

    <DescriptionArea>
        <TitlePackage>
            {name}
        </TitlePackage>
        <DescriptionPackage>
            {description}
        </DescriptionPackage>
    </DescriptionArea>

        <PriceAreaOff>
        {price}
        </PriceAreaOff>
        
        <PriceArea>
        {price_discount}
        <FormattedMessage {...messages.toman} />
        </PriceArea>
  
    <ButtonWrapper>
    <Button
            type="fullfill"
            label={<FormattedMessage {...messages.titlePackage} />}
            onClick={handleNavigatePackageDetails}
          />
    </ButtonWrapper>
      

    </PackageContainer>
    );
    };


export default withRouter(PackageItem);
