Just some a small test using the new Solhint plugin system (https://github.com/protofire/solhint/blob/2.0/docs/writing-plugins.md).
What does it do? Basically it prevents contract from being named `Foo` and it will throw an error if you use imprecise `uint`.

## Usage

Install the plugin with `npm i solhint-plugin-test-precise-uint` and update your `.solhint.json` with:
```
{
  "extends": ["solhint:default"],
  "plugins": ["test-precise-uint"],
  "rules": {
    "test-precise-uint/precise-uint": "error",
    "test-precise-uint/no-foos": "error",
  }
}
```
