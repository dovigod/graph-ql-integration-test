import { GraphQLFetcher } from "../fetcher";
const PORT = 3001;

const requester = new GraphQLFetcher(`http://localhost:${PORT}/graphql`);

export async function getBanner() {
  const query = `
  query{
    banner{
      id,
      title,
      sampleItem {
        productId
      }
    }
  }
  `;

  const response = await requester.request(query);
  return response;
}
