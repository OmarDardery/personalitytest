"use client";
import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <div className="hamburger">
        <input className="checkbox" type="checkbox" />
        <svg fill="none" viewBox="0 0 50 50" height={50} width={50}>
          <path className="lineTop line" strokeLinecap="round" strokeWidth={4} stroke="black" d="M6 11L44 11" />
          <path strokeLinecap="round" strokeWidth={4} stroke="black" d="M6 24H43" className="lineMid line" />
          <path strokeLinecap="round" strokeWidth={4} stroke="black" d="M6 37H43" className="lineBottom line" />
        </svg>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .hamburger {
    height: 3em;
    width: 3em;
    transition: transform 0.2s;
    position: relative;
  }
  .hamburger .checkbox {
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  .line {
    transition: 0.5s;
    stroke-width: 0.4em;
    stroke: white;
  }
  .lineTop {
    stroke-dasharray: 40 40;
    stroke-dashoffset: 25;
  }
  .lineBottom {
    stroke-dasharray: 40 40;
    stroke-dashoffset: 60;
  }
  .lineMid {
    stroke-dasharray: 40 40;
  }
  .hamburger .checkbox:checked + svg .lineTop {
    stroke-dashoffset: 0;
    transform-origin: left;
    transform: rotateZ(45deg) translate(-7px, -5px);
  }
  .hamburger .checkbox:checked + svg .lineMid {
    stroke-dashoffset: 40;
  }
  .hamburger .checkbox:checked + svg .lineBottom {
    stroke-dashoffset: 0;
    transform-origin: left;
    transform: rotateZ(-45deg) translate(-0.35em, 0.35em);
  }`;
export default Button;