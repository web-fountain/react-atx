## Getting Started

```
$ pnpm install
$ pnpm start
```
## Conventions

### Core
- use single quotes
- use semicolons
- two spaces for indentation
- no comma dangles

### JavaScript
- assigned default parameters are not spaced
```
function foo(a='a', b=13, c=[1, 2, 3], d={ drink: 'coffee' })
```

### React

- the `Components` folder is for layout, reusable, and global components 

### Imports/Exports
- two newlines after imports
- exports always go at the bottom (export default is on the last line)
- group exports whenever possible
- avoid relative imports whenever depth greater than one

### Naming

> [Describe instead of Prescribe](https://blog.fontawesome.com/icon-naming-conventions)
## TODO:

[ ] implement [conventional commits](https://www.conventionalcommits.org/en/v1.0.0)
[ ] set up github actions
[ ] set up branch protections
[ ] contribution guide


# Resources

## Favicon
1. [Set up](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs)

## CSS
1. [REM vs PX](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility)
2. [media-minmax](https://github.com/postcss/postcss-media-minmax)
3. [css nesting](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting)
4. [postcss-import](https://github.com/postcss/postcss-import)

