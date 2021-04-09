/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    height: '24px',
    borderRadius: '8px',
    padding: '4px',
  },
  medium: {
    height: '12px',
    borderRadius: '4px',
  },
  small: {
    height: '8px',
    borderRadius: '4px',
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      size={size}
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar style={{ '--progress-value': `${value}%` }} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: ${(props) => SIZES[props.size].height};
  border-radius: ${(props) => SIZES[props.size].borderRadius};
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: ${(props) => SIZES[props.size].padding};
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
`;

const Bar = styled.div`
  width: var(--progress-value);
  height: 100%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
