export default {
  login: data => {
    const {username, password} = data;
    return new Promise((resolve, reject) => {
      if (username === "dj@dj.com" && password === "DJ123") {
        resolve({
          username,
          name: "Jan",
          surname: "Kowalski",
          lastLogin: new Date("04/08/2019 13:20:22")
        });
      } else {
        reject("Hasło lub login są nieprawidłowe!");
      }
    });
  }
};
