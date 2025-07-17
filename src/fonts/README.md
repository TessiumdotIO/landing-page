# Custom Fonts for Tessium

This directory contains the custom fonts used in the Tessium application:

## Aeonik Font Family
- **Aeonik-Regular.woff2** - Primary UI font (regular weight)
- **Aeonik-Medium.woff2** - Primary UI font (medium weight)
- **Aeonik-Bold.woff2** - Primary UI font (bold weight)

## Neue Machina Font Family
- **NeueMachina-Regular.woff2** - Display font for headings (regular weight)
- **NeueMachina-Bold.woff2** - Display font for headings (bold weight)

## Usage
The fonts are loaded via @font-face declarations in `app/globals.css` and configured in the Tailwind config:

```css
font-family: {
  'aeonik': ['Aeonik', 'system-ui', 'sans-serif'],
  'neue-machina': ['Neue Machina', 'system-ui', 'sans-serif'],
}
```

## Font Sources
To obtain these fonts, you can:
1. Purchase from the original foundries
2. Use free alternatives like Inter for Aeonik and Poppins for Neue Machina
3. Find similar fonts from Google Fonts or other open-source providers

## Implementation
The fonts are automatically loaded when the application starts and fallback to system fonts if unavailable.