<p align="center">
    <img width="40%" src="https://raw.githubusercontent.com/rootr/update-v/master/img/update-v.png" alt="update-v title image">
</p>

<p align="center">
    A simple command-line utility that updates the version in your project's package.json file
</p>

<p align="center">    
    <a href="https://github.com/rootr/update-v/issues" title="Open Issues" alt="Open Issues"><img src="https://img.shields.io/github/issues-raw/rootr/update-v.svg" /></a>
    <a href="https://github.com/rootr/update-v/blob/master/LICENSE" title="License" alt="License"><img src="https://img.shields.io/github/license/rootr/update-v.svg" /></a>
    <a href="https://npmjs.org/package/update-v" title="View on npm" alt="View on npm"><img src="http://img.shields.io/npm/v/update-v.svg?style=flat" /></a>
</p>

## Getting Started

These instructions will get you a copy of `update-v` on your local machine.

### Installing

`update-v` is available via npm

```
npm i -g update-v
```

## Built With

- [node-fs-extra](https://github.com/jprichardson/node-fs-extra) - Reading/writing JSON files
- [command-line-args](https://github.com/75lb/command-line-args) - Processing command-line flags

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Contributing

If you would like to contribute to this project, first of all, thank you.

## Authors

- **Martin Cox** - _Initial work_

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Usage

This is how you can use `update-v`.

### Basic Usage

Just run `update [-m|-f|-p]`.

**Example**

```bash
$ cd my/awesome/module
$ update-v -p
```

Updates the `package.json` file -> version by `0.0.1`.

## API Reference

Below is `update-v`'s API reference.

### `-m|--major`

_Increment the first version digit (breaking change)_

- **Type**: `Boolean`

**Example**

```bash
$ update-v -m
```

```js
// Change package.json file from this:
{

    "version": "1.0.0"

}

// Into this:
{

    "version": "2.0.0"

}
```

### `-f|--feature|--minor`

_Increment the second version digit (additional feature)_

- **Type**: `Boolean`

**Example**

```bash
$ update-v -f
```

```js
// Change package.json file from this:
{

    "version": "1.0.0"

}

// Into this:
{

    "version": "1.1.0"

}
```

### `-p|--patch`

_Increment the third version digit (patched issue)_

- **Type**: `Boolean`

**Example**

```bash
$ update-v -p
```

```js
// Change package.json file from this:
{

    "version": "1.0.0"

}

// Into this:
{

    "version": "1.0.1"

}
```
