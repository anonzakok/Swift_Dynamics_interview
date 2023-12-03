import React, { FC, useState } from "react";
import styled from "styled-components";
import Cookies from "universal-cookie";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import _ from "lodash";

const SelectLang = styled(Select)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const ChangeLang: FC = () => {
  const { t } = useTranslation("main");
  const cookies = new Cookies();
  const [language, setLanguage] = useState(
    _.isEmpty(cookies.get("language")) ? "th" : cookies.get("language")
  );

  const onChangeLang = (value: string) => {
    setLanguage(value);
    i18next.changeLanguage(value);
    cookies.set("language", value, { path: "/" });
  };

  return (
    <SelectLang
      defaultValue={language}
      style={{ width: 100 }}
      onChange={onChangeLang}
      options={[
        { value: "th", label: t("lang.th") },
        { value: "en", label: t("lang.en") },
      ]}
    />
  );
};

export default ChangeLang;
