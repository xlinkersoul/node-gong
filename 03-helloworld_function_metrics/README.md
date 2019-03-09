## Goal

Write first Metrics using Node.JS

## Steps

1. `npm install` and `npm start`
2. Call http://127.0.0.1:9999
3. Call http://127.0.0.1:9999/metrics
4. Edit prometheus.yml under Prometheus installation path, modify target port to 9999, `- targets: ['localhost:9999']` to get metrics data from service1
5. Start Prometheus
6. Open Targets on the Menu `Status->Targets`, the targets state should be `UP` 
7. Query by `equinox_node_result`
8. Query `equinox_node_result {code="2001"}`
9. Query `equinox_node_result {server="OCF3g402"}`
