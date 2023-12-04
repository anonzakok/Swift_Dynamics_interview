import { IForm, IFormState, INITIAL_FORM_STATE } from "shared/modules/form";
import { TFormActionTypes, EFormAction } from "./form.type";

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  state: IFormState = INITIAL_FORM_STATE,
  action: TFormActionTypes
): IFormState => {
  switch (action.type) {
    case EFormAction.SEARCH_FORM_REQUEST:
      return {
        ...state,
        isButtonLoading: true,
        isPageLoading: false,
        isTableLoading: true,
      };
    case EFormAction.SEARCH_FORM_SUCCESS:
      return {
        ...state,
        all: action.data,
        isButtonLoading: false,
        isPageLoading: false,
        isTableLoading: false,
      };
    case EFormAction.SEARCH_FORM_FAILED:
      return {
        ...state,
        error: action.error,
        isButtonLoading: false,
        isPageLoading: false,
        isTableLoading: false,
      };
    case EFormAction.CREATE_FORM_REQUEST:
      return {
        ...state,
        isButtonLoading: false,
        isPageLoading: true,
      };
    case EFormAction.CREATE_FORM_SUCCESS:
      return { ...state };
    case EFormAction.CREATE_FORM_FAILED:
      return {
        ...state,
        error: action.error,
        isButtonLoading: false,
        isPageLoading: false,
      };
    case EFormAction.GET_FORM_REQUEST:
      return {
        ...state,
        isButtonLoading: false,
        isPageLoading: true,
      };
    case EFormAction.GET_FORM_SUCCESS:
      return {
        ...state,
        selected: action.data,
        isButtonLoading: false,
        isPageLoading: false,
      };
    case EFormAction.GET_FORM_FAILED:
      return {
        ...state,
        error: action.error,
        isButtonLoading: false,
        isPageLoading: false,
      };
    case EFormAction.UPDATE_FORM_REQUEST:
      return {
        ...state,
        isButtonLoading: false,
        isPageLoading: true,
      };
    case EFormAction.UPDATE_FORM_SUCCESS:
      return {
        ...state,
        isButtonLoading: false,
        isPageLoading: false,
      };
    case EFormAction.UPDATE_FORM_FAILED:
      return {
        ...state,
        error: action.error,
        isButtonLoading: false,
        isPageLoading: false,
      };
    case EFormAction.DELETE_FORM_REQUEST:
      return {
        ...state,
        isButtonLoading: false,
        isPageLoading: true,
      };
    case EFormAction.DELETE_FORM_SUCCESS:
      return {
        ...state,
        isButtonLoading: false,
        isPageLoading: false,
      };
    case EFormAction.DELETE_FORM_FAILED:
      return {
        ...state,
        error: action.error,
        isButtonLoading: false,
        isPageLoading: false,
      };
    case EFormAction.CLEAR_SELECTED_FORM:
      return {
        ...state,
        selected: {} as IForm,
        isButtonLoading: false,
        isPageLoading: false,
      };
    default: {
      return { ...state };
    }
  }
};
