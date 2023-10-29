import { getBanner } from "./graphql/getBanner";

const target = document.getElementById("response");

(async function () {
  const res = await getBanner();
  target!.innerHTML += JSON.stringify(res);
})();
