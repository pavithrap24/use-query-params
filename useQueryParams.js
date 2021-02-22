function useQueryParams() {
  const oldUrl = window.location.search;
  const url = oldUrl.substr(1);

  let params = [];

  const keyValueParams = url.split("&");
  for (var index in keyValueParams) {
    let key = keyValueParams[index].split("=")[0];
    let value = keyValueParams[index].split("=")[1];
    if (keyValueParams[index] !== "") {
      params.push({ [key]: value });
    }
  }
  return params;
}

export function useQueryParam(queryParam) {
  const params = useQueryParams();
  let returnValue;
  params.map((param) => {
    for (const [key, value] of Object.entries(param)) {
      if (`${key}` === queryParam) {
        returnValue = `${value}`;
      }
    }
  });
  return returnValue
    ? returnValue
    : console.error("Query Param is not prsent.");
}

export default useQueryParams;
