import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Presentational>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" size="24" strokeWidth="2" />{" "}
        </IconWrapper>
      </Presentational>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Presentational = styled.div`
  padding: 12px 16px;
  border-radius: 8px;

  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
  /**
   * Firefox's default focus stylesheet
   * https://searchfox.org/mozilla-central/source/layout/style/res/ua.css
   */
  ${NativeSelect}:focus-visible + & {
    outline: 1px dotted;
  }
  @supports not (-moz-appearance: none) {
    /**
     * Chrome/Safari's default focus stylesheet
     * https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/core/html/resources/html.css
     */
    ${NativeSelect}:focus + & {
      outline: auto 5px -webkit-focus-ring-color;
      outline-offset: -2px;
    }
  }
`;

const IconWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 24px;
`;

export default Select;
