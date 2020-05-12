export class CommonUtils {
  static smoothScroll() {
    setTimeout(() => {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }, 1000);
  }
}

