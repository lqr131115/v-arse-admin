/**
 * @description: Request result set
 */
 export enum ResultEnum {
    SUCCESS = 200,
    ERROR = 404,
    TIMEOUT = 401,
    TYPE = 'success',
  }
  
  /**
   * @description: request method
   */
  export enum RequestEnum {
    GET = 'GET',
    POST = 'POST',
  }
  
  /**
   * @description:  contentTyp
   */
  export enum ContentTypeEnum {
    // json
    JSON = 'application/json;charset=UTF-8',
    // form-data qs
    FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
    // form-data  upload
    FORM_DATA = 'multipart/form-data;charset=UTF-8',
  }
  