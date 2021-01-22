export const validForm = (controls) => {
  const form = []
  Object.values(controls).forEach(value => form.push(value))

  let isFormValid = false
  let isValidTheCenter = false
  let isValidTheStart = false
  let isValidTheEnd = false

  form.forEach((item, index) => {
    if (form[index + 1] && form[index - 1]) {
      if (form[index].isValid && form[index + 1].isValid && form[index - 1].isValid) {
        isValidTheCenter = true
      } else {
        isValidTheCenter = false
      }
    } else {
      isValidTheCenter = true
    }

    if (!form[index - 1]) {
      if (form[index].isValid && form[index + 1].isValid) {
        isValidTheStart = true
      } else {
        isValidTheStart = false
      }
    }

    if (!form[index + 1]) {
      if (form[index].isValid && form[index - 1].isValid) {
        isValidTheEnd = true
      } else {
        isValidTheEnd = false
      }
    }
  })

  isFormValid = isValidTheStart && isValidTheCenter && isValidTheEnd

  return isFormValid
}