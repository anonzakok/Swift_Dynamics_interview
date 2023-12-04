import { IForm, IFormState } from "./form.interface";

export const INITIAL_FORM: IForm = {
  key: "",
  prefix: null,
  prefix_text: "",
  first_name: "",
  last_name: "",
  full_name: "",
  birthday: null,
  nationality: null,
  nationality_text: "",
  id_card: "",
  gender: null,
  gender_text: "",
  phone: "",
  passport: "",
  expected_salary: "",
};

export const INITIAL_FORM_STATE: IFormState = {
  all: [],
  selected: { ...INITIAL_FORM },
  error: undefined,
  isButtonLoading: false,
  isPageLoading: false,
  isTableLoading: false,
};
