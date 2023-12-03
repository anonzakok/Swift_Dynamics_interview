import React, { FC } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  gap: 1rem;
`;

const MenuButton = styled(Button)`
  height: 100px;
  padding: 0 4rem;
  text-align: start;
`;

const TitleText = styled.p`
  font-size: 16px;
  margin: 0 0 16px;
`;

const Menu: FC = () => {
  const { t } = useTranslation("menu");
  const history = useHistory();

  return (
    <Wrapper>
      <MenuButton onClick={() => history.push("/shape")}>
        <TitleText>{t("menu.shape.title")}</TitleText>
        {t("menu.shape.des")}
      </MenuButton>
      <MenuButton onClick={() => history.push("/form")}>
        <TitleText>{t("menu.form.title")}</TitleText>
        {t("menu.form.des")}
      </MenuButton>
    </Wrapper>
  );
};
export default Menu;
