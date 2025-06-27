# Search Dialog Component

A reusable, animated search dialog for React/Next.js projects. Includes recent search history, keyboard navigation, and customizable search logic.

## Installation

```bash
npm install  nameofthepackage
```

## Usage

```tsx
import { SearchDialog } from 'nameofthepackage';

const searchFn = async (query: string) => {
  // Your async search logic here
  return [
    `Result for ${query} 1`,
    `Result for ${query} 2`,
  ];
};

function App() {
  return <SearchDialog searchFn={searchFn} />;
}
```

## Features
- Animated dialog
- Recent search history
- Keyboard navigation
- Easy integration

## License
MIT 
