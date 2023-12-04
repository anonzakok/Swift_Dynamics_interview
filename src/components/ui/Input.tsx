import React, { FC } from "react";
import { Input as Antd } from "antd";
import styled from "styled-components";
import InputTemplate from "./InputTemplate";

const StyledInput = styled(Antd)``;

export interface InputProps {
  label: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange: any;
}

const Input: FC<InputProps> = ({
  label,
  value,
  type,
  required = false,
  onChange,
}) => {
  return (
    <InputTemplate label={label} required={required}>
      <StyledInput
        maxLength={70}
        value={value}
        type={type}
        onChange={(e) => {
          onChange(e);
        }}
      />
    </InputTemplate>
  );
};

export default Input;
