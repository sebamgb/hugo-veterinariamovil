---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
img: images/{{ replace (.File.Dir | lower) "/" "" }}/{{- replace .Name "-" "_" -}}.jpg
text:
btn:
    title: ¡Lo quiero!
    url: "https://api.whatsapp.com/send?l=es&type=phone_number&"
    whatsapp:
        number: 56975440757
        text: Hola, quisiera agendar hora para {{ replace .Name "-" " " | title }}
---
