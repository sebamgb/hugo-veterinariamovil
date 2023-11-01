---
title: "Contacto"
date: 2021-12-17T13:31:12+11:00
draft: false
menu: main
weight: 100
type: contact
# google map url
gmapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.789243479668!2d151.0872133152887!3d-33.817751523842766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ5JzAzLjkiUyAxNTHCsDA1JzIxLjkiRQ!5e0!3m2!1sen!2sau!4v1612097056169!5m2!1sen!2sau"
robots: index, follow
# contact form
form:
  title: Envianos un mensaje
  id: contactForm
  submitText: Enviar
  submitId: submit
  inputs:
  - id: contact-name
    col: col-md-6
    name: name
    type: text
    placeholder: Nombre
    minlength: 2
    required: true
    invalidFeedback: Por favor ingresa tu nombre
  - id: contact-email
    col: col-md-6
    name: email
    type: email
    placeholder: Correo electrónico
    required: true
    invalidFeedback: Por favor ingresa un correo
  - id: contact-phone
    col: col-md-6
    name: phone
    type: tel
    placeholder: Número de teléfono
    minlength: 8
    required: true
    invalidFeedback: Por favor ingresa un número de teléfono
  - id: contact-subject
    col: col-md-6
    name: subject
    type: text
    placeholder: Asunto
    minlength: 2
    required: true
    invalidFeedback: Por favor ingresa un asunto para el mensaje
  - id: contact-message
    col: col-12
    name: message
    type: textarea
    placeholder: Mensaje
    minlength: 6
    rows: 6
    required: true
    invalidFeedback: Por favor ingresa un mensaje
---
Puedes contactarnos con los detalles de abajo o llenando el formulario del lado de estos.
