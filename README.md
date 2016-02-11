# Load Babel Presets Faster

This package flattens and dedups presets to make Babel load faster.

The transformations in a Babel preset are independent packages. Although these packages share many of the same dependencies, they all bring along their own node_modules. For this reason, a large preset like [es2015](http://babeljs.io/docs/plugins/preset-es2015/) can be horribly bloated, taking a looooong time to install and to load.

Because the package has no dependencies, it installs quickly:

```
npm install babel-fast-presets
```

Use the flat presets in `.babelrc`:

```
{
  presets: ["babel-fast-presets/es2015-stage1"]
}
```

Which is the same as:

```
{
  presets: ["es2015","stage1"]
}
```

# React

The React preset is pretty fast to load, so just use it normally:

```
{
  presets: ["babel-fast-presets/es2015-stage1", "react"]
}
```

# Speedup

I get a ~73% reduction in loading time.

With flat presets:

```
$ babel --presets babel-fast-presets/es2015-stage1 examples/foo.js
1.27s user 0.11s system 104% cpu 1.314 total
```

Old presets:

```
$ time babel --presets es2015,stage-1 examples/foo.js
4.80s user 0.40s system 101% cpu 5.100 total
```

Enjoy~