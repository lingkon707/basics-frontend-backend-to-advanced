# 🧰 Postman A to Z — Complete Guide

Postman is a **powerful API development and testing tool** that helps developers build, test, and document APIs efficiently.  
This guide covers all major features, workflows, and best practices.

---

## A — API Requests
- Core of Postman.  
- Types of HTTP methods:
  - **GET** → Fetch data
  - **POST** → Create new resource
  - **PUT** → Replace existing resource
  - **PATCH** → Update part of resource
  - **DELETE** → Remove resource
- Request parts:
  - URL / Endpoint
  - Method
  - Headers (Authorization, Content-Type)
  - Body (JSON, form-data, raw)
  - Query Parameters (?id=123)

---

## B — Body Types
- **form-data** → Upload files or send key-value data
- **x-www-form-urlencoded** → URL-encoded key-value pairs
- **raw** → JSON, text, or XML
- **binary** → Upload raw file

---

## C — Collections
- Group multiple requests together.
- Benefits:
  - Organize APIs logically
  - Share with teammates
  - Run automated tests on multiple requests

---

## D — Documentation
- Postman auto-generates **API docs** from collections.
- Features:
  - Endpoint descriptions
  - Example requests/responses
  - Authentication info
- Can be shared publicly or privately.

---

## E — Environments
- Store variables (base URLs, tokens) for different stages.
- Types of variables:
  - Global
  - Environment-specific
  - Collection-specific
  - Local (request-level)
- Example: `{{base_url}}/users`

---

## F — Folders
- Organize requests **inside collections**.
- Makes large projects easier to navigate.

---

## G — Globals
- Variables accessible across all collections.
- Useful for shared constants like API keys.

---

## H — Headers
- Metadata sent with requests.
- Examples:
  - `Content-Type: application/json`
  - `Authorization: Bearer <token>`

---

## I — Import & Export
- Import:
  - Collections from JSON files
  - Swagger/OpenAPI specs
- Export:
  - Share collections with team
  - Backup requests

---

## J — JSON Support
- Postman handles JSON natively.
- Auto-pretty prints responses.
- Can validate JSON in tests:
```javascript
pm.test("Valid JSON", () => {
  pm.response.to.be.json;
});
