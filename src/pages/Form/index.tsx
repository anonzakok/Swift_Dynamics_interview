import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import LayoutTemplate from "components/layout/LayoutTemplate";
import { Button, Radio, DatePicker } from "antd";
import Input from "components/ui/Input";
import Select from "components/ui/Select";
import TableDataList from "./Table";
import { IForm, IDataList, INITIAL_FORM } from "shared/modules/form";
import {
  create,
  deleteForm,
  deleteFormMultiple,
  getForm,
  searchDataList,
  updateForm,
} from "store/form/form.action";
import { useDispatch, useSelector } from "react-redux";
import { IReducer } from "store";
import dayjs from "dayjs";

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

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Form: FC = () => {
  const { t } = useTranslation("form");
  const dispatch: any = useDispatch();
  const history = useHistory();

  const [form, setForm] = useState<IForm>({ ...INITIAL_FORM });
  const [mode, setMode] = useState<string>("create");
  const [formId, setFormId] = useState<string>("");

  const selectForm = useSelector((f: IReducer) => f.form.selected);
  const dataList: IDataList[] = useSelector((f: IReducer) => f.form.all);
  const isTableLoading = useSelector((f: IReducer) => f.form.isTableLoading);

  useEffect(() => {
    dispatch(searchDataList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFormId(selectForm.key);
    setForm(selectForm);
  }, [selectForm]);

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

  const onClearAll = () => {
    setForm({ ...INITIAL_FORM });
    setMode("create");
  };

  const onEdit = (id: string) => {
    setMode("edit");
    dispatch(getForm(id));
  };

  const onDelete = (id: string) => {
    dispatch(deleteForm(id, cb));
  };

  const onDeleteMultiple = (id: string[]) => {
    dispatch(deleteFormMultiple(id, cb));
  };

  const onSave = () => {
    const upsertForm = mode === "edit" ? updateForm(formId) : create;
    dispatch(upsertForm(form, cb));
    onClearAll();
  };

  const cb = (): void => {
    dispatch(searchDataList());
  };

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
                value={form.prefix || ""}
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
              <DatePicker
                value={form.birthday ? dayjs(form.birthday) : null}
                onChange={onChange("birthday")}
              />
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
              value={form.nationality || ""}
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
            <Label>{t("form.input.gender.label")} :</Label>
            <Radio.Group onChange={onInput("gender")} value={form.gender}>
              <Radio value={"male"}>{t("form.input.gender.option.male")}</Radio>
              <Radio value={"female"}>
                {t("form.input.gender.option.female")}
              </Radio>
              <Radio value={"not_specified"}>
                {t("form.input.gender.option.not_specified")}
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
          <ButtonWrapper>
            <Button onClick={() => onClearAll()}>
              {t("form.button.clear")}
            </Button>
            <Button onClick={() => onSave()}>{t("form.button.save")}</Button>
          </ButtonWrapper>
        </WrapperForm>
        <TableDataList
          dataList={dataList}
          isTableLoading={isTableLoading}
          onEdit={onEdit}
          onDelete={onDelete}
          onDeleteMultiple={onDeleteMultiple}
        />
      </Wrapper>
    </LayoutTemplate>
  );
};
export default Form;
