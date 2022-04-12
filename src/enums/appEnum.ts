export enum RouterTransitionEnum {
    ZOOM_FADE = 'zoom-fade',
    ZOOM_OUT = 'zoom-out',
    FADE_SIDE = 'fade-slide',
    FADE = 'fade',
    FADE_BOTTOM = 'fade-bottom',
    FADE_SCALE = 'fade-scale',
  }
  
  export enum ExceptionEnum {
    // page not access
    PAGE_NOT_ACCESS = 403,
  
    // page not found
    PAGE_NOT_FOUND = 404,
  
    // error
    ERROR = 500,
  
    // net work error
    NET_WORK_ERROR = 10000,
  
    // No data on the page. In fact, it is not an exception page
    PAGE_NOT_DATA = 10100,
  }