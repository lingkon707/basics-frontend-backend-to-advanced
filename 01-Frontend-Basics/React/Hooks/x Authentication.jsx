axios.get("/protected", {
  headers: { Authorization: `Bearer ${token}` }
});
