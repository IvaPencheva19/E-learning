function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}
function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join("-");
}
function isDateBeforeToday(date) {
  return new Date(date.toDateString()) < new Date(new Date().toDateString());
}
function isToday(date) {
  return formatDate(date) === formatDate(new Date());
}

export const urlValidator = (e, setErrors) => {
  let string = e.target.value;
  let url;
  try {
    url = new URL(string);

    setErrors((state) => ({
      ...state,
      [e.target.name]: url.protocol !== "http:" && url.protocol !== "https:",
    }));
  } catch (_) {
    setErrors((state) => ({
      ...state,
      [e.target.name]: true,
    }));
  }
};

export const emailValidator = (e, setErrors) => {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  let str = String(e.target.value);

  setErrors((state) => ({
    ...state,
    [e.target.name]: !regex.test(str),
  }));
};

export const minLengthValidator = (e, minLength, setErrors, values) => {
  setErrors((state) => ({
    ...state,
    [e.target.name]: values[e.target.name].length < minLength,
  }));
};

export const dateValidator = (e, setErrors, values) => {
  setErrors((state) => ({
    ...state,
    [e.target.name]: isDateBeforeToday(new Date(e.target.value)),
  }));
};
export const finalDateValidator = (e, setErrors, values) => {
  setErrors((state) => ({
    ...state,
    [e.target.name]:
      isDateBeforeToday(new Date(e.target.value)) ||
      isToday(new Date(e.target.value)),
  }));
};

export const passwordDoNotMatch = (values, setErrors) => {
  setErrors((errors) => ({
    ...errors,
    repeatPassword: values.password != values.repeatPassword,
  }));
};
