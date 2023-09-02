const fetch = require('node-fetch');
const lookup = {
    a: "ra",
    b: "rh",
    c: "oa",
    d: "wa",
    e: "wo",
    f: "ww",
    g: "rr",
    h: "ac",
    i: "ah",
    j: "sh",
    k: "or",
    l: "an",
    m: "sc",
    n: "wh",
    o: "oo",
    p: "ak",
    q: "rq",
    r: "rc",
    s: "c",
    t: "ao",
    u: "hu",
    v: "ho",
    w: "oh",
    x: "k",
    y: "ro",
    z: "uf",
    A: "Ra",
    B: "Rh",
    C: "Oa",
    D: "Wa",
    E: "Wo",
    F: "Ww",
    G: "Rr",
    H: "Ac",
    I: "Ah",
    J: "Sh",
    K: "Or",
    L: "An",
    M: "Sc",
    N: "Wh",
    O: "Oo",
    P: "Ak",
    Q: "Rq",
    R: "Rc",
    S: "C",
    T: "Ao",
    U: "Hu",
    V: "Ho",
    W: "Oh",
    X: "K",
    Y: "Ro",
    Z: "Uf",
};

const traslate = (data) => {
    let translatedData = "";
    for (let i = 0; i < data.length; i += 1) {
      const char = data[i];
      if (data.substr(i, 4) === "null") {
        translatedData += "null";
        i += 3;
        continue;
      }
      if (char === "\\" && i < data.length - 1) {
        translatedData += char + data[i + 1];
        i += 1;
        continue;
      }
      if (Object.keys(lookup).includes(char)) {
        translatedData += lookup[char];
      } else {
        translatedData += char;
      }
    }
    return translatedData;
}



module.exports = {
    traslate,
   
}