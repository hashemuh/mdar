


// Demo registration form
const demoTitle = document.querySelector('.demo-title');
demoTitle.textContent = 'Free Demo Registration';

const demo = document.querySelector('.demo form');
const demoName = document.getElementById('name');
const demoEmail = document.getElementById('email');
const demoTimezone = document.getElementById('timezone');
const demoPhone = document.getElementById('phone');
const demoGender = document.getElementById('gender');

demoForm.addEventListener('submit', function(e) {
e.preventDefault();
const formData = new FormData(demoForm);
const name = formData.get('name');
const email = formData.get('email');
const timezone = formData.get('timezone');
const phone = formData.get('phone');
const gender = formData.get('gender');
console.log(name, email, timezone, phone, gender);
demoForm.reset();
});

// Navbar
const navbar = document.querySelector('.navbar');
const navbarToggle = document.querySelector('.navbar-toggle');

navbarToggle.addEventListener('click', function() {
navbar.classList.toggle('navbar--open');
});

// Scroll to top button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', function() {
if (window.pageYOffset > 300) {
scrollToTopBtn.classList.add('scroll-to-top--show');
} else {
scrollToTopBtn.classList.remove('scroll-to-top--show');
}
});

scrollToTopBtn.addEventListener('click', function() {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

// Add event listeners to the navigation links /////////
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetSectionId = link.getAttribute('href').substring(1); // Remove the leading "#"
      scrollToSection(targetSectionId);
    });
  });
});

// Accordion ////////
const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(function(item) {
const accordionButton = item.querySelector('.accordion__button');
const accordionContent = item.querySelector('.accordion__content');

accordionButton.addEventListener('click', function() {
accordionButton.classList.toggle('accordion__button--active');
accordionContent.classList.toggle('accordion__content--active');
});
});

// Modal
const modal = document.querySelector('.modal');
const modalOpenBtn = document.querySelector('.modal-open');
const modalCloseBtn = document.querySelector('.modal-close');

modalOpenBtn.addEventListener('click', function() {
modal.classList.add('modal--open');
});

modalCloseBtn.addEventListener('click', function() {
modal.classList.remove('modal--open');
});

// Login and sign-up buttons
const loginBtn = document.querySelector('.login');
const signUpBtn = document.querySelector('.sign-up');
const modalForm = document.querySelector('.modal-form');
const modalTitle = modalForm.querySelector('.modal-form__title');
const modalSubtitle = modalForm.querySelector('.modal-form__subtitle');
const modalSubmitBtn = modalForm.querySelector('.modal-form__submit');

loginBtn.addEventListener('click', function() {
modalForm.reset();
modalTitle.textContent = 'Log In';
modalSubtitle.textContent = 'Please enter your email and password to log in.';
modalSubmitBtn.value = 'Log In';
modal.classList.add('modal--open');
});

signUpBtn.addEventListener('click', function() {
modalForm.reset();
modalTitle.textContent = 'Sign Up';
modalSubtitle.textContent = 'Please fill in the following form to create an account.';
modalSubmitBtn.value = 'Sign Up';
modal.classList.add('modal--open');
});

// Free demo registration form
const demoForm = document.querySelector('.demo-form');
const demoFormName = demoForm.querySelector('#demo-name');
const demoFormEmail = demoForm.querySelector('#demo-email');
const demoFormTimezone = demoForm.querySelector('#demo-timezone');
const demoFormPhone = demoForm.querySelector('#demo-phone');
const demoFormGender = demoForm.querySelector('#demo-gender');
const demoFormSubmitBtn = demoForm.querySelector('.demo-form__submit');
const demoFormStatus = demoForm.querySelector('.demo-form__status');

demoFormSubmitBtn.addEventListener('click', function(event) {
event.preventDefault();

// // Validate form data
if (demoFormName.value.trim() === '') {
demoFormName.classList.add('error');
demoFormStatus.textContent = 'Please enter your name.';
return;
} else {
demoFormName.classList.remove('error');
}

if (demoFormEmail.value.trim() === '') {
demoFormEmail.classList.add('error');
demoFormStatus.textContent = 'Please enter your email.';
return;
} else {
demoFormEmail.classList.remove('error');
}

if (demoFormTimezone.value === '') {
demoFormTimezone.classList.add('error');
demoFormStatus.textContent = 'Please select your timezone.';
return;
} else {
demoFormTimezone.classList.remove('error');
}

if (demoFormPhone.value.trim() === '') {
demoFormPhone.classList.add('error');
demoFormStatus.textContent = 'Please enter your phone number.';
return;
} else {
demoFormPhone.classList.remove('error');
}

if (!demoFormGender.querySelector('input:checked')) {
demoFormStatus.textContent = 'Please select your gender.';
return;
}

// Send form data to server
demoFormStatus.textContent = 'Submitting...';

const formData = new FormData(demoForm);

fetch('https://dararqam.org/demo-registration', {
method: 'POST',
body: formData
})
.then(function(response) {
if (response.ok) {
demoForm.reset();
demoFormStatus.textContent = 'Thank you for registering! We will be in touch shortly.';
} else {
demoFormStatus.textContent = 'There was an error submitting the form. Please try again later.';
}
})
.catch(function(error) {
demoFormStatus.textContent = 'There was an error submitting the form. Please try again later.';
});
});

// Reset form errors on input change
demoForm.addEventListener('input', function() {
demoFormName.classList.remove('error');
demoFormEmail.classList.remove('error');
demoFormTimezone.classList.remove('error');
demoFormPhone.classList.remove('error');
demoFormStatus.textContent = '';
});

// Course selection
const courses = document.querySelectorAll('.course');
const courseModal = document.querySelector('.course-modal');
const courseModalTitle = courseModal.querySelector('.course-modal__title');
const courseModalDesc = courseModal.querySelector('.course-modal__desc');
const courseModalPrice = courseModal.querySelector('.course-modal__price');
const courseModalSubmitBtn = courseModal.querySelector('.course-modal__submit');

courses.forEach(function(course) {
course.addEventListener('click', function() {
courseModalTitle.textContent = course.dataset.title;
courseModalDesc.textContent = course.dataset.desc;
courseModalPrice.textContent = course.dataset.price;
courseModal.classList.add('course-modal--open');
});
});

courseModalSubmitBtn.addEventListener('click', function() {
courseModal.classList.remove('course-modal--open');
alert('Thank you for your purchase!');
});

// Close modal on click outside
document.addEventListener('click', function(event) {
if (event.target.closest('.course-modal') || event.target.closest('.course')) {
return;
} else {
courseModal.classList.remove('course-modal--open');
}
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const message = document.getElementById('message').value;

  // Perform form validation and send the message
  // Example: You can use AJAX or fetch to send the form data to the server

  // Clear the form fields after submission
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('number').value = '';
  document.getElementById('message').value = '';
});
//////////////
window.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    var rightsElement = document.getElementById('rights');
    rightsElement.textContent += ' ' + currentYear;
  });

  document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.querySelector('a[href="#contact"]');
    
    contactLink.addEventListener('click', function(event) {
      event.preventDefault();
      
      const contactSection = document.getElementById('contact');
      contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
// // Smooth scrolling function
// function smoothScroll(target, duration) {
//   const targetElement = document.querySelector(target);
//   const targetPosition = targetElement.offsetTop;
//   const startPosition = window.pageYOffset;
//   const distance = targetPosition - startPosition;
//   let startTime = null;

//   function animation(currentTime) {
//     if (startTime === null) startTime = currentTime;
//     const timeElapsed = currentTime - startTime;
//     const scrollY = ease(timeElapsed, startPosition, distance, duration);
//     window.scrollTo(0, scrollY);
//     if (timeElapsed < duration) requestAnimationFrame(animation);
//   }

//   // Easing function
//   function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * t + b;
//     t--;
//     return -c / 2 * (t * (t - 2) - 1) + b;
//   }

//   requestAnimationFrame(animation);
//   }

//   // Add click event listener to the "trialButton"
//   const trialButton = document.getElementById("trialButton");
//   trialButton.addEventListener("click", function (event) {
//   event.preventDefault(); // Prevent default anchor behavior
//   smoothScroll("#registration", 1000); // Smooth scroll to the target section
//   });

//   // Add click event listeners to the "courTriButt" buttons
//   const courTriButtButtons = document.querySelectorAll(".courTriButt");
//   courTriButtButtons.forEach(function (button) {
//   button.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent default anchor behavior
//     smoothScroll("#registration", 1000); // Smooth scroll to the target section
//   });

//   // Add click event listener to the "planTrial"
//   const planTrial = document.getElementById("planTrial");
//   planTrial.addEventListener("click", function (event) {
//   event.preventDefault(); // Prevent default anchor behavior
//   smoothScroll("#registration", 1000); // Smooth scroll to the target section
//   });
  
//   });

// Function to handle smooth scrolling to a section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
// Add event listeners to the navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetSectionId = link.getAttribute('href').substring(1); // Remove the leading "#"
      scrollToSection(targetSectionId);
    });
  });
});

// burger Menu

