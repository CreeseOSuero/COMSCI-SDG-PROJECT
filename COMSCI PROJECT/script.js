window.onload = function () {
  const form = document.getElementById("SUF");

  form.onsubmit = function (e) {
    e.preventDefault();

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const why = document.getElementById("why").value.trim();
    const sex = document.querySelector('input[name="sex"]:checked');

    let valid = true;

    if (!firstName) {
      document.getElementById("errorFirstName").textContent = "Required";
      valid = false;
    }

    if (!lastName) {
      document.getElementById("errorLastName").textContent = "Required";
      valid = false;
    }

    if (!sex) {
      document.getElementById("errorSex").textContent = "Required";
      valid = false;
    }

    if (!email) {
      document.getElementById("errorEmail").textContent = "Required";
      valid = false;
    }

    if (!password) {
      document.getElementById("errorPassword").textContent = "Required";
      valid = false;
    }

    if (!why) {
      document.getElementById("errorWhy").textContent = "Required";
      valid = false;
    }

    if (valid) {
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("sex", sex.value);
      localStorage.setItem("why", why);
      window.location.href = "proj_profile_SUERO.html";
    }
  };
  
};


