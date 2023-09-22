# Hwy

Welcome to your new Hwy project!

Be sure to check out the docs at [https://hwy.dev](https://hwy.dev).

## IMPORTANT VERCEL-SPECIFIC NOTES:

### Environment Variables

In your Vercel dashboard, make sure to set the following environment variable:

```
NODEJS_HELPERS=0
```

### API Directory Hack

The Vercel build will fail if it doesn't find a placeholder file at `/api/main.js` in
your project root. Make sure to commit this file (included in this template), but know
that it will be overwritten during the build process.

### Monorepo Support

If you are using a monorepo and deploying to Vercel, you will have to pass an
extra `publicUrlPrefix` option to `hwyInit`, as shown below:

```ts
hwyInit({
  app,
  importMetaUrl: import.meta.url,
  serveStatic,
  /*
   * The publicUrlPrefix makes the monorepo work with the public
   * folder when deployed with Vercel. If you aren't using a
   * monorepo (or aren't deploying to Vercel), you won't need
   * to add a publicUrlPrefix.
   */
  publicUrlPrefix: process.env.NODE_ENV === 'production' ? 'docs/' : undefined,
  watchExclusions: ['src/styles/tw-output.bundle.css'],
})
```

In the example above, the code for the Hwy project being deployed lives inside a "docs"
directory in the monorepo root (i.e., at `~/docs/*`). It is only necessary to set a
`publicUrlPrefix` when deploying to Vercel, and only if you are using a monorepo, and
only in production.
