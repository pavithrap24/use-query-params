import React from "react";

function useQueryParams() {
  const oldUrl = window.location.search;
  let url = oldUrl.substr(1);

  let params = [];

  while (url.length > 0 && url.indexOf("=") != -1) {
    const keyLastIndex = url.indexOf("=");
    const key = url.substring(0, keyLastIndex);
    let value;
    const andIndex = url.indexOf("&");
    if (andIndex != -1) {
      value = url.substring(keyLastIndex + 1, andIndex);
      url = url.substring(andIndex + 1);
    } else {
      value = url.substring(keyLastIndex + 1);
      url = "";
    }
    params.push({ [key]: value });
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
