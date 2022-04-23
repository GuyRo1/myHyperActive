const mobileMenuLines = document.querySelectorAll(".js-button-line")
const mobileButton = document.querySelector(".js-mobile-button")
const mobileMenu = document.querySelector(".mobile-menu")
const nonFunctionalLinks = document.querySelectorAll(".js-non-functional-link")
const mobileDropDownOpener = document.querySelector(".drop-down-container")
const mobileDropDownMenu = document.querySelector(".drop-down-menu")
const nonMobileFormInput = document.querySelectorAll(".js-non-mobile-form input")
const nonMobileButton = document.querySelector(".js-submit-non-mobile-form")
const formInput = document.querySelectorAll(".js-form input")
const formButton = document.querySelector(".js-submit-form")
const expandButtons = document.querySelectorAll(".js-expand-section")
const contactUsModal = document.querySelector(".js-contact-us-modal")
const contactUsModalCloseButton = document.querySelector(".js-close-button")
const modalInput = document.querySelectorAll(".js-modal-form-input")
const modalSubmit = document.querySelector(".js-modal-button")
const formModal = document.querySelector(".js-form-modal")
const formModalClose = document.querySelector(".js-close-modal")

formModalClose.addEventListener('click', event => {
    formModal.classList.remove('open')
})

setTimeout(() => {
    contactUsModal.classList.add('open')
}, 20)

// setInterval(() => {
//     contactUsModal.classList.add('open')
// }, 500000)

contactUsModalCloseButton.addEventListener('click', () => {
    contactUsModal.classList.remove('open')
})


expandButtons.forEach((element) => {
    element.addEventListener('click', (event) => {
        let section = event.currentTarget.parentNode
        if (section.classList.contains('open')) {
            section.classList.remove('open')
        }
        else {
            section.classList.add('open')
        }
    })
})

nonMobileButton.addEventListener('click', (event) => {
    event.stopPropagation();
    let validForm = true
    nonMobileFormInput.forEach((element) => {
        a = element.checkValidity()
        if (!(element.checkValidity() && element.value.length !== 0 && (element.type !== "tel" || validator.isMobilePhone(element.value)))) {
            validForm = false
            element.classList.add('visible-place-holder')
            element.value = ""
        }

    })
    if (validForm)
    formModal.classList.add('open')
})

formButton.addEventListener('click', (event) => {
    event.stopPropagation();
    let validForm = true
    formInput.forEach((element) => {
        a = element.checkValidity()
        if (!(element.checkValidity() && element.value.length !== 0 && (element.type !== "tel" || validator.isMobilePhone(element.value)))) {
            validForm = false
            element.classList.add('visible-place-holder')
            element.value = ""
        }

    })
    if (validForm)
        formModal.classList.add('open')
})

modalSubmit.addEventListener('click', (event) => {
    event.stopPropagation();
    let validForm = true
    modalInput.forEach((element) => {
        a = element.checkValidity()
        if (!(element.checkValidity() && element.value.length !== 0 && (element.type !== "tel" || validator.isMobilePhone(element.value)))) {
            validForm = false
            element.classList.add('error')
            element.value = ""
            switch (element.type) {
                case "text":
                    element.placeholder = "*נא להזין שם תקין"
                    break;
                case "tel":
                    element.placeholder = "*נא להזין מספר טלפון"
                    break;
                case "email":
                    element.placeholder = "*נא להזין כתובת מייל"
                    break;

            }
        }

    })
    if (validForm){
        formModal.classList.add('open')
        contactUsModal.classList.remove('open')
    }

})

mobileDropDownOpener.addEventListener('click', () => {
    if (mobileDropDownMenu.classList.contains("open"))
        mobileDropDownMenu.classList.remove("open")
    else
        mobileDropDownMenu.classList.add("open")
})

nonFunctionalLinks.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault()
        alert("This is a demo site links to other pages dont work")
    })
})

mobileButton.addEventListener('click', (event) => {
    event.stopPropagation();
    let mobileButton = event.currentTarget
    if (mobileButton.classList.contains('open')) {
        mobileMenuLines.forEach(element => {
            element.classList.remove('open')
            element.classList.add('closed')
        })
        mobileButton.classList.remove('open')
        mobileMenu.classList.remove("open")
    }
    else {
        mobileMenuLines.forEach(element => {
            element.classList.remove('closed')
            element.classList.add('open')
        })
        mobileButton.classList.add('open')
        mobileMenu.classList.add("open")
    }
})

