import React, { FC } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div``;

const Shape: FC = () => {
  const { t } = useTranslation("form");

  return (
    <Wrapper>
      <p>Shape page.</p>
    </Wrapper>
  );
};
export default Shape;
