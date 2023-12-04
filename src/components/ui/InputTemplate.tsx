import React, { FC, ReactElement } from "react";
import styled from "styled-components";

const Label = styled.label`
  min-width: max-content;
`;

const StyledInputTemplate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
`;

const RequiredLabel = styled(Label)`
  color: red;
`;

export interface InputTemplateProps {
  label: string;
  required: boolean;
  children: ReactElement;
}

const InputTemplate: FC<InputTemplateProps> = ({
  label,
  children,
  required,
}) => {
  return (
    <StyledInputTemplate>
        {required && <RequiredLabel>*</RequiredLabel>}
      <Label>
        {label} :
      </Label>
      {children}
    </StyledInputTemplate>
  );
};

export default InputTemplate;
