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

  &:focus {
    outline: none;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
  ${NativeSelect}:focus-visible + & {
    /**
     * Firefox's default stylesheet
     * https://searchfox.org/mozilla-central/source/layout/style/res/ua.css
     */
    outline: 1px dotted;

    /**
     * Chrome/Safari's default stylesheet
     * https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/core/html/resources/html.css
     */
    outline: auto 5px -webkit-focus-ring-color;
  }
  @supports not (-moz-appearance: none) {
    & {
      outline-offset: -2px;
    }
  }
  @supports (-webkit-hyphens: none) {
    /** Safari doesn't support :focus-visible. */
    ${NativeSelect}:focus + & {
      outline: auto 5px -webkit-focus-ring-color;
    }
  }
`;

const IconWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 24px;
`;

export default Select;
