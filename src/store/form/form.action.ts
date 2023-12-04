import { IForm, IDataList, INITIAL_FORM } from "shared/modules/form";
import { TFormActionTypes, EFormAction } from "./form.type";
import i18next from "i18n";

export enum LocalStorageKey {
  DATA = "dataList",
}

export const searchDataList = (cb?: Function) => {
  return async (dispatch: (arg0: TFormActionTypes) => void) => {
    dispatch({ type: EFormAction.SEARCH_FORM_REQUEST });

    const dataList: IDataList[] = localStorage.getItem(LocalStorageKey.DATA)
      ? JSON.parse(localStorage.getItem(LocalStorageKey.DATA) || "")
      : [];

    dispatch(searchDataListSuccess(dataList, cb));
  };
};

const searchDataListSuccess = (
  data: IDataList[],
  cb?: Function
): TFormActionTypes => {
  if (cb) cb();
  return {
    type: EFormAction.SEARCH_FORM_SUCCESS,
    data,
  };
};

export const create = (data: IForm, cb?: Function) => {
  data.prefix_text =
    data.prefix === "mr"
      ? "นาย"
      : data.prefix === "ms"
      ? "นางสาว"
      : data.prefix === "mrs"
      ? "นาง"
      : "";
  data.full_name = data.prefix_text + data.first_name + " " + data.last_name;
  data.nationality_text =
    data.nationality === "thai"
      ? "ไทย"
      : data.nationality === "foreign"
      ? "ต่างชาติ"
      : "";
  data.gender_text =
    data.gender === "male"
      ? "ชาย"
      : data.gender === "female"
      ? "หญิง"
      : data.gender === "not_specified"
      ? "ไม่ระบุ"
      : "";

  return (dispatch) => {
    dispatch({ type: EFormAction.CREATE_FORM_REQUEST });

    try {
      var a: any = [];
      a = localStorage.getItem(LocalStorageKey.DATA)
        ? JSON.parse(localStorage.getItem(LocalStorageKey.DATA) || "")
        : [];
      data.key = a.length + 1;
      a.push(data);
      localStorage.setItem(LocalStorageKey.DATA, JSON.stringify(a));

      dispatch(createSuccess(cb));
    } catch (error) {
      dispatch(createFailed("error"));
    }
  };
};

const createSuccess = (cb?: Function): TFormActionTypes => {
  alert(i18next.t("main:alert.success.create"));
  if (cb) cb();
  return {
    type: EFormAction.CREATE_FORM_SUCCESS,
  };
};

const createFailed = (error: string): TFormActionTypes => {
  alert(error);
  return {
    type: EFormAction.CREATE_FORM_FAILED,
    error,
  };
};

export const getForm = (id: string, cb?: Function) => {
  return async (dispatch: (arg0: TFormActionTypes) => void) => {
    dispatch({ type: EFormAction.GET_FORM_REQUEST });

    try {
      const res = localStorage.getItem(LocalStorageKey.DATA)
        ? JSON.parse(localStorage.getItem(LocalStorageKey.DATA) || "")
        : [];

      dispatch(
        getSuccess(id ? res.find((r) => r.key === id) : { ...INITIAL_FORM }, cb)
      );
    } catch (error) {
      dispatch(getFailed("error"));
    }
  };
};

const getSuccess = (data: IForm, cb?: Function): TFormActionTypes => {
  if (cb) cb();
  return {
    type: EFormAction.GET_FORM_SUCCESS,
    data,
  };
};

const getFailed = (error: string): TFormActionTypes => {
  return {
    type: EFormAction.GET_FORM_FAILED,
    error,
  };
};

export const updateForm = (id: string) => (data: IForm, cb?: Function) => {
  data.prefix_text =
    data.prefix === "mr"
      ? "นาย"
      : data.prefix === "ms"
      ? "นางสาว"
      : data.prefix === "mrs"
      ? "นาง"
      : "";
  data.full_name = data.prefix_text + data.first_name + " " + data.last_name;
  data.nationality_text =
    data.nationality === "thai"
      ? "ไทย"
      : data.nationality === "foreign"
      ? "ต่างชาติ"
      : "";
  data.gender_text =
    data.gender === "male"
      ? "ชาย"
      : data.gender === "female"
      ? "หญิง"
      : data.gender === "not_specified"
      ? "ไม่ระบุ"
      : "";

  return async (dispatch: (arg0: TFormActionTypes) => void) => {
    dispatch({ type: EFormAction.UPDATE_FORM_REQUEST });

    try {
      var a: any = [];
      a = localStorage.getItem(LocalStorageKey.DATA)
        ? JSON.parse(localStorage.getItem(LocalStorageKey.DATA) || "")
        : [];

      const index = a.findIndex((e) => e.key === id);
      a[index] = data;
      localStorage.setItem(LocalStorageKey.DATA, JSON.stringify(a));

      dispatch(updateSuccess(cb));
    } catch (error) {
      dispatch(updateFailed("error"));
    }
  };
};

const updateSuccess = (cb?: Function): TFormActionTypes => {
  alert(i18next.t("main:alert.success.edit"));
  if (cb) cb();
  return {
    type: EFormAction.UPDATE_FORM_SUCCESS,
  };
};

const updateFailed = (error: string): TFormActionTypes => {
  alert(error);

  return {
    type: EFormAction.UPDATE_FORM_FAILED,
    error,
  };
};

export const deleteForm = (id: string, cb?: Function) => {
  return async (dispatch: (arg0: TFormActionTypes) => void) => {
    dispatch({ type: EFormAction.DELETE_FORM_REQUEST });

    try {
      var a: any = [];
      a = localStorage.getItem(LocalStorageKey.DATA)
        ? JSON.parse(localStorage.getItem(LocalStorageKey.DATA) || "")
        : [];

      const index = a.findIndex((e) => e.key === id);
      a.splice(index, 1);
      localStorage.setItem(LocalStorageKey.DATA, JSON.stringify(a));

      dispatch(deleteSuccess(cb));
    } catch (error) {
      dispatch(deleteFormFailed("error"));
    }
  };
};

export const deleteFormMultiple = (id: string[], cb?: Function) => {
  return async (dispatch: (arg0: TFormActionTypes) => void) => {
    dispatch({ type: EFormAction.DELETE_FORM_REQUEST });

    try {
      var formId = "";
      for (let i = 0; i < id.length; i++) {
        formId = id[i];
        var a: any = [];
        a = localStorage.getItem(LocalStorageKey.DATA)
          ? JSON.parse(localStorage.getItem(LocalStorageKey.DATA) || "")
          : [];

        // eslint-disable-next-line no-loop-func
        const index = a.findIndex((e) => e.key === formId);
        a.splice(index, 1);
        localStorage.setItem(LocalStorageKey.DATA, JSON.stringify(a));
      }

      dispatch(deleteSuccess(cb));
    } catch (error) {
      dispatch(deleteFormFailed("error"));
    }
  };
};

const deleteSuccess = (cb): TFormActionTypes => {
  alert(i18next.t("main:alert.success.delete"));
  if (cb) cb();
  return {
    type: EFormAction.UPDATE_FORM_SUCCESS,
  };
};

const deleteFormFailed = (error: string): TFormActionTypes => {
  alert(error);
  return {
    type: EFormAction.UPDATE_FORM_FAILED,
    error,
  };
};

// Clear selected state
export const clearSelectedForm = (): TFormActionTypes => {
  return {
    type: EFormAction.CLEAR_SELECTED_FORM,
  };
};
