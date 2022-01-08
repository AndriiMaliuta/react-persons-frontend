async function getCats() {
  const resp = await fetch("http://localhost:8080/person");
  const cats = await resp.json();
  return cats;
}

export { getCats };
