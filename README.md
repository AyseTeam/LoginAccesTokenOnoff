###* Log in to an onoff account with an acces token*
1. [Find an onoff token](https://github.com/AyseTeam)
2. Then got to [web.onoff.app](https://web.onoff.app)
![](https://cdn.discordapp.com/attachments/630791610090913815/935249620139900978/unknown.png)
3. Open console (F12)
![](https://cdn.discordapp.com/attachments/630791610090913815/935251113001771019/unknown.png)
4. Copy and Past my code, replace "Your Acces Token"

```javascript
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
```
![](https://cdn.discordapp.com/attachments/630791610090913815/935251806253096960/unknown.png)
5. __Enter, and there you go__
Coded by @AyseTeam
