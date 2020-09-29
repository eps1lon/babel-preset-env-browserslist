## Expected behavior

`yarn babel:query` and `yarn babel:hardcoded` should have the same output.

## Actual behavior

Even though both use the same "resolved"<sup>1</sup> browserslist query the `targets` are different.

<sup>1</sup> The output of `npx browserslist` for the respective queries is equal.
