3️⃣ When to use Object.keys()

You use it whenever:

You have a JS object and need its property names as an array.

You want to dynamically generate UI from a JSON structure.

You need dynamic routing — e.g., every school in your JSON becomes a page.

4️⃣ Comparison

| Data type        | Use case         | Iteration method          |
| ---------------- | ---------------- | ------------------------- |
| Array            | List of items    | `map()`                   |
| Object           | Key-value pairs  | `Object.keys()` + `map()` |
| Object + values  | Need values      | `Object.values()`         |
| Object + entries | Need key & value | `Object.entries()`        |


✅ TL;DR:

We use Object.keys(studentsData) to get all school names as an array so we can loop over them and create links dynamically.