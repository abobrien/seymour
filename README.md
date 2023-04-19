# Nucleus

## Folder Structure

The **public** directory is used for files which can be safely exposed to the Internet and run client-side. 

**public**
* css
  * Style sheets
* html
  * Static HTML
* img
  * Images and videos
* js
  * Client-side JavaScript

The **src** directory contains functional code and secure content which is processed server-side.

**src**
* config
  * Configuration files and environmental variables used across the app
* controllers
  * Business logic, often in conjunction with middleware
* middleware
  * Segregating middlewares by purpose (authentication, database, etc.)
* models
  * Representing objects from an ORM\ODM, often in conjunction with middlewares
* routes
  * Directing requests and responses, often in conjunction with controllers
* tests
  * Unit and integration tests
* utils
  * Pure functions that do not depend on any kind of app context
* views
  * Dynamic views using a templating engine (EJS, pug, etc.)