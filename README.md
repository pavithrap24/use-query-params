# USE-QUERY-PARAMS

React hook to get the all query params from the url or to get he value of a particular key.

## Installation:

npm i use-query-params -s

## Basic Usage:

import useQueryParams, { useQueryParam } from "./useQueryParams";

  const params = useQueryParams();
  const param = useQueryParam("name");
