## Register a target to monitor. Endpoint: `/api/register` Method: `POST`

Request body:
```
{
  "type": "HTTP" || "TCP",
  "name": <name for the target to check>,
  "url": <url to check>,
  "method": "GET",
  "timeout": Timeout in seconds,
  "interval": Interval in seconds
}
```

## Register a target to monitor. Endpoint: `/api/register` Method: `POST`