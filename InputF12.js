let accesToken = "Your Acces Token";

function login(accesToken) {
    setInterval(() => {
      document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.accessToken = `${accesToken}`
    }, 50);
    setTimeout(() => {
      location.reload();
    }, 2500);
    console.clear();
    console.log("Account loged !");
  }

login(accesToken);
