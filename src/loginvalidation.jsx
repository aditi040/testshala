function Validation(values) {
    let error = {}
    const username_pattern = /^[a-z0-9]{5,15}$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    
    if(values.username === "") {
    error.username = "Username should not be empty"
    }
    else if(!username_pattern.test(values.username)) {
    error.username = "Username must only have any lowercase letter and numerics."
    }else {
    error.username =""
    }
    
    if(values.password === "") {
    error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) { error.password = "Password must have 8 characters with uppercase and lowercase letter, special character(eg.@,#,$...)"

    } else {
    error.password =" "
    }
    return error;
}
export default Validation;