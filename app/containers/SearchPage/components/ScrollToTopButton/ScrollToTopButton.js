import React from "react";
import { withRouter } from "react-router";
import styled from 'styled-components';
import Img from "react-cool-img";
import ARROW from 'images/arrow-down.svg'
import { useEffect } from "react";
import { useState } from "react";
const Container = styled.div`
position: fixed;
    background-color: var(--gray-light);
    width: 50px;
    border-radius: 50%;
    height: 50px;
    margin-bottom: 0;
    bottom: 0;
    right: 0px;
    margin: 2rem;
    z-index: 100;
    display: flex;
    justify-content: center;
    transform: rotate(180deg);
    cursor: pointer;`;

function ScrollToTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        handleScroll(); // initialize state

        // Add all listeners which can start scroll
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    function handleScroll() {
        if (window.pageYOffset > 1000) {
            setShow(true);
        } else {
            setShow(false);
        }
    }
    function scrollTo(x,y) {
        window.scroll({
            top: x, 
            left: y, 
            behavior: 'smooth'
          })
    }

    return show && <Container onClick={() => scrollTo(0, 0)}>
				<Img src={ARROW}></Img>
			</Container>;
}

export default ScrollToTopButton;