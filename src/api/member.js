export default class Member {
  static getMember(payload) {
    //const url = `https://api.alua.com/v1/users/discover?offset=0&limit=20`;
    const url = `https://api.alua.com${payload.endpoint}`;
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          if (res.ok) {
            res.json().then(json => {
              resolve(json);
            }, err => {
              reject(err);
            });
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}