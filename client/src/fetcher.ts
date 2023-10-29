export class GraphQLFetcher {
  endpoint: string;
  headers: any;
  constructor(endpoint: string, headers?: any) {
    this.endpoint = endpoint;
    this.headers = headers || {};
  }

  async request(query: string) {
    const response = await fetch(this.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...this.headers,
      },
      body: JSON.stringify({
        query: query,
      }),
    });

    const extracted = await response.json();
    return extracted;
  }
}
