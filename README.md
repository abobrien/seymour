# Seymour

## Folder Structure

The **public** directory contains files which can be safely exposed to the Internet and processed client-side. 

**public**
* css
  * Style sheets
* fonts
  * Non-standard fonts
* html
  * Static HTML
* img
  * Images and videos
* js
  * Client-side JavaScript

The **src** directory contains functional code and secure content which is processed server-side.

**src**
* config
  * Constants and environmental variables used across the app
* controllers
  * Business logic, often used in conjunction with middleware
* middleware
  * Segregating middlewares by purpose (authentication, database, etc.)
* models
  * Representing objects from an ORM\ODM
* routes
  * Directing requests and responses, often in conjunction with controllers
* tests
  * Unit and integration tests
* utils
  * Pure functions that do not depend on any kind of app context
* views
  * Dynamic views using a templating engine (EJS, pug, etc.)