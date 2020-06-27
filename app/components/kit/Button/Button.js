import React ,{useMemo} from 'react';
import {ButtonTypes} from './constants';
import {ButtonWrapper} from './styles';

const Button = ({type,lable,onClick}) =>{

    const btnProps = useMemo(() => {
        
        const options = {custom_btn:true};

        switch(type){
            case ButtonTypes.FILLED:
                options.filled = true;
                break;

            case ButtonTypes.OUTLINED:
                options.outlined = true;
                break;

            case ButtonTypes.TEXT_ONLY:
                options.text_only =true;
                break;
        }
     return options;},[type]

    );
    return(
        <ButtonWrapper onClick={onClick} {...btnProps}>
            {label}
        </ButtonWrapper>
    )
} ;

export default Button;
