import { fetchGreeting } from "./graphql/fetchGreeting";

const target = document.getElementById("response");

(async function () {
  const res = await fetchGreeting();
  target!.innerHTML += res;
})();
