export interface IForm {
  key: string;
  prefix: string | null;
  prefix_text: string | null;
  first_name: string;
  last_name: string;
  full_name: string;
  birthday: string | null;
  nationality: string | null;
  nationality_text: string;
  id_card: string;
  gender: string | null;
  gender_text: string;
  phone: string;
  passport: string;
  expected_salary: string;
}

export interface IDataList {
  key: string;
  prefix: string | null;
  prefix_text: string;
  first_name: string;
  last_name: string;
  full_name: string;
  birthday: string | null;
  nationality: string | null;
  nationality_text: string;
  id_card: string;
  gender: string | null;
  gender_text: string;
  phone: string;
  passport: string;
  expected_salary: string;
}

export interface IFormState {
  all: IDataList[];
  selected: IForm;
  error?: string;
  isPageLoading: boolean;
  isButtonLoading: boolean;
  isTableLoading: boolean;
}
