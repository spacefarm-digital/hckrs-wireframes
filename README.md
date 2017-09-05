# hckrs-wireframes (WIP)
React-based wireframes for v1 of Hckrs.eu

## Dependencies
- Gatsby
- Rebass
- grid-styled
- styled-components
- React router 4
- Yarn
- React X-ray

## Rebass tips

### Width
~~~~
  // Numbers from 0–1 are converted to percentage widths
  e.g. width 50%
  <Text width={1/2} />
  
  // Numbers greater than 1 are converted to pixels
  <Text width={256} />
  
  // Strings can be used for other values
  <Text width='32em' />
  
  // Arrays can be used for mobile-first responsive styles
  <Text
    width={[
      1,    100% width at the smallest breakpoint
      1/2,  50% width at the next breakpoint
      1/4   25% width at the next
    ]}
  />
~~~~

// The shorthand `w` prop can be used instead of `width`
<Text w={1/2} />

### Font size

~~~~
// Numbers are used to reference steps on the typographic scale
// i.e. the `theme.fontSizes` array
<Text fontSize={3} />

// Numbers greater than the length of the typographic scale
// are converted to pixels
<Text fontSize={18} />

// Strings can be used for other values
<Text fontSize='3em' />

// Arrays can be used for mobile-first responsive styles
<Text fontSize={[ 3, 4, 5 ]} />

// The shorthand `f` prop can be used instead of `fontSize`
<Text f={3} />
~~~~

### Margin and padding

~~~~
// Numbers reference steps on the spacing scale
// e.g. 8px
<Text m={2} />

// Numbers greater than the length of `theme.space.length` are converted to pixels
<Text my={256} />

// Negative values can be used to add negative margins
<Text mx={-2} />

// Strings can be used for other values
<Text mx='auto' />

// Arrays can be used for mobile-first responsive styles
<Text m={[ 0, 1, 2 ]} />
~~~~

### Colors

~~~~
// Keys reference values in the color palette object
<Text color='blue' />

// Background color can be set with the `bg` prop
<Button bg='red' />

// Values that do not map to a key in `theme.colors` can be used
<Button bg='tomato' />

// Arrays can be used to change colors responsively
<Text color={[ 'blue', 'green' ]} />

### Responsive styles

<Text
  width={[
    1,    // 100% width at the smallest breakpoint
    1/2,  // 50% width at the next breakpoint
    null, // null skips a breakpoint
    1/4   // 25% width at the next
  ]}
/>
~~~~

### HTML element prop

Each component accepts an is prop to change the underlying HTML element on a per-instance basis. This is useful for ensuring semantic markup, while keeping styles decoupled.

~~~~
<Heading
	is='h1'
	children='Top-level heading'
/>

<Button
	is='a'
	href='#!'
	children='Link Button'
/>
~~~~

Deploys to Netlify. Link coming soon.

