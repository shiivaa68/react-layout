import React, { useCallback, useMemo } from 'react';
import { withRouter } from 'react-router-dom';

import usePkgDetailsContext from 'containers/PackageDetails/context';

import {
  PackageContainer,
  PriceArea,
  DescriptionPack,
  TitlePage,
  DescriptionTitle,
  TitlePackagewrapper,
  Title,
  DescriptionArea,
  DescriptionPrice,
  ContainerCode,
  Line,
  TotalSection,
  TotalPrice,
  ButtonWrapper,
} from './styles';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import Discount from '../Discount';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

const OrderForm = () => {
  const { push } = history;

  const {
    data: { data_package_datail: Pkg },
  } = usePkgDetailsContext();

  const handleOTPBtnClick = (values, actions) => {
    console.log({ values }, 'man injam for');
  };

  const isLineThrough = useMemo(() => {
    if (Pkg.price === Pkg.price_discount) return false;
    else if (Pkg.price_discount > 0) return true;
  }, [Pkg]);

  return (
    <PackageContainer>
      <TitlePage>
        <FormattedMessage {...messages.continueBye} />
      </TitlePage>

      <TitlePackagewrapper>
        <h4>{Pkg.name}</h4>
      </TitlePackagewrapper>

      <Line />

      <DescriptionArea>
        <DescriptionTitle>
          <FormattedMessage {...messages.descriptionPackage} />
          <FormattedMessage {...messages.pricePackage} />
          <FormattedMessage {...messages.offPrice} />
        </DescriptionTitle>

        <DescriptionPrice>
          <DescriptionPack>{Pkg.description}</DescriptionPack>

          <PriceArea isLineThrough={isLineThrough}>
            {Pkg.price} <FormattedMessage {...messages.toman} />
          </PriceArea>

          {Pkg.price === Pkg.price_discount ? (
            <PriceArea>-</PriceArea>
          ) : (
            <PriceArea>
              {Pkg.price_discount} <FormattedMessage {...messages.toman} />
            </PriceArea>
          )}
        </DescriptionPrice>
      </DescriptionArea>

      <Line />

      <ContainerCode>
        <Title>
          <FormattedMessage {...messages.titleOff} />
        </Title>

        <Discount handleOTPBtnClick={handleOTPBtnClick} />

        <TotalSection>
          <FormattedMessage {...messages.totalPriceSubmit} />

          <TotalPrice>
            {Pkg.final_price} <FormattedMessage {...messages.toman} />
          </TotalPrice>
        </TotalSection>
      </ContainerCode>

      <ButtonWrapper>
        <Button
          type="filled"
          label={<FormattedMessage {...messages.submitOrder} />}
          onClick={() => console.log('man safheye order hastam')}
        />
      </ButtonWrapper>
    </PackageContainer>
  );
};

export default withRouter(OrderForm);
