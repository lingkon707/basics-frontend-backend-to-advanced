# API Survival Cheat Sheet for Frontend Developers

---

## 1. HTTP Methods
| Method | Use Case |
|--------|---------|
| GET    | Fetch data from server |
| POST   | Send new data to server |
| PUT    | Update existing data fully |
| PATCH  | Update existing data partially |
| DELETE | Remove data |

---

## 2. Common API Tools
- **Fetch API** → built-in, simple
- **Axios** → handles requests, responses, errors better
- **Postman / Insomnia** → test endpoints before coding

---

## 3. Async Handling
```text
// Use async/await
try {
  const response = await fetch(url);
  const data = await response.json();
} catch(error) {
  console.log(error);
}