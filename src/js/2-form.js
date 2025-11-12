const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

let formData = { email: '', message: '' };

// take data for values in formData from local storage
try {
  formData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {
    email: '',
    message: '',
  };
} catch (error) {
  formData = { email: '', message: '' };
}

// add old values when refresh pages
form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

// function get values from input
const onInput = event => {
  const target = event.target;

  formData[target.name] = target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
};

// function press button submit
const onSubmit = event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  formData = { email: '', message: '' };
  localStorage.removeItem(localStorageKey);
  form.reset();
};

// add events
form.addEventListener('input', onInput);

form.addEventListener('submit', onSubmit);
