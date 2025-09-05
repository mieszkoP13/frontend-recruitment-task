document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const inputs = form.querySelectorAll(".input, input[type='checkbox']");
  const submitBtn = document.querySelector(".contact-button .btn-primary");

  const patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  };

  const toggleError = (field, condition, message) => {
    const errorTxt = field.parentElement.querySelector(".error-txt");
    if (!condition) {
      field.classList.add("error");
      if (errorTxt) {
        errorTxt.textContent = message;
        errorTxt.classList.remove("display-none");
      }
    } else {
      field.classList.remove("error");
      if (errorTxt) errorTxt.classList.add("display-none");
    }
  };

  const validateField = (field) => {
    let valid = true;
    let msg = "";

    if (field.type === "email") {
      valid = patterns.email.test(field.value.trim());
      msg = "Podaj poprawny adres e-mail";
    } else if (field.type === "text" || field.tagName === "TEXTAREA") {
      if (field.hasAttribute("required")) {
        valid = field.value.trim().length > 0;
        msg = "To pole jest wymagane";
        if (field.tagName === "TEXTAREA" && !valid) {
          msg = "Wiadomość nie może być pusta";
        }
      }
    } else if (field.type === "checkbox") {
      valid = field.checked;
      msg = "Musisz wyrazić zgodę";
    }

    toggleError(field, valid, msg);
    return valid;
  };

  inputs.forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
  });

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let valid = true;

    inputs.forEach((field) => {
      if (!validateField(field)) valid = false;
    });

    if (valid) {
      alert("Formularz wysłany!");
      form.reset();
    } else {
      alert("Uzupełnij poprawnie wszystkie wymagane pola.");
    }
  });
});
