import React from 'react';
import { SearchDialog } from './index';

// Mock search function
const mockSearch = async (query: string) => {
  // Simulate async search
  await new Promise((res) => setTimeout(res, 500));
  if (!query) return [];
  return [
    `Result for "${query}" 1`,
    `Result for "${query}" 2`,
    `Result for "${query}" 3`,
  ];
};

export default function TestApp() {
  return (
    <div style={{ padding: 40 }}>
      <h2>Test Search Dialog</h2>
      <SearchDialog searchFn={mockSearch} />
    </div>
  );
} 