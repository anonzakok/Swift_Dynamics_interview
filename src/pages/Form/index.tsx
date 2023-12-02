import React, { FC } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div``;

const Form: FC = () => {
  const { t } = useTranslation("form");

  return (
    <Wrapper>
      <p>Form page.</p>
    </Wrapper>
  );
};
export default Form;
