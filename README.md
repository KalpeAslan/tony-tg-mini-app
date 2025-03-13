# Tony Wallet

A Next.js application for the Tony ecosystem, allowing users to connect their wallets and access various features.

## Features

- Wallet connection
- Airdrop checking
- Invite system
- Pack management
- Theme switching (Purple/Yellow)
- Error handling and loading states

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- React Context API for state management

## Project Structure

The project follows a modular architecture:

- `/app`: Next.js app router pages
- `/components`: UI components organized by function
  - `/components/layouts`: Layout components
  - `/components/ui`: Reusable UI components
  - `/components/wallet`: Wallet-related components
  - `/components/containers`: Higher-level container components
  - `/components/theme`: Theme-related components
  - `/components/error`: Error handling components
- `/lib`: Utility functions, types, and context providers
  - `/lib/context`: React context providers
  - `/lib/types.ts`: Shared TypeScript types

## Recent Refactoring

The codebase has been refactored to improve:

1. **Code Reusability**: Created shared components like `AppLayout` and `WalletButton`
2. **State Management**: Implemented context providers for wallet connection and theme
3. **Type Safety**: Added shared types in `lib/types.ts`
4. **Component Organization**: Reorganized components into logical directories
5. **Accessibility**: Improved button states with disabled styling
6. **Error Handling**: Added error boundaries and error states in context
7. **Loading States**: Added loading indicators and spinner component
8. **Theme Management**: Implemented theme switching with localStorage persistence
9. **Color System**: Replaced hardcoded colors with Tailwind theme colors for better maintainability

## Color System

The application now uses a consistent color system:

- All colors are defined in `tailwind.config.js` under the `tony` namespace
- CSS variables are defined in `styles/variables.css` for use with CSS properties
- Utility classes are provided in `globals.css` for common text styles

### Border Styles

The application includes several border styles for consistent UI elements:

- `border-white-translucent`: A 2.5px semi-transparent white border (40% opacity)
- Individual border classes:
  - `border-tony-whiteBorder`: Light white border (25% opacity)
  - `border-tony-whiteBorderMedium`: Medium white border (40% opacity)
  - `border-tony-whiteBorderStrong`: Strong white border (60% opacity)

### Reusable Components

For common UI patterns, use these components:

- `BorderedContainer`: A flexible container with configurable border styles
- `CardWithBorder`: A card component with configurable border, background, and rounded corners

See `REFACTORING_GUIDE.md` for details on how to use the color system.

## Getting Started

```bash
# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Future Improvements

- Add unit and integration tests
- Implement real wallet connection logic
- Add form validation
- Enhance mobile responsiveness
- Add internationalization support
- Implement analytics tracking

## TODO:

- example of TON - https://github.com/Telegram-Mini-Apps/nextjs-template/
