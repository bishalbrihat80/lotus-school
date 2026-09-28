
SHREE LOTUS ENGLISH BOARDING SCHOOL — WEBSITE PACKAGE
======================================================

This is a static, multi-page school website inspired by the information-dense,
structured style of Nepal government portals such as OPMCM, but with its own
school branding and visual design.

1. QUICK START
--------------
Open index.html in a browser. No installation is required.

For best testing, use a simple local server:
  - VS Code: install Live Server and open index.html
  - Python: python -m http.server 8000
Then visit http://localhost:8000

2. FOLDER STRUCTURE
-------------------
index.html
assets/
  css/style.css       -> all visual design
  js/app.js           -> bilingual switch, menu, clock, BS display
  images/             -> replaceable photos and logo
data/
  site-data.js        -> notices, events, students, classes, facilities
pages/
  notice.html
  gallery.html
  events.html
  academics.html
  calendar.html
  admission.html
  routine.html
  students.html
  exam.html
  contact.html
  important-links.html

3. HOW TO CHANGE PHOTOS
-----------------------
Keep the filenames and replace the JPG files inside:
  assets/images/

Important files:
  logo.jpg
  principal.jpg
  chairperson.jpg
  slide-1.jpg
  slide-2.jpg
  slide-3.jpg
  gallery-1.jpg
  gallery-2.jpg
  gallery-3.jpg

If you want a different filename, update the corresponding HTML reference.

4. HOW TO UPDATE NOTICES / EVENTS / STUDENTS
---------------------------------------------
Edit:
  data/site-data.js

The home page and pages read their demo content from this file.
For a real school, do NOT store sensitive student records in a public
JavaScript file. Use a secure server/database and authentication.

5. HOW TO CHANGE SCHOOL INFORMATION
------------------------------------
Most visible text is in the HTML files. Search for:
  "Shree Lotus English Boarding School"
  "Sallaghari-11"
  "Yagya Bahadur Ayer"
  "Padam Bahadur Ayer"

The school name/address/phone data also appears in data/site-data.js.

6. BILINGUAL SWITCH
-------------------
The top-right language button switches English/Nepali.
Translations are stored in assets/js/app.js inside I18N.

7. DATE AND TIME
----------------
The header shows Nepal time (Asia/Kathmandu) and a BS date.
The converter is kept locally in app.js so the clock does not require an
external API. The included conversion table is intended for the current
school-site range (2080–2089 BS). If you need dates beyond this range, extend
the bsData table with a verified Nepali-calendar data source.

8. ONLINE EXAM
--------------
pages/exam.html contains a working browser-side MCQ demo.
For actual examinations, results, timers, anti-cheating controls, student
accounts, and result storage, connect it to a secure backend/database.

9. STUDENT STATUS
-----------------
pages/students.html demonstrates lookup by:
  Symbol No. + Date of Birth + Name

The demo data is in data/site-data.js.
For a production school system, move student data to a secure backend.

10. MAP
-------
The contact page uses an OpenStreetMap embed. Verify the exact school pin
before publishing the site.

11. IMPORTANT
-------------
This package is a front-end website template. It does not include a server,
CMS, database, login system, email server, or payment gateway.

12. CUSTOMIZATION PRINCIPLE
---------------------------
The site is deliberately separated into:
  - assets = design and media
  - data = editable content
  - pages = individual sections

This means you can update notices, events, images, routine, and student-demo
content without rewriting the whole website.
