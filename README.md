## Getting Started

```
$ pnpm install
$ pnpm start
```
# Conventions

### Core
- use single quotes
- use semicolons
- two spaces for indentation
- no comma dangles

### Imports/Exports
- two newlines after imports
- exports always go at the bottom (export default is on the last line)
- group exports whenever possible
- avoid relative imports whenever depth greater than one

### JavaScript
- assigned default parameters are not spaced

```javascript
function foo(a='a', b=13, c=[1, 2, 3], d={ drink: 'coffee' })
```

### CSS

#### When to use REM vs PX
- width & height: `rem` (use `px` ONLY when more vertical space than horizontal)
  - `max-width: 100%`
  - `min-height: x_rem`
- padding: `px` and then `rem`
- vertical margins (top-bottom) on text should be proportional: `rem` or `em`
- media queries: `rem`
- container queries: `rem`

#### Grids: 1fr vs auto
- no difference when referencing a single row or column, both will stretch according to their content
- for multiple rows/columns
  - `(1fr, 1fr, 1fr)` will create 3 equal rows/columns
  - `(auto, auto, auto)` will create 3 adaptive rows/columns
- for consistency, use `auto` when dealing with single row/column scenarios
- when use together `(auto, 1fr)`: `1fr` is greedy compared to `auto`

### React
- the `Components` folder is for reusable components
-

### Naming
> [Describe instead of Prescribe](https://blog.fontawesome.com/icon-naming-conventions)

### Accessibility

1. [hidden-content](https://guides.18f.gov/accessibility/hidden-content)
2. [accessbile hiding](https://a11y-guidelines.orange.com/en/articles/accessible-hiding)
3. [hiding elements](https://www.nomensa.com/blog/how-improve-web-accessibility-hiding-elements)

### Icons

To add an icon requires to manipulate four files:
1. create a folder with the name of the icon under the `Components/Icons` folder
2. create a file named `index.tsx` inside the the icon folder (see other folder icons for examples)
3. copy/paste the SVG from figma into the file
4. import/export the new icon in the `Icons/index.tsx` file
5. add the icon component in the `Sprites/index.tsx` file
6. test out icon by importing it in the `Title` component

## TODO:
- [ ] implement [conventional commits](https://www.conventionalcommits.org/en/v1.0.0)
- [ ] set up github actions
- [ ] set up branch protections
- [ ] contribution guide


# Resources

## Favicon
1. [Set up](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs)
2. [Generator](https://realfavicongenerator.net)

## CSS
1. [REM vs PX](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility)
2. [media-minmax](https://github.com/postcss/postcss-media-minmax)
3. [css nesting](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting)
4. [postcss-import](https://github.com/postcss/postcss-import)
5. [auto-fr interpreted](https://stackoverflow.com/questions/49145552/how-is-grid-template-rows-auto-auto-1fr-auto-interpreted)
6. [fr & auto together](https://dev.to/nhuynh1/css-grid-auto-is-greedy-until-it-s-with-fr-45ko)
7. [toggle border](https://stackoverflow.com/questions/9612758/add-a-css-border-on-hover-without-moving-the-element/9612782#9612782)

## SVGs
1. [svg-icons](https://www.jacobparis.com/content/svg-icons)
2. [svg-in-js](https://kurtextrem.de/posts/svg-in-js)
3. [svg-store](https://github.com/FWeinb/grunt-svgstore/issues/16)

To style SVGs you must target the `<use>` element
1. [stackoverflow](https://stackoverflow.com/questions/46353027/changing-css-with-svg-symbols-on-hover)
2. [target svg <use> to style](https://tympanus.net/codrops/2015/07/16/styling-svg-use-content-css)
3. [example](https://codepen.io/Sphinxxxx/pen/GMjgxJ?editors=1100)

## React
1. [when to use: useCallback](https://www.joshwcomeau.com/react/usememo-and-usecallback/#inside-generic-custom-hooks-7)
2. [avoid: useFormStatus](https://allanlasser.com/posts/2024-01-26-avoid-using-reacts-useformstatus)
3. [useActionState](https://github.com/facebook/react/pull/28491)

## Self-Hosting
https://nextjs.org/docs/app/building-your-application/deploying#self-hosting

### Examples with Docker
* https://github.com/vercel/next.js/tree/canary/examples/with-docker
* https://github.com/vercel/next.js/tree/canary/examples/with-docker-multi-env

### Examples with OTel
* https://github.com/vercel/next.js/tree/canary/examples/with-opentelemetry
* https://github.com/vercel/opentelemetry-collector-dev-setup

## Accessibility
* [dropdown list](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only)

## Email Validation
* [minimum length](https://stackoverflow.com/questions/1423195/what-is-the-actual-minimum-length-of-an-email-address-as-defined-by-the-ietf)
