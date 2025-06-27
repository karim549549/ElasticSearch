// Utility to merge class names (from shadcn/ui)
export function cn(...inputs: (string | undefined | false | null)[]): string {
  return inputs.filter(Boolean).join(' ');
} 