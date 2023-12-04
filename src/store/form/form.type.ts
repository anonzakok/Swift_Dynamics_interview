import { IForm, IDataList } from 'shared/modules/form';

export enum EFormAction {
  SEARCH_FORM_REQUEST = 'SEARCH_FORM_REQUEST',
  SEARCH_FORM_SUCCESS = 'SEARCH_FORM_SUCCESS',
  SEARCH_FORM_FAILED = 'SEARCH_FORM_FAILED',
  CREATE_FORM_REQUEST = 'CREATE_FORM_REQUEST',
  CREATE_FORM_SUCCESS = 'CREATE_FORM_SUCCESS',
  CREATE_FORM_FAILED = 'CREATE_FORM_FAILED',
  GET_FORM_REQUEST = 'GET_FORM_REQUEST',
  GET_FORM_SUCCESS = 'GET_FORM_SUCCESS',
  GET_FORM_FAILED = 'GET_FORM_FAILED',
  UPDATE_FORM_REQUEST = 'UPDATE_FORM_REQUEST',
  UPDATE_FORM_SUCCESS = 'UPDATE_FORM_SUCCESS',
  UPDATE_FORM_FAILED = 'UPDATE_FORM_FAILED',
  DELETE_FORM_REQUEST = 'DELETE_FORM_REQUEST',
  DELETE_FORM_SUCCESS = 'DELETE_FORM_SUCCESS',
  DELETE_FORM_FAILED = 'DELETE_FORM_FAILED',
  CLEAR_SELECTED_FORM = 'CLEAR_SELECTED_FORM',
}

interface ISearchFormRequest {
  type: EFormAction.SEARCH_FORM_REQUEST;
}

interface ISearchFormSuccess {
  type: EFormAction.SEARCH_FORM_SUCCESS;
  data: IDataList[];
}

interface ISearchFormFailed {
  type: EFormAction.SEARCH_FORM_FAILED;
  error: string;
}

interface ICreateFormRequest {
  type: EFormAction.CREATE_FORM_REQUEST;
}

interface ICreateFormSuccess {
  type: EFormAction.CREATE_FORM_SUCCESS;
}

interface ICreateFormFailed {
  type: EFormAction.CREATE_FORM_FAILED;
  error: string;
}

interface IGetFormRequest {
  type: EFormAction.GET_FORM_REQUEST;
}

interface IGetFormSuccess {
  type: EFormAction.GET_FORM_SUCCESS;
  data: IForm;
}

interface IGetFormFailed {
  type: EFormAction.GET_FORM_FAILED;
  error: string;
}

interface IUpdateFormRequest {
  type: EFormAction.UPDATE_FORM_REQUEST;
}

interface IUpdateFormSuccess {
  type: EFormAction.UPDATE_FORM_SUCCESS;
}

interface IUpdateFormFailed {
  type: EFormAction.UPDATE_FORM_FAILED;
  error: string;
}

interface IDeleteFormRequest {
  type: EFormAction.DELETE_FORM_REQUEST;
}

interface IDeleteFormSuccess {
  type: EFormAction.DELETE_FORM_SUCCESS;
}

interface IDeleteFormFailed {
  type: EFormAction.DELETE_FORM_FAILED;
  error: string;
}

interface IClearSelectedForm {
  type: EFormAction.CLEAR_SELECTED_FORM;
}

export type TFormActionTypes =
  | ISearchFormRequest
  | ISearchFormSuccess
  | ISearchFormFailed
  | ICreateFormRequest
  | ICreateFormSuccess
  | ICreateFormFailed
  | IGetFormRequest
  | IGetFormSuccess
  | IGetFormFailed
  | IUpdateFormRequest
  | IUpdateFormSuccess
  | IUpdateFormFailed
  | IDeleteFormRequest
  | IDeleteFormSuccess
  | IDeleteFormFailed
  | IClearSelectedForm;
