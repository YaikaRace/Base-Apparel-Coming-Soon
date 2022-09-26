const EMAIL_INPUT = document.querySelector('[data-id="email-input"]');
const FORM = document.querySelector('[data-id="form"]');
const REGEX =
  /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

FORM.addEventListener("submit", (event) => {
  if (!REGEX.test(EMAIL_INPUT.value)) {
    EMAIL_INPUT.classList.add("error");
    FORM.classList.add("form-error");
    event.preventDefault();
  } else {
    if (
      EMAIL_INPUT.classList.contains("error") &&
      FORM.classList.contains("form-error")
    ) {
      EMAIL_INPUT.classList.remove("error");
      FORM.classList.remove("form-error");
    } else {
      return;
    }
  }
});
