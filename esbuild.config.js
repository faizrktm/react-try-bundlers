const esbuild = require('esbuild');

esbuild
  .build({
      entryPoints: ['src/index.jsx'],
      bundle: true,
      format: "esm",
      sourcemap: true,
      splitting: true,
      minify: true,
      outdir: 'dist',
      chunkNames: 'chunk/[name]-[hash]',
      define: {
        'process.env.NODE_ENV': '"production"',
      }
  })
  .finally(() => process.exit(1));