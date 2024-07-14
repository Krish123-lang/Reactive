import React, { useState } from 'react'
import validator from 'validator'

const Password = () => {
    const [passwordInfo, setPasswordInfo] = useState({ message: "", color: "" })

    const validate = (value) => {
        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setPasswordInfo({ message: "Strong", color: "green" })
        } else {
            setPasswordInfo({ message: "Weak", color: "red" })
        }
    }

    return (
        <>
            <input type="text" name="password" id="password" onChange={(e) => validate(e.target.value)} />
            {
                passwordInfo.message === "" 
                ? "Please enter password" 
                : <span style={{ color: passwordInfo.color }}>{passwordInfo.message}</span>
            }
        </>
    )
}

export default Password
