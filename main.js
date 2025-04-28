emailjs.send(serviceID, templateID, templateParams, options);

var templateParams = {
  name: 'James',
  notes: 'Check this out!',
};
console.log(templateParams);
emailjs.send('service_pjnwvw5', 'service_pjnwvw5', templateParams).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  },
);
