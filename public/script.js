const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };

  try {
    const response = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      formMessage.textContent = result.message;
      form.reset();
    } else {
      formMessage.textContent = result.message || 'Something went wrong';
    }
  } catch (error) {
    formMessage.textContent = 'Server error. Please try again.';
  }
});
