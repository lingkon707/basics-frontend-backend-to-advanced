compare [school], [class] vs [slug] in Next.js dynamic routing.

1️⃣ What [class] and [school] mean

In Next.js, any folder or file in square brackets ([something]) is a dynamic segment of the URL.

[school] → captures the school name from the URL.

[class] → captures the class name under that school.

Example folder structure:

/app/institue/[school]/[class]/page.jsx

URLs:
URL	params from useParams()
/institue/green-valley-school	{ school: 'green-valley-school' }
/institue/green-valley-school/class6	{ school: 'green-valley-school', class: 'class6' }

[school] captures the first dynamic part of the URL.

[class] captures the second dynamic part, nested under the school.

✅ This keeps your code readable because each param has a clear semantic meaning.

2️⃣ What [slug] does

[slug] is generic. You can technically use it for any dynamic segment, like:

/app/institue/[slug]/[slug]/page.jsx

Problem:

Both segments will appear as { slug: 'value' } in useParams().

You cannot tell which is school and which is class without extra logic or parsing.

Harder to maintain and less readable.

3️⃣ Comparison Table
Folder Name Pattern	Pros	Cons
[school]/[class]	Semantic, readable, easy to understand	Longer folder names
[slug]/[slug]	Generic, can use for unknown paths	Confusing, you must parse meaning
[class]/[student]	Semantic for class → student URLs	Must plan hierarchy carefully
4️⃣ TL;DR

Use descriptive names ([school], [class], [student]) for nested dynamic routes.

Use [slug] only for generic unknown segments.

Naming segments semantically improves readability, maintainability, and debugging.