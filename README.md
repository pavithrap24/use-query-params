# USE-QUERY-PARAMS

React hook to get the all query params from the url or to get he value of a particular key.

## Installation:

```

npm i use-params-query -s

```

## Basic Usage:

```

import useQueryParams, { useQueryParam } from "use-params-query";

const params = useQueryParams();
const param = useQueryParam("name");

```

## Example:

```
for the below url the results will be as follows.

http://localhost:3000?name=Sam&age=20

const params = useQueryParams();
the result will be:  [{name: 'Sam'}, {age: 20}]

const param = useQueryParam("name");
the result will be:  Sam

```
