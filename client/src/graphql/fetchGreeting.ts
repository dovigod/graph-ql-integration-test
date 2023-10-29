const PORT = 3001;

export async function fetchGreeting() {
  const response = await fetch(`http://localhost:${PORT}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: "query { greeting }",
    }),
  });

  const { data } = await response.json();
  return data.greeting;
}
