# simple-benchmark

# Result

Apple M1 Pro
```
deno run -A bench.js
471 msec (null loop)
936 msec (add loop)
500000000995475700
2149069 operations / sec

node bench.js 
473 msec (null loop)
941 msec (add loop)
500000000995475700
2134067 operations / sec

bun bench.js
323 msec (null loop)
939 msec (add loop)
500000000995475700
1625792 operations / sec
```
