'use strict'
// action and method for form
const method = "POST"
const action = "https://usebasin.com/f/a9617a5ac66c"
// submit button
const submitBtn = document.getElementById('submit')
// Create loading spinner
const spinner = document.createElement("div")
spinner.id = "spinner"
spinner.classList.add("spinner-border", "d-none")
submitBtn.appendChild(spinner)
// Create alert message
const alert = document.createElement("div")
alert.id = "alert"
alert.classList.add("alert", "d-none", "text-center")
// Disable submit btn
const able = (dis = false) => {
    submitBtn.disabled = dis
}
// Alert message
const message = (form, obj) => {
    // text to alert
    alert.innerHTML = obj.text
    // un-hide alert
    alert.classList.remove("d-none")
    // hide spinner
    spinner.classList.add("d-none")
    if (!obj.status) {
        // if error
        alert.classList.add("alert-danger")
        return
    }
    // success
    alert.classList.add("alert-success")
    // then reset
    resetForm(form)
}
const resetForm = form => {
    // reset form content
    form.reset()
    // reset validation status with css
    form.classList.remove("was-validated")
    // reset google recaptcha
    grecaptcha.reset()
}
// All inputs
const inputs = document.querySelectorAll(".form-control")
// All forms
const forms = document.querySelectorAll('.needs-validation')
// Loop over them and prevent submission
Array.from(forms).forEach(async form => {
    // Loop over inputs and validating
    Array.from(inputs).forEach(async input => (
        input.addEventListener("keydown", async e => {
            if (!e.target.checkValidity()) {
                // if form is not valid when press key
                form.classList.add('was-validated')
                able(true)
                return
            }
            // if form valid
            able() // enable submitBtn
        }, false)
    ))
    // append the alert
    form.appendChild(alert)
    // event listener when submit
    form.addEventListener('submit', event => {
        event.preventDefault()
    }, false)
    // get form data by FormData instance
    const formData = new FormData(form)
    // called by recaptcha submits the form
    window.submitForm = async () => {
        // show loading spinner
        spinner.classList.remove("d-none")
        submitBtn.querySelector("span").classList.add("me-2")
        // 1. create new xhr instance
        const xhr = new XMLHttpRequest()
        // 2. open an async resquest
        xhr.open(method, action, true)
        // 3. setting headers of requests
        xhr.setRequestHeader("Accept", "application/json")
        // 4. sending data
        xhr.send(formData)
        // 5. check for http 200
        xhr.onload = () => {
            try {
                // xhr response to json
                const response = JSON.parse(xhr.response)
                if (!response.success) {
                    // if error
                    // message error
                    message(form, {
                        status: false,
                        text: "No enviaste el mensaje, intenta más tarde."
                    })
                    able(true)
                    return
                }
                // if success
                // message success
                message(form, {
                    status: true,
                    text: "Enviaste exitosamente el mensaje, puedes volver al inicio."
                })
                able(true)
            } catch (error) {
                // catch error
                console.error(error)
            }
        }
    }
    submitBtn.addEventListener("click", async e => {
        if (!form.checkValidity()) {
            // if not valid
            e.preventDefault()
            e.stopPropagation()
            return
        }
        // valid then execute recaptcha
        grecaptcha.execute()
    }, false)
})