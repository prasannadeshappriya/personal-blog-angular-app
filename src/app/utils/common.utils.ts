import {CONSTANTS} from "../config/app.config.js";

export class CommonUtils {
  static smoothScroll() {
    setTimeout(() => {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }, 1000);
  }
  static getURL(url: String) {
    return CONSTANTS.URL_DOMAIN + url;
  }
}

