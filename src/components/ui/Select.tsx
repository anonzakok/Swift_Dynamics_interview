import React, { FC } from "react";
import { Select as AntdSelect } from "antd";
import styled from "styled-components";
import InputTemplate from "./InputTemplate";

const { Option } = AntdSelect;

const StyledLabel = styled.span`
  font-size: 16px;
  color: black;
`;

const StyledSelect = styled(AntdSelect)`
  width: 100%;
  min-width: 100px;
`;

export interface SelectProps {
  label: string;
  required?: boolean;
  loading?: boolean;
  onChange: any;
  options: any;
  value: string;
}

const Select: FC<SelectProps> = ({
  label,
  options,
  value,
  loading = false,
  required = false,
  onChange,
}) => {
  return (
    <InputTemplate label={label} required={required}>
      <StyledSelect
        allowClear={true}
        loading={loading}
        onChange={(data) => {
          onChange(data);
        }}
        value={value}
      >
        {options &&
          options.map((option, index) => (
            <Option value={option.value} key={option.value}>
              <StyledLabel>{option.label}</StyledLabel>
            </Option>
          ))}
      </StyledSelect>
    </InputTemplate>
  );
};

export default Select;
