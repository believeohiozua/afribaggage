export const checkValidity = (value, rules) => {
  let isValid = true

  if (rules.required) {
    isValid = value.trim() !== '' && isValid
  }

  if (rules.minLength) {
    isValid = value.trim().length >= rules.minLength && isValid
  }

  if (rules.maxLength) {
    isValid = value.trim().length <= rules.maxLength && isValid
  }

  if (rules.isEmail) {
    const pattern = /^.+@.+\..+$/
    isValid = pattern.test(value) && isValid
  }

  if (rules.isPhoneNumber) {
    const pattern = /^\+(?:[0-9]●?){6,14}[0-9]$/
    isValid = pattern.test(value) && isValid
  }

  return isValid
}