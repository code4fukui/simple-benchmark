# simple-benchmark

# Result

Apple M1 Pro
```
deno run -A bench.js
471msec (null loop)
936msec (add loop)
500000000995475700
2149069operations / sec

node bench.js 
473msec (null loop)
941msec (add loop)
500000000995475700
2134067operations / sec

bun bench.js
323msec (null loop)
939msec (add loop)
500000000995475700
1625792operations / sec
```
