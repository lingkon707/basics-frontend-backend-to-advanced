# SSR vs SSG in a Blog Website

## SSR – Server-Side Rendering
- Pages are generated **on the server for every user request**.
- Ideal for **dynamic content** that changes frequently.
- Example in a blog website:
  - Homepage showing **latest posts**.
  - User-specific dashboards or content that must be up-to-date.
- Pros:
  - Always shows fresh, real-time data.
- Cons:
  - Slightly slower because the server generates the page on each request.

---

## SSG – Static Site Generation
- Pages are generated **at build time** before deployment.
- Ideal for **content that rarely changes**.
- Example in a blog website:
  - Individual blog posts, tutorials, or documentation.
- Pros:
  - Very fast loading since pages are static HTML.
  - Can be cached easily.
- Cons:
  - Content might be stale until the next build.

---

## Quick Comparison

| Feature             | SSR                     | SSG                        |
|--------------------|------------------------|----------------------------|
| When page generated | On every request       | At build time              |
| Data freshness      | Always fresh           | Might be stale until rebuild |
| Speed               | Slightly slower        | Very fast (static HTML)   |
| Use case            | Dynamic blogs, dashboards | Tutorial posts, documentation |

---

**Summary for a Blog Website:**
- Homepage showing latest posts → **SSR**  
- Individual posts that don’t change often → **SSG**