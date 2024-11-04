const crypto = require('crypto');

function generateRealisticDimensions() {
    const commonResolutions = [
        [1920, 1080],
        [1366, 768],
        [1536, 864],
        [1440, 900],
        [1280, 720],
        [2560, 1440],
        [3840, 2160],
        [1600, 900],
        [1024, 768],
        [3440, 1440]
    ];

    const randomResolution = commonResolutions[Math.floor(Math.random() * commonResolutions.length)];
    const [width, height] = randomResolution;

    const availWidth = width - Math.floor(Math.random() * 100);
    const availHeight = height - Math.floor(Math.random() * 100);

    return `${width}:${availWidth}:${width}:${availHeight}:${width}:${height}`;
}

function generateRandomNumber() {
    return Math.floor(1E6 * Math.random()) + 1E3;
  }
  

function encodethismf(a) {
    var b = "",
        c = [41, 8, 49, 48, 51, 44, 63, 0, 19, 61, 43, 63, 57, 15, 34, 6, 42, 59, 41, 19, 10, 45, 54, 0, 44, 34, 57, 36, 48];
    if ("BNDX:" === a.substring(0, 5)) {
        a = a.substring(5);
        a = (new TextDecoder).decode(base64ToBytes(a));
        a = a.substring(4);
        var e = !0;
    } else {
        e = !1;
        b = "NDX:";
    }
    for (var f = 0, l = 0; l < a.length; l += 1) {
        var u = a.charCodeAt(l) - 32;
        if (0 <= u && 94 > u) {
            if (e && 64 > u) {
                u ^= c[f % c.length];
            }
            u += 47 + (e ? -1 : 1) * f * 31;
            u = (u % 94 + 94) % 94;
            if (!e && 64 > u) {
                u ^= c[f % c.length];
            }
            f++;
        }
        b += String.fromCharCode(u + 32);
    }
    return e ? b : "BNDX:" + bytesToBase64((new TextEncoder).encode(b));
}

function base64ToBytes(str) {
    let binary_string = Buffer.from(str, 'base64').toString('binary');
    return Uint8Array.from(binary_string, char => char.charCodeAt(0));
}

function bytesToBase64(bytes) {
    let binary_string = String.fromCharCode.apply(null, bytes);
    return Buffer.from(binary_string, 'binary').toString('base64');
}

const ndsData = {
    
        "r": generateRandomNumber(),                   // 99216
        "bd": '2741:888:2741:975:3840:975',       //browser dimensions           // "2741:888:2741:975:3840:975"
        "jsv": "sync-1",                
        "wv": "2.5.3", //web version       
        "ls": {},
        "href": "https://auth.ticketmaster.com/as/authorization.oauth2?client_id=8bf7204a7e97.web.ticketmaster.us&response_type=code&scope=openid%20profile%20phone%20email%20tm&redirect_uri=https://identity.ticketmaster.com/exchange&visualPresets=tm&lang=en-us&placementId=mytmlogin&hideLeftPanel=false&integratorId=prd1741.iccp&intSiteToken=tm-us&TMUO=west_AMODO8ZTp/scwhJaHLv3rKlD+iPFm/486FMeILPmdg0=&deviceId=5ErGGFTVXbm3vLu3u7e7trq1trvVuZ2AUgrC5A&doNotTrack=false&flow=sign-in",                // "https://auth.ticketmaster.com/as/authorization.oauth2?client_id=8bf7204a7e97.web.ticketmaster.us&response_type=code&scope=openid%20profile%20phone%20email%20tm&redirect_uri=https://identity.ticketmaster.com/exchange&visualPresets=tm&lang=en-us&placementId=mytmlogin&hideLeftPanel=false&integratorId=prd1741.iccp&intSiteToken=tm-us&TMUO=west_AMODO8ZTp/scwhJaHLv3rKlD+iPFm/486FMeILPmdg0=&deviceId=5ErGGFTVXbm3vLu3u7e7trq1trvVuZ2AUgrC5A&doNotTrack=false&flow=sign-in"
        //eb found in json 
        "eb": "1.dev-1.0.Zu6VBcrc2OaP/buABLHDwA==.FeWk6ivEKp9kjmWL4ML3lvC8PhrxuYmjYMoxvDH1qAzcfbiHK8wEdLPPPrW/UvQKh0ynHo425vChDfYdBh9VBEVrFrxX51oAC8WBGtoXnUlBYi43Yepe6b7Lm/iYoQdO",                  // "1.dev-1.0.Zu6VBcrc2OaP/buABLHDwA==.FeWk6ivEKp9kjmWL4ML3lvC8PhrxuYmjYMoxvDH1qAzcfbiHK8wEdLPPPrW/UvQKh0ynHo425vChDfYdBh9VBEVrFrxX51oAC8WBGtoXnUlBYi43Yepe6b7Lm/iYoQdO"
        "bi": "b2|3840x1080 3840x975 24 24|360|en-US|bp1-2501cc0f72219bbc|false|https://auth.ticketmaster.com/as/authorization.oauth2?client_id=8bf7204a7e97.web.ticketmaster.us&response_type=code&scope=oTRUNC|Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36|wg1-a46c01a68fc5740e"                   // "b2|3840x1080 3840x975 24 24|360|en-US|bp1-2501cc0f72219bbc|false|https://auth.ticketmaster.com/as/authorization.oauth2?client_id=8bf7204a7e97.web.ticketmaster.us&response_type=code&scope=oTRUNC|Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36|wg1-a46c01a68fc5740e"
      }


const encryptedData = encodethismf(JSON.stringify(ndsData));
console.log(encryptedData);
console.log(generateRealisticDimensions());





