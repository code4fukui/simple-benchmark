# simple-benchmark

Deno、Node.js、Bunの間で、タイトな算術ループのパフォーマンスを比較するためのシンプルなマイクロベンチマークです。

## 仕組み

このスクリプトは、10億回の整数加算の実行速度を測定します。

1.  **ヌルループ:** 最初に空の `for` ループを実行し、JavaScriptランタイムにおけるループオーバーヘッドの基準値を設定します。
2.  **加算ループ:** 次に、各イテレーションで整数加算を行う2番目のループを実行します。
3.  **計算:** 最終的な `operations / sec` の指標は、加算ループの実行時間からヌルループの実行時間を差し引くことで計算されます。これにより、ループのオーバーヘッドから算術演算のパフォーマンスを分離します。

## 実行結果の例 (Apple M1 Pro)

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

## 動作環境

- Deno
- Node.js
- Bun

## 使用方法

ベンチマークを実行するには、任意のJavaScriptランタイムで `bench.js` を実行します。

```bash
# Denoで実行
deno run -A bench.js

# Node.jsで実行
node bench.js

# Bunで実行
bun bench.js
```

## ライセンス

MIT
