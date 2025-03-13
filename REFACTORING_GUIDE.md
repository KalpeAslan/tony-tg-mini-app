# Color Refactoring Guide

This guide provides instructions for refactoring hardcoded colors in the Tony Wallet application to use the Tailwind theme colors.

## Theme Colors

All colors are now defined in:

1. `tailwind.config.js` - For Tailwind classes
2. `styles/variables.css` - For CSS variables

## How to Refactor Components

### Step 1: Identify Hardcoded Colors

Look for patterns like:

- `text-[#hexcode]`
- `bg-[#hexcode]`
- `border-[#hexcode]`

### Step 2: Replace with Theme Colors

Replace hardcoded colors with the appropriate theme color:

| Hardcoded Color | Theme Color Replacement           |
| --------------- | --------------------------------- |
| `#501d7c`       | `tony-primary`                    |
| `#6d3e95`       | `tony-secondary`                  |
| `#33b1fc`       | `tony-accent`                     |
| `#2aa0e5`       | `tony-accentHover`                |
| `#e07a19`       | `tony-orange` or `tony-highlight` |
| `#f5a623`       | `tony-orangeLight`                |
| `#f8c52c`       | `tony-yellow`                     |
| `#a67fc2`       | `tony-muted`                      |
| `#9e9e9e`       | `tony-gray`                       |
| `#55fc33`       | `tony-green`                      |
| `#002a3a`       | `tony-dark`                       |

### Step 3: Use Utility Classes for Text

For text colors, use the utility classes defined in `globals.css`:

- `text-tony-heading` - For headings (white, bold)
- `text-tony-body` - For body text (white)
- `text-tony-status` - For status text (muted purple)

### Step 4: Use Border Utilities

For borders, use the following utilities:

| Border Style                                   | Utility Class              |
| ---------------------------------------------- | -------------------------- |
| `border: 2.5px solid rgba(255, 255, 255, 0.4)` | `border-white-translucent` |

Or use the individual Tailwind classes:

- Border width: `border-2.5`
- Border colors:
  - Light white (25% opacity): `border-tony-whiteBorder`
  - Medium white (40% opacity): `border-tony-whiteBorderMedium`
  - Strong white (60% opacity): `border-tony-whiteBorderStrong`

### Step 5: Use Reusable Components

For common UI patterns, use the following components:

- `BorderedContainer` - A container with configurable border styles
- `CardWithBorder` - A card component with configurable border and background

### Example Refactoring

Before:

```jsx
<div className="bg-[#6d3e95] rounded-2xl p-4">
  <h2 className="text-[#f8c52c] font-bold">Title</h2>
  <p className="text-white">Content</p>
  <span className="text-[#a67fc2]">Status</span>
  <div className="border-[2.5px] border-[#FFFFFF40]">Bordered element</div>
</div>
```

After:

```jsx
<CardWithBorder borderStyle="medium" rounded="xl" bgColor="bg-tony-secondary">
  <h2 className="text-tony-yellow font-bold">Title</h2>
  <p className="text-tony-body">Content</p>
  <span className="text-tony-status">Status</span>
  <BorderedContainer>Bordered element</BorderedContainer>
</CardWithBorder>
```

## Components to Update

The following components still have hardcoded colors:

1. `components/parachute-icon.tsx`
2. `components/containers/invited-users-section.tsx`
3. `components/tony-device.tsx`
4. `components/containers/invite-card.tsx`
5. `components/containers/currency-container.tsx`
6. `components/containers/balance-container.tsx`
7. `components/character.tsx`
8. `components/character-icon.tsx`
9. `app/packs/page.tsx`
10. `app/invites/page.tsx`

## Benefits of Using Theme Colors

1. **Consistency**: All colors are defined in one place
2. **Maintainability**: Easier to update colors across the application
3. **Theme Support**: Facilitates adding dark mode or other themes
4. **Readability**: More semantic color names improve code readability
