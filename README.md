# simple-benchmark

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple microbenchmark for comparing the performance of a tight arithmetic loop across Deno, Node.js, and Bun.

## How It Works

This script measures the execution speed of one billion integer additions.

1.  **Null Loop:** It first runs an empty `for` loop to establish a baseline for the loop overhead of the JavaScript runtime.
2.  **Add Loop:** It then runs a second loop that performs an integer addition on each iteration.
3.  **Calculation:** The final `operations / sec` metric is calculated by subtracting the null loop's execution time from the add loop's time. This isolates the performance of the arithmetic operations from the loop overhead.

## Example Results (Apple M1 Pro)

```console
$ deno run -A bench.js
471 msec (null loop)
936 msec (add loop)
500000000995475700
2149069 operations / sec

$ node bench.js
473 msec (null loop)
941 msec (add loop)
500000000995475700
2134067 operations / sec

$ bun bench.js
323 msec (null loop)
939 msec (add loop)
500000000995475700
1625792 operations / sec
```

## Requirements

- Deno
- Node.js
- Bun

## Usage

To run the benchmark, execute `bench.js` with your desired JavaScript runtime:

```bash
# Run with Deno
deno run -A bench.js

# Run with Node.js
node bench.js

# Run with Bun
bun bench.js
```

## License

MIT