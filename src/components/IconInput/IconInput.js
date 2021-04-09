import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    verticalPadding: 6,
    underlineStroke: 1,
    iconSize: 16,
    iconStroke: 1,
    inputPadding: 10,
    fontSize: 14,
  },
  large: {
    verticalPadding: 8,
    underlineStroke: 2,
    iconSize: 20,
    iconStroke: 2,
    inputPadding: 16,
    fontSize: 16,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const iconSize = SIZES[size].iconSize;
  return (
    <Wrapper
      style={{
        '--underline-stroke': `${SIZES[size].underlineStroke}px`,
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--icon-size': `${iconSize}px` }}>
        <Icon id={icon} size={iconSize} strokeWidth={SIZES[size].iconStroke} />
      </IconWrapper>
      <Input
        placeholder={placeholder}
        size={size}
        style={{
          '--width': `${width}px`,
          '--vertical-padding': `${SIZES[size].verticalPadding}px`,
          '--input-padding': `${SIZES[size].inputPadding + iconSize}px`,
          '--font-size': `${SIZES[size].fontSize / 16}rem`,
        }}
      ></Input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  border-bottom: var(--underline-stroke) solid ${COLORS.black};

  color: ${COLORS.gray500};
  & * {
    display: inline-block;
    vertical-align: middle;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--icon-size);
  color: ${COLORS.gray700};
`;

const Input = styled.input`
  width: var(--width);
  padding: var(--vertical-padding) 2px;
  padding-left: var(--input-padding);
  border: none;
  font-size: var(--font-size);
`;

export default IconInput;
