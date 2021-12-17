---
title: "Contact"
date: 2021-12-17T13:31:12+11:00
draft: false
menu: main
weight: 100
type: contact
# google map url
gmapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.789243479668!2d151.0872133152887!3d-33.817751523842766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ5JzAzLjkiUyAxNTHCsDA1JzIxLjkiRQ!5e0!3m2!1sen!2sau!4v1612097056169!5m2!1sen!2sau" 
# contact form
form:
  title: Send us a Message
  id: js-contactForm
  inputs:
  - id: contact-name
    col: col-md-6
    name: name
    type: text
    placeholder: Name
    minlength: 2
    required: true
    invalidFeedback: Please enter name
  - id: contact-email
    col: col-md-6
    name: email
    type: email
    placeholder: Email Address
    required: true
    invalidFeedback: Please enter email address
  - id: contact-phone
    col: col-md-6
    name: phone
    type: tel
    placeholder: Phone Number
    minlength: 8
    required: true
    invalidFeedback: Please enter phone number
  - id: contact-subject
    col: col-md-6
    name: subject
    type: text
    placeholder: Subject
    minlength: 2
    required: true
    invalidFeedback: Please enter message subject
  - id: contact-message
    col: col-12
    name: message
    type: textarea
    placeholder: Message
    minlength: 6
    rows: 6
    required: true
    invalidFeedback: Please enter message.
---
You can contact us on the details below, or simply fill in the contact form to the right.
