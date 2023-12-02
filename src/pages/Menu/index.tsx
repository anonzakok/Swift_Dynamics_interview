import React, { FC } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div``;

const Menu: FC = () => {
  const { t } = useTranslation("form");

  return (
    <Wrapper>
      <p>Menu page.</p>
    </Wrapper>
  );
};
export default Menu;
