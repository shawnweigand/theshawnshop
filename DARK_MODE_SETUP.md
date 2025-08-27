# Dark Mode Setup

## Current Status: DISABLED

Dark mode is currently disabled in the application. The site will only use the light theme with your custom colors.

## How to Re-enable Dark Mode

### 1. Uncomment CSS Variables

In `resources/css/app.css`, uncomment the dark mode section:

```css
/* Remove these comment markers to re-enable dark mode */
/* Dark mode variant disabled - uncomment to re-enable
@custom-variant dark (&:is(.dark *));
*/

/* Dark mode disabled - uncomment to re-enable
.dark {
    --background: #2e250a;
    --foreground: #EFEFEF;
    --card: #2e250a;
    --card-foreground: #EFEFEF;
    --popover: #2e250a;
    --popover-foreground: #EFEFEF;
    --primary: #8fb573;
    --primary-foreground: #2e250a;
    --secondary: #B79065;
    --secondary-foreground: #2e250a;
    --muted: #3a3a3a;
    --muted-foreground: #a0a0a0;
    --accent: #B79065;
    --accent-foreground: #2e250a;
    --destructive: #ef4444;
    --destructive-foreground: #EFEFEF;
    --border: #4a4a4a;
    --input: #4a4a4a;
    --ring: #8fb573;
    --chart-1: #8fb573;
    --chart-2: #B79065;
    --chart-3: #EFEFEF;
    --chart-4: #d4a574;
    --chart-5: #8fb573;
    --primary-light: #a8c88a;
    --secondary-light: #d4a574;
    --sidebar: #2e250a;
    --sidebar-foreground: #EFEFEF;
    --sidebar-primary: #8fb573;
    --sidebar-primary-foreground: #2e250a;
    --sidebar-accent: #B79065;
    --sidebar-accent-foreground: #2e250a;
    --sidebar-border: #4a4a4a;
    --sidebar-ring: #8fb573;
}
*/
```

### 2. Add Dark Mode Toggle (Optional)

If you want to add a dark mode toggle, you can:

1. **Add a toggle button** to your layout
2. **Use JavaScript** to toggle the `.dark` class on the `<html>` element
3. **Store the preference** in localStorage

Example toggle implementation:

```tsx
import { useState, useEffect } from 'react'

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved preference
    const saved = localStorage.getItem('darkMode')
    if (saved) {
      setIsDark(saved === 'true')
      document.documentElement.classList.toggle('dark', saved === 'true')
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDark
    setIsDark(newMode)
    document.documentElement.classList.toggle('dark', newMode)
    localStorage.setItem('darkMode', newMode.toString())
  }

  return (
    <button onClick={toggleDarkMode}>
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}
```

### 3. System Preference Detection (Optional)

To automatically detect system dark mode preference:

```tsx
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleChange = (e: MediaQueryListEvent) => {
    document.documentElement.classList.toggle('dark', e.matches)
  }
  
  mediaQuery.addEventListener('change', handleChange)
  document.documentElement.classList.toggle('dark', mediaQuery.matches)
  
  return () => mediaQuery.removeEventListener('change', handleChange)
}, [])
```

## Dark Mode Colors

When re-enabled, dark mode will use:

- **Background**: `#2e250a` (Deep brown/black)
- **Foreground**: `#EFEFEF` (Light gray)
- **Primary**: `#8fb573` (Sage green)
- **Secondary**: `#B79065` (Warm brown/gold)
- **Muted**: `#3a3a3a` (Dark gray)

## Testing

After re-enabling:

1. **Build the project**: `npm run build`
2. **Test manually**: Add `class="dark"` to the `<html>` element
3. **Test toggle**: Implement the toggle functionality
4. **Test system preference**: Use browser dev tools to simulate dark mode

## Notes

- Dark mode colors are designed to maintain the same color psychology as light mode
- All components will automatically adapt when dark mode is enabled
- The landing page will work seamlessly in both modes
