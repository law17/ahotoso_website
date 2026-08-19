---
layout: default
permalink: /contact/
title: Contact
---
<section class="page-hero"><div class="shell"><span class="eyebrow">Contact</span><h1>Talk to Ahotosoɔ.</h1><p>For a specific property, construction or monitoring request, use the service request form so we can understand the scope properly.</p></div></section>
<section class="section"><div class="shell grid-3"><div class="card"><h3>Email</h3><p><a href="mailto:{{ site.contact.email }}">{{ site.contact.email }}</a></p></div><div class="card"><h3>Service requests</h3><p><a href="{{ '/request-a-service/' | relative_url }}">Submit a structured request</a></p></div><div class="card"><h3>WhatsApp</h3>{% if site.contact.whatsapp_number and site.contact.whatsapp_number != '' %}<p><a href="https://wa.me/{{ site.contact.whatsapp_number }}?text={{ site.contact.whatsapp_message | uri_escape }}" target="_blank" rel="noopener noreferrer">Start a WhatsApp conversation</a></p>{% else %}<p>Business WhatsApp number will be added before launch.</p>{% endif %}</div></div></section>
