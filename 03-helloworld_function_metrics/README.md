## Goal

Write first Metrics using Node.JS

## Steps

1. `npm install` and `npm start`
2. open http://127.0.0.1:9999
3. open http://127.0.0.1:9999/metrics
>#Equinox Custom Stat<br/>
>equinox_node_result{service="OCF", server="OCF3g402",code="2001"} 999<br/>
>equinox_node_result{service="OCF", server="OCF3g402",code="5012"} 2<br/>
4. inspect `service1.js`
***
5. to get metrics data from service1<br/>
   edit the prometheus.yml under prometheus installation path<br/>
   modify `target port` to `9999`<br/>
   example `- targets: ['localhost:9999']`<br/>
6. Start Prometheus
7. open http://127.0.0.1:9090
8. open `Targets` on the Menu `Status->Targets`, the targets state should become `UP` in 15 seconds
9. from `Graph` Menu<br/>
execute `Query` with `equinox_node_result` statement
10. execute `Query` with `equinox_node_result {code="2001"}` statement
11. execute `Query` with `equinox_node_result {server="OCF3g402"}` statement