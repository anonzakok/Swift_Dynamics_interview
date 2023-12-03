// import i18next from 'i18next';
// import qs from 'qs';
// import axios from 'shared/utils/axios';
// import { ILoginForm } from 'shared/modules/auth/login';
// import { StatusAlertWithHeader } from 'components/ui/Alert';
// import { AlertStatus } from 'components/ui/enum/alert.enum';
// import { ISetPasswordForm } from 'shared/modules/auth/set-password';
// import { IForgotPasswordForm } from 'shared/modules/auth/forgot-password';
// import { clearProfileState } from 'store/profile/profile.action';
// import { removeWithExpiry, setWithExpiry } from 'shared/utils/local-storage-TTL';

export enum LocalStorageKey {
  TOKEN = 'token',
  EXPIRES = 'expires',
  INFLUENCER_ID = 'influencer_id',
  PROFILE_IMG = 'profile_img',
  NAME = 'name',
  SESSION_TOKEN = 'session_token',
  CONVERTSION_REPORT = 'conversion_report',
}

export enum LocalStorageKeyCMS {
  USER_ID = 'CMS_user_id',
  PROFILE_IMG = 'CMS_profile_img',
  MENU = 'CMS_menu',
  NAME = 'CMS_name',
}

// action
export enum ELoginAction {
  REQUEST = 'LOGIN_REQUEST',
  SUCCESS = 'LOGIN_SUCCESS',
  FAILED = 'LOGIN_FAILED',
  NOT_LOGIN = 'NOT_LOGIN',
  ALREADY_LOGIN = 'ALREADY_LOGIN',
}

export enum ELoginCMSAction {
  REQUEST_CMS = 'LOGIN_REQUEST_CMS',
  SUCCESS_CMS = 'LOGIN_SUCCESS_CMS',
  FAILED_CMS = 'LOGIN_FAILED_CMS',
  NOT_LOGIN_CMS = 'NOT_LOGIN_CMS',
  ALREADY_LOGIN_CMS = 'ALREADY_LOGIN_CMS',
}

export enum ELogoutAction {
  REQUEST = 'LOGOUT_REQUEST',
  SUCCESS = 'LOGOUT_SUCCESS',
  SUCCESS_CMS = 'LOGOUT_SUCCESS_CMS',
  FAILED = 'LOGOUT_FAILED',
}
export enum EVerifyAccountAction {
  REQUEST = 'VERIFY_REQUEST',
  SUCCESS = 'VERIFY_SUCCESS',
  FAILED = 'VERIFY_FAILED',
}

export enum ESetPassword {
  REQUEST = 'SET_PASSWORD_REQUEST',
  SUCCESS = 'SET_PASSWORD_SUCCESS',
  FAILED = 'SET_PASSWORD_ERROR',
}
export enum EForgotPassword {
  REQUEST = 'FORGOT_PASSWORD_REQUEST',
  SUCCESS = 'FORGOT_PASSWORD_SUCCESS',
  FAILED = 'FORGOT_PASSWORD_FAILED',
}
export interface IUserInfo {
  full_name: string;
  id: string;
  profile_picture: string;
  username: string;
}
export interface IAuthenticateState {
  // all: ILoginForm;
  me: IUserInfo;
  isAuthenticate: boolean;
  isAuthenticateCMS: boolean;
  isPageLoading: boolean;
  forgotPassword?: any;
  error?: any;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case ELoginAction.ALREADY_LOGIN:
      return {
        ...state,
        me: action.me,
        isAuthenticate: true,
        isPageLoading: false,
      };
    case ELoginAction.NOT_LOGIN:
      return {
        ...state,
        isAuthenticate: false,
        isPageLoading: false,
      };
    case ELoginAction.REQUEST:
      return {
        ...state,
        isAuthenticate: false,
        isPageLoading: true,
      };
    case ELoginAction.SUCCESS:
      return {
        ...state,
        all: action.data,
        isAuthenticate: true,
        isPageLoading: false,
        error: undefined,
      };
    case ELoginAction.FAILED:
      return {
        ...state,
        isAuthenticate: false,
        error: action.error,
        isPageLoading: false,
      };
    case ELogoutAction.REQUEST:
      return {
        ...state,
        isAuthenticate: true,
        isAuthenticateCMS: true,
        isPageLoading: true,
      };
    case ELogoutAction.SUCCESS:
      return {
        ...state,
        isAuthenticate: false,
        isPageLoading: false,
      };
    case ELogoutAction.FAILED:
      return {
        ...state,
        isPageLoading: false,
      };
    case ESetPassword.REQUEST:
      return {
        ...state,
        isAuthenticate: false,
        isPageLoading: true,
      };
    case ESetPassword.SUCCESS:
      return {
        ...state,
        isAuthenticate: false,
        isPageLoading: false,
      };
    case ESetPassword.FAILED:
      return {
        ...state,
        isAuthenticate: false,
        error: action.error,
        isPageLoading: false,
      };
    case EForgotPassword.REQUEST:
      return {
        ...state,
        isPageLoading: true,
        isAuthenticate: false,
      };
    case EForgotPassword.SUCCESS:
      return {
        ...state,
        isPageLoading: false,
        isAuthenticate: false,
      };
    case EForgotPassword.FAILED:
      return {
        ...state,
        isPageLoading: false,
        isAuthenticate: false,
        error: action.error,
      };
    case ELoginCMSAction.REQUEST_CMS:
      return {
        ...state,
        isAuthenticateCMS: false,
        isPageLoading: true,
      };
    case ELoginCMSAction.ALREADY_LOGIN_CMS:
      return {
        ...state,
        isAuthenticateCMS: true,
        isPageLoading: false,
      };
    case ELoginCMSAction.NOT_LOGIN_CMS:
      return {
        ...state,
        isAuthenticateCMS: false,
        isPageLoading: true,
      };
    case ELogoutAction.SUCCESS_CMS:
      return {
        ...state,
        isAuthenticateCMS: false,
        isPageLoading: true,
      };

    default:
      return state;
  }
};

// export const verifyToken = () => {
//   return (dispatch) => {
//     dispatch({ type: ELoginAction.REQUEST });
//     axios
//       .get('/blog/api/check_login')
//       .then((response) => {
//         if (response.data.status === "SUCCESS") {
//           dispatch(alreadyLogin(response.data.userdetails));
//         } else {
//           dispatch(notLogin());
//         }
//       })
//       .catch((error) => {
//         dispatch(notLogin());
//       });
//   }
// };

// export const alreadyLogin = (data?: any) => {
//   if (data) {
//     setWithExpiry(LocalStorageKey.TOKEN, data?.access_token);
//     // setWithExpiry(LocalStorageKey.EXPIRES, data?.expires);
//     setWithExpiry(LocalStorageKey.PROFILE_IMG, data?.user.profile_picture);
//     setWithExpiry(LocalStorageKey.NAME, data?.user.full_name);
//     setWithExpiry(LocalStorageKey.INFLUENCER_ID, data?.influencer_id);
//     setWithExpiry(LocalStorageKey.CONVERTSION_REPORT, data?.conversion_report || false);
//     setWithExpiry(LocalStorageKey.SESSION_TOKEN, data?.session_token);
//   }
//   const me = data?.user;
//   return {
//     type: ELoginAction.ALREADY_LOGIN,
//     me
//   };
// };

// export const notLogin = () => {
//   return {
//     type: ELoginAction.NOT_LOGIN,
//   };
// };

// export const logout = (cb?: Function) => {
//   return async (dispatch: any) => {
//     dispatch({ type: ELoginAction.REQUEST });
//     try {
//       await axios.post('/blog/api/logout', {
//       });
//       dispatch(logoutSuccess(cb));
//     } catch (error) {
//       dispatch(logoutSuccess());
//     }
//   };
// };



// export const logoutSuccess = (cb?: Function) => {
//   removeWithExpiry(LocalStorageKey.TOKEN);
//   removeWithExpiry(LocalStorageKey.INFLUENCER_ID);
//   removeWithExpiry(LocalStorageKey.CONVERTSION_REPORT);
//   removeWithExpiry(LocalStorageKey.PROFILE_IMG);
//   removeWithExpiry(LocalStorageKey.NAME);
//   clearProfileState(); //reset store profile
//   if (cb) cb();
//   return {
//     type: ELogoutAction.SUCCESS,
//   };
// };

// export const logoutFailed = () => {
//   return {
//     type: ELogoutAction.FAILED,
//   };
// };


// export const onPreLogin = (cb?: Function) => {
//   return async (dispatch: any) => {
//     dispatch({ type: ELoginAction.REQUEST });
//     try {
//       await axios.post('/blog/api/logout', qs.stringify({ 'redirect': false }));
//       dispatch(preLoginSuccess(cb));
//     } catch (error) {
//       dispatch(preLoginFailed());
//     }
//   };
// };

// export const preLoginSuccess = (cb?: Function) => {
//   if (cb) cb();
//   return {
//     type: ELoginAction.REQUEST,
//   };
// };

// export const preLoginFailed = () => {
//   return {
//     type: ELoginAction.FAILED,
//   };
// };


// // POST /signin
// export const onSignin = (data: ILoginForm, cb?: Function) => {
//   if (!data.email || !data.password) {
//     return (dispatch) => {
//       dispatch(onSigninFailed(i18next.t('auth:login_page.form.message.failed')));
//     };
//   }
//   const dataLogin = {
//     influencer_email: data.email.replaceAll(/\s/g, ""),
//     influencer_password: data.password,
//   };
//   return (dispatch) => {
//     dispatch({ type: ELoginAction.REQUEST });
//     axios
//       .post('/blog/api/login_email/signin', qs.stringify(dataLogin))
//       .then((response) => {
//         dispatch(onSigninSuccess(response.data, cb));
//       })
//       .catch((error) => {
//         dispatch(onSigninFailed(error));
//       });
//   };
// };

// export const onSigninSuccess = (data, cb?: Function) => {
//   setWithExpiry(LocalStorageKey.TOKEN, data?.access_token);
//   setWithExpiry(LocalStorageKey.INFLUENCER_ID, data?.influencer_id);
//   setWithExpiry(LocalStorageKey.PROFILE_IMG, data?.profile_picture);
//   if (cb) cb(data?.influencer_status, data?.haved_social, data?.influencer_id);
//   return {
//     type: ELoginAction.SUCCESS,
//   };
// };

// export const onSigninFailed = (error) => {
//   if (error.response?.data === 'password is incorrect') {
//     StatusAlertWithHeader('รหัสผ่านไม่ถูกต้อง', 'กรุณาลองใหม่อีกครั้ง', AlertStatus.Error);
//   } else if (error.response?.data === 'email not found') {
//     StatusAlertWithHeader('ไม่พบชื่อผู้ใช้', 'กรุณาลองใหม่อีกครั้ง', AlertStatus.Error);
//   } else {
//     StatusAlertWithHeader('เกิดข้อผิดพลาด', 'กรุณาลองใหม่อีกครั้ง', AlertStatus.Error);
//   }
//   removeWithExpiry(LocalStorageKey.TOKEN);
//   return {
//     type: ELoginAction.FAILED,
//     error,
//   };
// };


// // POST /signup
// export const onSignup = (data: ILoginForm, cb?: Function) => {
//   if (!data.email || !data.password) {
//     return (dispatch) => {
//       dispatch(onSignupFailed(i18next.t('auth:login_page.form.message.failed')));
//     };
//   }
//   const dataLogin = {
//     influencer_email: data.email.replaceAll(/\s/g, ""),
//     influencer_password: data.password,
//   };
//   return (dispatch) => {
//     dispatch({ type: ELoginAction.REQUEST });
//     axios
//       .post('/blog/api/login_email/signup', qs.stringify(dataLogin))
//       .then((response) => {
//         dispatch(onSignupSuccess(response.data, cb));
//       })
//       .catch((error) => {
//         dispatch(onSignupFailed(error));
//       });
//   };
// };

// export const onSignupSuccess = (data, cb?: Function) => {
//   setWithExpiry(LocalStorageKey.TOKEN, data.access_token);
//   setWithExpiry(LocalStorageKey.INFLUENCER_ID, data.influencer_id);
//   if (cb) cb(data.influencer_status, data.influencer_id);
//   return {
//     type: ELoginAction.SUCCESS,
//   };
// };

// export const onSignupFailed = (error) => {
//   if (error.response?.data === 'email duplicate') {
//     StatusAlertWithHeader('มีผู้ใช้ลงทะเบียนโดย อีเมลนี้แล้ว', 'กรุณาลองใหม่อีกครั้ง', AlertStatus.Warning);
//   } else {
//     StatusAlertWithHeader('เกิดข้อผิดพลาด', 'กรุณาลองใหม่อีกครั้ง', AlertStatus.Error);
//   }
//   return {
//     type: ELoginAction.FAILED,
//     error,
//   };
// };

// export const setPassword = (code: string, influencer_id: string, data: ISetPasswordForm, cb?: Function) => {
//   data.activateCode = code;
//   data.influencer_id = influencer_id;

//   return async (dispatch: any) => {
//     dispatch({ type: ESetPassword.REQUEST });
//     try {
//       const response = await axios.post('/blog/api/login_email/set_password', qs.stringify(data));

//       dispatch(
//         setPasswordSuccess(
//           { email: response.data.email, password: data.password },
//           cb
//         )
//       );
//     } catch (error) {
//       dispatch(setPasswordFailed(error));
//     }
//   };
// };

// export const setPasswordSuccess = (data: ILoginForm, cb?: Function) => {
//   StatusAlertWithHeader(
//     i18next.t('main:alert.set_password.save'),
//     i18next.t('main:alert.set_password.des'),
//     AlertStatus.Success,
//     i18next.t('main:alert.submit_button_text')
//   ).then(() => {
//     if (cb) cb(data);
//   });
//   return {
//     type: ESetPassword.SUCCESS,
//   };
// };

// export const setPasswordFailed = (error) => {
//   return {
//     type: ESetPassword.FAILED,
//     error,
//   };
// };

// export const forgotPassword = (email: IForgotPasswordForm, cb?: Function) => {
//   if (email?.email) email.email = email.email.replaceAll(/\s/g, "")

//   return async (dispatch: any) => {
//     dispatch({ type: EForgotPassword.REQUEST });
//     try {
//       await axios.post('/blog/api/login_email/forgot_password', qs.stringify(email));
//       dispatch(forgotPasswordSuccess(cb));
//     } catch (error) {
//       dispatch(forgotPasswordFailed(error));
//     }
//   };
// };

// export const forgotPasswordSuccess = (cb?: Function) => {
//   StatusAlertWithHeader(
//     i18next.t('main:alert.forgot_password.header'),
//     i18next.t('main:alert.forgot_password.message'),
//     AlertStatus.Success
//   ).then(() => {
//     if (cb) cb();
//   });
//   return {
//     type: EForgotPassword.SUCCESS,
//   };
// };

// export const forgotPasswordFailed = (error) => {
//   StatusAlertWithHeader(
//     'ไม่มีอีเมลนี้อยู่ในระบบ',
//     'กรุณาลองใหม่อีกครั้ง',
//     AlertStatus.Error
//   )
//   return {
//     type: EForgotPassword.FAILED,
//     error,
//   };
// };

// //CMS
// export const verifyCMSSession = () => {
//   return (dispatch) => {
//     dispatch({ type: ELoginCMSAction.REQUEST_CMS });
//     axios
//       .get('/cms/page/conversion-report-checklogin.php')
//       .then((response) => {
//         if (response.data.status === "SUCCESS") {
//           dispatch(alreadyLoginCMS(response.data.userdetails));
//         } else {
//           dispatch(notLoginCMS());
//         }
//       })
//       .catch((error) => {
//         dispatch(notLoginCMS());
//       });
//   }
// };

// export const alreadyLoginCMS = (data?: any) => {
//   if (data) {
//     setWithExpiry(LocalStorageKeyCMS.PROFILE_IMG, data?.profile_picture);
//     setWithExpiry(LocalStorageKeyCMS.NAME, data?.full_name);
//     setWithExpiry(LocalStorageKeyCMS.USER_ID, data?.user_id);
//     setWithExpiry(LocalStorageKeyCMS.MENU, data?.cms_menu);
//   }
//   return {
//     type: ELoginCMSAction.ALREADY_LOGIN_CMS,
//   };
// };

// export const notLoginCMS = () => {
//   window.location.href = '/cms/conversion-report';
//   return {
//     type: ELoginCMSAction.NOT_LOGIN_CMS,
//   };
// };

// export const logoutCMS = (redirect: string) => {
//   return async (dispatch: any) => {
//     dispatch({ type: ELogoutAction.REQUEST });
//     try {
//       await axios.post('/cms/logout.php', {});
//       dispatch(logoutCMSSuccess());
//       window.location.href = redirect;
//     } catch (error) {
//       dispatch(logoutCMSSuccess());
//     }
//   };
// };

// export const logoutCMSSuccess = () => {
//   removeWithExpiry(LocalStorageKeyCMS.PROFILE_IMG);
//   removeWithExpiry(LocalStorageKeyCMS.NAME);
//   removeWithExpiry(LocalStorageKeyCMS.USER_ID);
//   removeWithExpiry(LocalStorageKeyCMS.MENU);
//   return {
//     type: ELogoutAction.SUCCESS_CMS,
//   };
// };
