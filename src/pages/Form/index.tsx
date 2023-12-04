import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import LayoutTemplate from "components/layout/LayoutTemplate";
import { Button, Radio, DatePicker } from "antd";
import Input from "components/ui/Input";
import Select from "components/ui/Select";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const WrapperForm = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 1rem;
  margin-top: 1rem;
`;
const HomeButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
const Label = styled.label`
  min-width: max-content;
`;
const RequiredLabel = styled(Label)`
  color: red;
`;
const PrefixSelect = styled(Select)`
  min-width: 100px !important;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export interface IForm {
  prefix: string;
  first_name: string;
  last_name: string;
  birthday: string;
  nationality: string;
  id_card: string;
  sex: string;
  phone: string;
  passport: string;
  expected_salary: string;
}

export const I_FORM: IForm = {
  prefix: "",
  first_name: "",
  last_name: "",
  birthday: "",
  nationality: "",
  id_card: "",
  sex: "",
  phone: "",
  passport: "",
  expected_salary: "",
};

const Form: FC = () => {
  const { t } = useTranslation("form");
  const history = useHistory();
  const [form, setForm] = useState<IForm>({ ...I_FORM });

  const onInput = (field) => (e) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const onChange = (field) => (value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  console.log(form);
  return (
    <LayoutTemplate title={t("form.title")}>
      <Wrapper>
        <HomeButton onClick={() => history.push("/")}>
          {t("form.home")}
        </HomeButton>
        <WrapperForm>
          <Row>
            <Row>
              <PrefixSelect
                label={t("form.input.prefix.label")}
                options={[
                  { value: "mr", label: t("form.input.prefix.option.mr") },
                  { value: "ms", label: t("form.input.prefix.option.ms") },
                  { value: "mrs", label: t("form.input.prefix.option.mrs") },
                ]}
                value={form.prefix}
                onChange={onChange("prefix")}
                required
              />
              <Input
                label={t("form.input.first_name.label")}
                value={form.first_name}
                onChange={onInput("first_name")}
                required
              />
            </Row>
            <Input
              label={t("form.input.last_name.label")}
              value={form.last_name}
              onChange={onInput("last_name")}
              required
            />
          </Row>

          <Row>
            <Row>
              <RequiredLabel>{"*"}</RequiredLabel>
              <Label>{t("form.input.birthday.label")} : </Label>
              <DatePicker onChange={onChange("birthday")} />
            </Row>
            <Select
              label={t("form.input.nationality.label")}
              options={[
                {
                  value: "thai",
                  label: t("form.input.nationality.option.thai"),
                },
                {
                  value: "foreign",
                  label: t("form.input.nationality.option.foreign"),
                },
              ]}
              value={form.nationality}
              onChange={onChange("nationality")}
              required
            />
          </Row>
          <Row>
            <Input
              label={t("form.input.id_card.label")}
              value={form.id_card}
              onChange={onInput("id_card")}
              required
            />
          </Row>
          <Row>
            <RequiredLabel>{"*"}</RequiredLabel>
            <Label>{t("form.input.sex.label")} :</Label>
            <Radio.Group onChange={onInput("sex")} value={form.sex}>
              <Radio value={"male"}>{t("form.input.sex.option.male")}</Radio>
              <Radio value={"female"}>
                {t("form.input.sex.option.female")}
              </Radio>
              <Radio value={"not_specified"}>
                {t("form.input.sex.option.not_specified")}
              </Radio>
            </Radio.Group>
          </Row>
          <Row>
            <Input
              label={t("form.input.phone.label")}
              value={form.phone}
              onChange={onInput("phone")}
              required
            />
          </Row>
          <Row>
            <Input
              label={t("form.input.passport.label")}
              value={form.passport}
              onChange={onInput("passport")}
              required
            />
          </Row>
          <Row>
            <Input
              label={t("form.input.expected_salary.label")}
              value={form.expected_salary}
              onChange={onInput("expected_salary")}
              required
            />
          </Row>
        </WrapperForm>
      </Wrapper>
    </LayoutTemplate>
  );
};
export default Form;
