import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    verticalPadding: 6,
    underlineStroke: 1,
    iconSize: 15,
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
  const inputWidth = width - iconSize - 4;
  return (
    <Wrapper
      style={{
        '--width': `${width}px`,
        '--vertical-padding': `${SIZES[size].verticalPadding}px`,
        '--underline-stroke': `${SIZES[size].underlineStroke}px`,
      }}
    >
      <IconWrapper>
        <Icon id={icon} size={iconSize} strokeWidth={SIZES[size].iconStroke} />
      </IconWrapper>
      <Input
        placeholder={placeholder}
        size={size}
        style={{
          '--input-width': `${inputWidth}px`,
          '--input-padding': `${SIZES[size].inputPadding}px`,
          '--font-size': `${SIZES[size].fontSize / 16}rem`,
        }}
      ></Input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: var(--width);
  padding: var(--vertical-padding) 2px;
  border-bottom: var(--underline-stroke) solid ${COLORS.black};

  color: ${COLORS.gray500};
  & * {
    display: inline-block;
    vertical-align: middle;
  }
`;

const IconWrapper = styled.div`
  color: ${COLORS.gray700};
`;

const Input = styled.input`
  width: var(--input-width);
  padding-left: var(--input-padding);
  font-size: var(--font-size);

  &,
  &:focus {
    border: none;
  }
`;

export default IconInput;
