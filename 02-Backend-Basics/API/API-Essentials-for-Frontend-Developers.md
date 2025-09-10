# API Essentials for Frontend Developers (One-Page)

---

## 1. HTTP Basics
- **GET** → fetch data  
- **POST** → send new data  
- **PUT/PATCH** → update data  
- **DELETE** → remove data  

---

## 2. Fetching Data
- Use **Fetch API** or **Axios**  
- Example workflow:  
  1. Call API endpoint  
  2. Parse JSON  
  3. Update UI  

---

## 3. Async Handling
- Use **async/await** or `.then()`  
- Always handle errors: `try/catch`  
- Show **loading state** in UI  

---

## 4. Error Handling
- Common errors: 404, 500, network failure  
- Show user-friendly messages:  
  - “Data not found” → 404  
  - “Server error, try later” → 500  

---

## 5. Debugging Checklist
1. Test endpoint in **Postman/browser**  
2. Check **network tab** in DevTools  
3. Inspect JSON response  
4. Handle null/undefined: `data?.property`  
5. Retry / fallback if needed  

---

## 6. Best Practices
- Centralize API calls (`api.js` / `services/`)  
- Use **environment variables** for URLs & keys  
- Separate **UI logic** from **API logic**  
- Log responses for debugging  

---

## 7. Mindset
- Treat APIs as **data sources**, not backend logic  
- Focus on **fetch, display, send, error handling**  
- On-job learning will cover advanced topics