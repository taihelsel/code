function testDomain(domain) {
    return domain.indexOf("https:") !== -1;
}

function addToObj({ obj, key, val }) {
    //first check if key exists
    // if key exists, add key & value inside of arr ex) color:[red]
    //if key exists, push into arr
    if (typeof obj[key] === "undefined") obj[key] = val;
    else obj[key] = [obj[key], val];
}

function hasValue(val) {
    return typeof val === "undefined";
}

function decodeVal(val) {
    return decodeURIComponent(val);
}

function parseString(gitUrl) {
    const arr = gitUrl.split("?");
    const domain = arr[0];
    if (testDomain(domain)) return;
    //test case for valid params
    const params = arr[1].split("&");
    /*
    [color=red,
    fruit=banana]
    */
    const obj = {};
    params.forEach(param => {
        //color=red
        //color=blue
        const keyVal = param.split("=");
        //fun past here
        if (hasValue(keyVal[1])) obj[keyVal[0]] = true;
        else {
            keyVal[1] = decodeVal(keyVal[1]);
            addToObj({ obj, key: keyVal[0], val: keyVal[1] })
        }
    })
    return obj;
}
parseString("https://goodpup.com/?color=red&fruit=banana");