import React from 'react';
import {styledCard} from './styles';

const Card =(props)=>{

const { children,hasShadow,hasRadius,hasBorder,...restProps} =props;
    return(
<styledCard
hasShadow={hasShadow}
hasRadius={hasRadius}
hasBorder={hasBorder}
{...restProps}
>
{children}
</styledCard>
    );
}