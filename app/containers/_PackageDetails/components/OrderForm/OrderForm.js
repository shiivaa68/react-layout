import React,{useCallback} from 'react';
import { withRouter } from 'react-router-dom';
import {PublicRoutes} from 'utils/routes';
import {PackageContainer,TitlePage,DescriptionTitle,TitlePackage,Title,WraperInput,DescriptionArea,DescriptionPrice,ContainerCode,Textcode,ButtonWrapper,} from './styles';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

const OrderForm = ({id,name,description,day,price,price_discount,history,...rest}) =>{
    const {push} = history;

// const handleNavigatePackageDetails = useCallback(() => {
//     push(PublicRoutes.packageDetailsRoute(id));
//   }, []);
    return (
        <PackageContainer>  
            <TitlePage>
                <FormattedMessage {...messages.continueBye} /> 
            </TitlePage>
             <TitlePackage>
                دو روزه
                  {/* <FormattedMessage {...messages.toman} /> */}
            </TitlePackage>      

            <DescriptionArea>
                <DescriptionTitle>
                   <FormattedMessage {...messages.pricePackage} />
                   <FormattedMessage {...messages.totalPrice} /> 
                   <FormattedMessage {...messages.tax} />
                </DescriptionTitle>

                <DescriptionPrice>
                <span>'19000'</span>
                <span>'19000'</span>
                <span>'19000'</span>
                </DescriptionPrice>
                </DescriptionArea>

                <ContainerCode>
                 <Textcode>
                     <Title>
                    <FormattedMessage {...messages.titleOff} />
                    </Title>
                 </Textcode>
                 <WraperInput>
                  {/* <InputField
                    readOnly
                    type="text"
                    name="vat"
                    // value={vat}
                    // icon={'fas fa-phone'}
                    placeholder="کد تخفیف"
                    autoComplete="off"
                  /> */}
                  <input type="text"/>
                   <Button
                     type="filled"
                     label={<FormattedMessage {...messages.submitOff} />}
                     onClick={()=>console.log('man safheye order hastam')}
                    />
                 </WraperInput>
                 <DescriptionArea>
                <DescriptionTitle>
                   <FormattedMessage {...messages.totalPriceSubmit} />
                </DescriptionTitle>
                <DescriptionPrice>
                <span>'19000'</span>
                </DescriptionPrice>
                </DescriptionArea>
                </ContainerCode>
                    <ButtonWrapper>
                    <Button
                     type="filled"
                     label={<FormattedMessage {...messages.submitOrder} />}
                     onClick={()=>console.log('man safheye order hastam')}
                    />
                    </ButtonWrapper>
    </PackageContainer>
    );
    };


export default withRouter(OrderForm);
