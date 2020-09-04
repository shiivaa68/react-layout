import React, { useState, useEffect } from 'react';
import {
    SelectWrapper,
    Option,
    ListWrapper,
    Selected
} from './styles'
import ARROW_DOWN from 'images/arrow-down.svg';
import Img from 'react-cool-img';
import { useCallback } from 'react';

const Select = ({items, selectedId, handleSelect, placeholder}) => {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState({});
    const toggle = () => {
        setOpen(!open);
    }

    useEffect(() => {
        setSelected(items.find(e => e.id === selectedId));
    }, [selectedId, items]);

    const select = (item) => {
        handleSelect(item);
        setOpen(false)
    }

    const getLabel = useCallback((item) => {
        if (item.title)
            return item.title;
        if (item.label)
            return item.label;
    })
    return <SelectWrapper onClick={toggle}>
        <Selected>
            {selected ? getLabel(selected) : placeholder}
            {!open && <Img src={ARROW_DOWN}/>}
        </Selected>
        {
            open && <ListWrapper>
                { items.map(item => <Option onClick={() => select(item)} key={item.id} keepActive={selectedId === item.id}>
                    {getLabel(item)}
                </Option>)}
            </ListWrapper>
        }
    </SelectWrapper>
}

export default Select;