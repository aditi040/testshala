function Validation(values) {
    let error = {}
    const username_pattern = /^[a-z0-9]{5,15}$/
    const password_pattern = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*]).{8,}$/
    const name_pattern=/^([a-zA-Z]{2,}[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}([a-zA-Z]{1,})?)$/
    const email_pattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phone_pattern=/^[1-9]{1}[0-9]{9}$/;
    // ((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}

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
    if(values.firstname === "") {
        error.firstname = "Firstname should not be empty"
        }
        else if(!name_pattern.test(values.firstname)) {
        error.firstname = "Firstname must only have alphabetic letter."
        }else {
        error.firstname =""
        }

    if(values.lastname === "") {
            error.lastname = "Lastname should not be empty"
            }
            else if(!name_pattern.test(values.lastname)) {
            error.lastname = "Lastname must only have alphabetic letter."
            }else {
            error.lastname =""
            }
    if(values.email === "") {
    error.email = "Email should not be empty"
     }
     else if(!email_pattern.test(values.email)) {
      error.email = "Email should in this format(eg.abc@gmail.com)."
        }else {
        error.email =""
         }
               
    if(values.phone === "") {
        error.phone = "Phone no. should not be empty"
        }
        else if(!phone_pattern.test(values.phone)) {
          error.phone = "Phone no. must have 10-digits."
            }else {
          error.phone =""
            }
    return error;
}
export default Validation;