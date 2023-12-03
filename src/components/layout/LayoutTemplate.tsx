import React, { FC, ReactElement } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { Content, Header } from "antd/es/layout/layout";

const HeaderStyle = styled(Header)`
  text-align: start;
  height: 50px;
  font-size: 28px;
  font-weight: bold;
  background: linear-gradient(90deg, #6eda78 0%, #ffa200 100%);
`;

const ContentStyle = styled(Content)`
  position: relative;
  height: calc(100vh - 50px);
  padding: 20px 50px;
  background: linear-gradient(90deg, #6eda78 0%, #ffa200 100%);
`;

export interface LayoutTemplateProps {
  title: string;
  children: ReactElement;
}

const LayoutTemplate: FC<LayoutTemplateProps> = ({ title = "", children }) => {
  return (
    <Layout>
      <HeaderStyle>{title}</HeaderStyle>
      <ContentStyle>{children}</ContentStyle>
    </Layout>
  );
};

export default LayoutTemplate;
