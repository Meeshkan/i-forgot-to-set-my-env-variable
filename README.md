# i-forgot-to-set-my-env-variable

In your code, when storing a URL in an environment variable, do:

```
const foo = process.env.IMPORTANT_SECRET || "https://i-forgot-to-set-my-env-variable.com"
```

This is important.
