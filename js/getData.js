let fetchData = async (url) => {
  let response = await fetch(url);
  let json = await response.json();
  return json;
};

let getData = async (url) => {
  let data = await fetchData(url);
  return data;
}