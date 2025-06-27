# Search Dialog Component

A reusable, animated search dialog for React/Next.js projects. Includes recent search history, keyboard navigation, and customizable search logic.

## Installation

```bash
npm install  search-dialog-component
```

## Usage

```tsx
import { SearchDialog } from 'search-dialog-component';

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
