async function getPosts() {
  const response = await fetch(
    "http://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
}

async function getPostsByUserId(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  if (!response.ok) {
    throw new Error("Error");
  }

  const data = await response.json();

  if (data.length === 0) {
    throw new Error(`User with id:${id} not found`);
  }
  return data;
}

export { getPosts, getPostsByUserId };
