class Token {
  //TOKEN
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

  //USER
  static setUserCookie(user, expirationTime) {
    try {
      const userString = JSON.stringify(user);
      const encodedUserString = encodeURIComponent(userString);

      const cookieString = `user=${encodedUserString}; expires=${new Date(
        expirationTime
      ).toUTCString()}; path=/;`;

      if (window.location.protocol === "https:") {
        document.cookie = `${cookieString} Secure; SameSite=None;`;
      } else {
        document.cookie = cookieString;
      }
    } catch (error) {
      console.error("Error while setting user cookie:", error);
    }
  }

  static getUserFromCookie() {
    const name = "user=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        try {
          const encodedUserString = cookie.substring(
            name.length,
            cookie.length
          );
          const userString = decodeURIComponent(encodedUserString);
          return JSON.parse(userString);
        } catch (error) {
          console.error("Error while getting user from cookie:", error);
          return null;
        }
      }
    }

    return null;
  }
  static removeUserCookie() {
    const pastDate = new Date(1970, 0, 1).toUTCString(); // Встановлюємо дату у минуле

    if (window.location.protocol === "https:") {
      document.cookie = `user=; expires=${pastDate}; path=/; Secure; SameSite=None;`; // Додаємо атрибути Secure та SameSite для HTTPS
    } else {
      document.cookie = `user=; expires=${pastDate}; path=/;`; // Встановлюємо куку без атрибутів для HTTP
    }
  }
}
export default Token;
