export async function fetchJson(path) {
  const res = await fetch(path)
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`)
  }
  return res.json()
}

export async function postJson(path, data = {}) {
  const res = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) {
    throw new Error(`POST failed: ${res.status}`)
  }
  return res.json()
}
