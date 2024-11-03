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

// Set your ndsData here with the provided structure
const ndsData = {
    "widgetData": {
        "bd": "735:801:735:801:735:801",
        "jsv": "sync-1",
        "wv": "2.5.3",
        "bp": "700",
        "sr": "735x801 24",
        "didtz": "360", //device timezone offset
        "wkr": 228409,
        "flv": "false",
        "fv": "fv,ogg,mp4,webm",
        "fa": "fa,mpeg,ogg,wav",
        "hf": "e63c203f366063b3",
        "pl": "MacIntel", //platform
        "ft": "{\"mtp\":1,\"ts\":true,\"te\":true}",
        "fc": "{\"tc\":true,\"nc\":true}",
        "fs": "true",
        "wg": "a46c01a68fc5740e",
        "fm": "12e0213093c022e6",
        "ipr": "ncip,0,66ebcc87,2,1;st,0,;", //mouse bullshit
        "ic": "0,de;"
    },
    "wt": "1.w-481390.1.2.MEA3zD6XXgeSqz9ebqCE1A,,.xYyyJoE7nEvRUgGnuwlS2VogRcmtE4fNW1cuKjsdHO32pGjTde554XYEekA-ahm1hB5NRBSYWSCpEXSBIwQp2n9SZ5mt9ugu1oXtpDBsXiiKO16aawAYWEr_kNeK_bAnpLe8NCeoBAf_5o0vbK5_7Aud6-Kydnava_m1s_dPP5NtjcI3GXl8J-ykpLtOnPYUgpCpCRX3JrvQ2vYFlci89KEVyMlo29eVP5gMOzXsMVlAqmALXhaOmlXOxcbqEpiE"
};

const encryptedData = encodethismf(JSON.stringify(ndsData));
console.log(encryptedData);

