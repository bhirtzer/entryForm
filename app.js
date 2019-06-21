const submitForm = document.getElementById('submit');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const zipCode = document.getElementById('zipCode');
const interest = document.getElementById('interest');

const formData = {
  firstName: firstName.value,
  lastName: lastName.value,
  email: email.value,
  zipCode: zipCode.value,
  interest: interest.value
};

submitForm.addEventListener('click', e => {
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    zipCode: zipCode.value,
    interest: interest.value
  };
  const emailData = `First Name: ${formData.firstName} \n Last Name: ${
    formData.lastName
  } \n Email: ${formData.email} \n Zip Code: ${formData.zipCode} \n Interest: ${
    formData.interest
  }`;

  console.log(formData);
  window.open(`mailto:anything@stlwebdeveloper.com?body=${emailData}`);

  e.preventDefault();
});
