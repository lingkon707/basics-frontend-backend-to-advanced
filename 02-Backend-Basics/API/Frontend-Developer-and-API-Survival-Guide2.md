# Frontend Developer & API Survival Guide

## 1. Why APIs Matter for Frontend
- Fetch data to display in UI (e.g., blog posts, products, user profiles)
- Send data back to backend (e.g., forms, comments, orders)
- Frontend relies on API stability, so understanding and handling them is critical

---

## 2. Core API Skills
1. **HTTP Methods**
   - GET → fetch data
   - POST → send data
   - PUT/PATCH → update data
   - DELETE → remove data
2. **Handling JSON**
   - Most APIs return JSON
   - Practice parsing, displaying, transforming JSON
3. **Error Handling**
   - Handle errors gracefully (404, 500)
   - Show user-friendly messages
4. **Async/Await & Promises**
   - Fetch API or Axios
   - Avoid “undefined data” bugs
5. **Understanding API Docs**
   - Know endpoints, params, headers, authentication

---

## 3. Common Issues & How to Survive
1. **CORS Issues**
   - Use proxy during development
   - Ask backend to allow your origin
2. **Network Errors / Timeout**
   - Retry mechanism or proper error messages
3. **Undefined / Null Data**
   - Use optional chaining: `user?.name`
4. **Slow API Responses**
   - Show loading spinners or skeletons
5. **Version Changes / Deprecated Endpoints**
   - Keep API usage modular
   - Monitor backend updates

---

## 4. Best Practices
- Centralize API calls (`api.js` or services folder)
- Use environment variables for URLs and keys
- Separate UI logic and API logic
- Write unit tests for API functions if possible
- Log and debug API responses before using them

---

## 5. Perfect Time to Use SSR
- When fresh, dynamic, or personalized content is needed
- Use Cases:
  - Dynamic blogs, dashboards
  - User-specific pages
  - SEO-critical pages with frequently changing content
  - Real-time data (stocks, live scores)
- Avoid SSR for rarely-changing content (use SSG instead)

---

## 6. SSR vs SSG in a Blog Website

### SSR – Server-Side Rendering
- Pages generated on server for **every request**
- Best for dynamic content (e.g., homepage with latest posts)
- Pros: always fresh
- Cons: slightly slower

### SSG – Static Site Generation
- Pages generated at **build time**
- Best for content that rarely changes (e.g., individual blog posts)
- Pros: very fast, cacheable
- Cons: might be stale until next build

### Quick Comparison Table

| Feature             | SSR                     | SSG                        |
|--------------------|------------------------|----------------------------|
| When page generated | On every request       | At build time              |
| Data freshness      | Always fresh           | Might be stale until rebuild |
| Speed               | Slightly slower        | Very fast (static HTML)   |
| Use case            | Dynamic blogs, dashboards | Tutorial posts, documentation |

---

## 7. API Survival Cheat Sheet

### HTTP Methods
| Method | Use Case |
|--------|---------|
| GET    | Fetch data |
| POST   | Send new data |
| PUT    | Update data fully |
| PATCH  | Update data partially |
| DELETE | Remove data |

### Common API Tools
- Fetch API → built-in
- Axios → handles requests/responses/errors better
- Postman / Insomnia → test endpoints

### Async Handling
- Always use `async/await` or `.then()` properly
- Handle errors and show loading states

### Error Handling
- Check `response.status` (200, 404, 500)
- Show user-friendly messages
- Use `try/catch` for network errors

### Common Issues & Quick Fixes
| Issue               | Solution |
|--------------------|---------|
| CORS blocked        | Use proxy, backend allow origin |
| Undefined / null data | Optional chaining `user?.name` |
| Slow response        | Show loading spinner / skeleton UI |
| API changes          | Centralize API calls, update endpoints |

### Best Practices
- Centralize API calls (`api.js` or services folder)
- Keep URLs & keys in environment variables
- Separate UI and API logic
- Log responses for debugging
- Optional: unit tests for API functions

### Quick Debugging Checklist
1. Test endpoint in Postman/browser
2. Check network tab in DevTools
3. Inspect response structure
4. Handle errors gracefully
5. Retry / fallback if needed
6. Keep API logic modular

### Key Mindset
- Treat APIs as data sources
- Debug systematically
- Basic handling + good practices = survive and shine in real-world projects

---

## 8. Alternative Ways to Get a Frontend Job Fast (If Job Posts Are Scarce)
1. **Direct Outreach / Networking**
   - Contact companies directly
   - Share portfolio/GitHub
2. **Freelancing / Short-Term Projects**
   - Upwork, Fiverr, LinkedIn gigs
   - Convert freelance → full-time
3. **Build Your Own Projects / Portfolio**
   - 3–5 strong React/Next.js projects
   - Deploy online (Netlify, Vercel)
4. **Open Source Contribution**
   - Show you can work with existing code
5. **Attend Hackathons / Coding Events**
   - Meet hiring managers
   - Work on real projects
6. **Referrals**
   - Ask ex-colleagues, teachers
7. **Apply Beyond LinkedIn**
   - Job portals, company websites, AngelList
8. **Optional: Contract / Internship**
   - Short-term roles can lead to full-time

---

## 9. 1-Month Job Focus Advice
- Focus on **high-impact skills only**: React, Next.js, TypeScript, Git
- Build or polish **portfolio projects**
- Handle **API tasks confidently**
- Apply **directly to companies + freelance platforms**
- Network & request **referrals**
- Maintain **daily routine**: coding + portfolio + applications