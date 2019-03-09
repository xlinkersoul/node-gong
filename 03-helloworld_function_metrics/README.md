## Goal

Write first Metrics using Node.JS

## Steps

1. `npm install` and `npm start`
2. Call http://127.0.0.1:9999
3. Call http://127.0.0.1:9999/metrics
4. to get metrics data from service1<br/>
   edit the prometheus.yml under prometheus installation path<br/>
   modify `target port` to `9999`<br/>
   example `- targets: ['localhost:9999']`<br/>
5. Start Prometheus
6. Open `Targets` on the Menu `Status->Targets`, the targets state should be <span style="color:DarkGreen">`UP`</span> 
7. from `Graph` Menu<br/>
execute `Query` by `equinox_node_result`
8. execute `Query` Query `equinox_node_result {code="2001"}`
9. execute `Query` Query `equinox_node_result {server="OCF3g402"}`