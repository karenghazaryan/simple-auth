function validateEmail(email) {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
}

function validatePass(pass) {
     return 6 <= pass.length && pass.length <= 40;
}

function validateName(name) {
     const reg = /^[a-z,',-]+(\s)[a-z,',-]+$/
     return reg.test(name);
}

function validatePhone(number) {
     const reg = /^\(?([0-9]{3})\)?[-. ]([0-9]{3})[-. ]?([0-9]{4})/
     return reg.test(number);
}

export {
    validateEmail,
    validatePass,
    validateName,
    validatePhone
}