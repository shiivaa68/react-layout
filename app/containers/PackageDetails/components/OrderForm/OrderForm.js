import React,{useCallback} from 'react';
import { withRouter } from 'react-router-dom';
import {PublicRoutes} from 'utils/routes';
import {PackageContainer,PriceArea,DescriptionPack,PriceAreaOff,TitlePage,DescriptionTitle,TitlePackagewrapper,Title,WraperInput,DescriptionArea,DescriptionPrice,ContainerCode,Textcode,ButtonWrapper,} from './styles';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import EnterCodeOff from '../EnterCodeOff/EnterCodeOff';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

const OrderForm = ({data}) =>{
    const {push} = history;

// const handleNavigatePackageDetails = useCallback(() => {
//     push(PublicRoutes.packageDetailsRoute(id));
//   }, []);

const handleOTPBtnClick = (values,actions )=> {
    console.log({values},'man injam for')
     
     };
   


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
                <div><FormattedMessage {...messages.descriptionPackage} /></div>  
                <div><FormattedMessage {...messages.pricePackage} /></div> 
                <div> <FormattedMessage {...messages.offPrice} /></div>  
                </DescriptionTitle>
                <DescriptionPrice>
                <DescriptionPack> {data.description}</DescriptionPack> 
                {data.price >data.price_discount ? (  <PriceAreaOff>{data.price} <FormattedMessage {...messages.toman} /> </PriceAreaOff>):(<PriceArea>- </PriceArea>)}
                {/* <PriceAreaOff>{data.price} <FormattedMessage {...messages.toman} /> </PriceAreaOff> */}
                <PriceArea>{data.price_discount} <FormattedMessage {...messages.toman} /> </PriceArea>
                </DescriptionPrice>
                </DescriptionArea>

                <ContainerCode>
                 <Textcode>
                     <Title>
                    <FormattedMessage {...messages.titleOff} />
                    </Title>
                 </Textcode>
                 <WraperInput>
                <EnterCodeOff handleOTPBtnClick={handleOTPBtnClick}/>
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
