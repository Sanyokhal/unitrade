class Token {
  static setAccessTokenCookie(token, expirationTime) {
    const cookieString = `access_token=${token}; expires=${new Date(
      expirationTime
    ).toUTCString()}; path=/;`;

    if (window.location.protocol === "https:") {
      document.cookie = `${cookieString} Secure; SameSite=None;`; // Встановлюємо атрибути Secure та SameSite для HTTPS
    } else {
      document.cookie = cookieString; // Встановлюємо куку без атрибутів для HTTP
    }
  }

  static getAccessTokenFromCookie() {
    const name = "access_token=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }

    return null;
  }
  
  static removeAccessTokenCookie() {
    const pastDate = new Date(1970, 0, 1).toUTCString(); // Встановлюємо дату у минуле

    if (window.location.protocol === "https:") {
      document.cookie = `access_token=; expires=${pastDate}; path=/; Secure; SameSite=None;`; // Додаємо атрибути Secure та SameSite для HTTPS
    } else {
      document.cookie = `access_token=; expires=${pastDate}; path=/;`; // Встановлюємо куку без атрибутів для HTTP
    }
  }
}
export default Token;
