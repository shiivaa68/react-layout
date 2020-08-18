import React,{useCallback} from 'react';
import { withRouter } from 'react-router-dom';
import {PublicRoutes} from 'utils/routes';
import {PackageContainer,TitlePage,DescriptionTitle,TitlePackagewrapper,Title,WraperInput,DescriptionArea,DescriptionPrice,ContainerCode,Textcode,ButtonWrapper,} from './styles';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

const OrderForm = ({data}) =>{
    const {push} = history;

// const handleNavigatePackageDetails = useCallback(() => {
//     push(PublicRoutes.packageDetailsRoute(id));
//   }, []);
    return (
        <PackageContainer>  
            <TitlePage>
                <FormattedMessage {...messages.continueBye} /> 
            </TitlePage>
               <TitlePackagewrapper>
                  {data.name}  
             </TitlePackagewrapper>      

            <DescriptionArea>
                <DescriptionTitle>
                
                 <FormattedMessage {...messages.descriptionPackage} />
                   <FormattedMessage {...messages.pricePackage} />
                   <FormattedMessage {...messages.offPrice} />
                </DescriptionTitle>

                <DescriptionPrice>
             
                <span> {data.description}</span> 
                <span>{data.price} <FormattedMessage {...messages.toman} /> </span>
                <span>{data.price_discount} <FormattedMessage {...messages.toman} /> </span>

{/* 
                {price > price_discount ? (
                    <PriceAreaOff>
                    {price}
                    </PriceAreaOff>
                    ) : (
                        <PriceAreaOff>
                    
                       </PriceAreaOff>
                    )} */}

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
                <span>{data.final_price} <FormattedMessage {...messages.toman} /> </span> 
            

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
