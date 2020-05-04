console.log("index.js: loaded");

const fetchUserInfo = (userInfo) => {
  const userId = "ckona";

  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then(response => {
      console.log(response.status);

      if (!response.ok) {
        console.error("error response: ", response);
        return nil;
      } else {
        return response.json().then(userInfo => {
          console.log(userInfo);
        });
      }
    })
    .catch(error => {
      console.error(error);
    });
};
