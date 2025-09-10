# Frontend Developer & API: Survival Guide

## 1. Why APIs Matter for Frontend
- Fetching data to display in UI (e.g., blog posts, products, user profiles).
- Sending data back to backend (e.g., forms, comments, orders).
- Frontend is often **dependent on API stability**, so knowing how to handle APIs is essential.

---

## 2. Core API Skills for Frontend
1. **HTTP Methods**
   - GET → fetch data
   - POST → send data
   - PUT/PATCH → update data
   - DELETE → remove data

2. **Handling JSON**
   - Most APIs return data in JSON.
   - Practice parsing, displaying, and transforming JSON.

3. **Error Handling**
   - Handle errors gracefully (e.g., 404, 500).
   - Show user-friendly messages.

4. **Async/Await & Promises**
   - Fetch API or Axios for network calls.
   - Handle asynchronous behavior to avoid “undefined data” bugs.

5. **Understanding API Docs**
   - Know endpoints, parameters, query strings, headers, authentication.
   - Always read API docs before coding.

---

## 3. Common Issues & How to Survive
1. **CORS Issues**
   - Browser blocks requests to different origin.
   - Solutions:
     - Use proxy during development.
     - Ask backend to allow your origin.

2. **Network Errors / Timeout**
   - Retry mechanism or proper error messages.
   - Check internet connectivity or server status.

3. **Undefined / Null Data**
   - Always check if data exists before rendering.
   - Use optional chaining `user?.name`.

4. **Slow API Responses**
   - Show loading spinners or skeletons.
   - Avoid blocking UI.

5. **Version Changes / Deprecated Endpoints**
   - Keep API usage modular.
   - Monitor backend updates.

---

## 4. Best Practices
- Keep API calls **centralized** (e.g., api.js or services folder).
- Use **environment variables** for URLs and keys.
- Separate **UI logic and API logic**.
- Write **unit tests for API functions** if possible.
- Always **log and debug API responses** before using them.

---

## 5. Key Advice
- **Don’t fear APIs**; treat them like another data source.
- Debug step by step:
  1. Check endpoint in browser/Postman.
  2. Inspect response structure.
  3. Handle errors in frontend.
- Learn Axios / Fetch thoroughly.
- Knowing even **basic API handling** makes you survive and shine in real projects.