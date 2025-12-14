# Responsive Design System Guide

This guide explains how to use the responsive design system implemented in this React Native app.

## Overview

The responsive system automatically scales UI elements based on device screen size, ensuring the app looks great on all devices from small phones to tablets.

## Core Utilities (`src/utils/responsive.ts`)

### Scaling Functions

#### `scaleWidth(size: number): number`
- Scales based on device width
- Use for: horizontal spacing, widths, horizontal margins/padding
- Example: `scaleWidth(20)` scales 20px proportionally to screen width

#### `scaleHeight(size: number): number`
- Scales based on device height
- Use for: vertical spacing, heights, vertical margins/padding
- Example: `scaleHeight(100)` scales 100px proportionally to screen height

#### `scaleFont(size: number, factor?: number): number`
- Scales font sizes with moderate factor (default 0.3)
- Prevents fonts from becoming too large on tablets
- Use for: all font sizes
- Example: `scaleFont(16)` scales 16px font appropriately

#### `moderateScale(size: number, factor?: number): number`
- General-purpose moderate scaling (default factor 0.5)
- Scales less aggressively than linear scaling
- Use for: icons, avatars, buttons, general UI elements
- Example: `moderateScale(48)` scales 48px with balanced approach

### Helper Functions

#### `isTablet(): boolean`
- Returns true if device is a tablet (width >= 600px)

#### `isSmallDevice(): boolean`
- Returns true if device is small (width < 375px)

#### `platformValue<T>(ios: T, android: T): T`
- Returns platform-specific values
- Example: `platformValue(12, 8)` returns 12 on iOS, 8 on Android

#### `responsiveSize(small: number, normal: number, large: number): number`
- Returns different values for different device categories
- Example: `responsiveSize(8, 12, 16)` returns 8 for small, 12 for normal, 16 for tablets

## Theme System (`src/styles/theme.ts`)

All theme values are automatically responsive:

### Typography
```typescript
import { typography } from '../styles/theme';

// All font sizes are pre-scaled
fontSize: typography.fontSize.md  // Already responsive!
```

### Spacing
```typescript
import { spacing } from '../styles/theme';

// All spacing values are pre-scaled
marginTop: spacing.md  // Already responsive!
paddingHorizontal: spacing.lg  // Already responsive!
```

### Sizes
```typescript
import { sizes } from '../styles/theme';

// Icon sizes
size={sizes.icon.md}  // Already responsive!

// Avatar sizes
width: sizes.avatar.sm  // Already responsive!

// Story circles
width: sizes.story.outer  // Already responsive!
```

## Best Practices

### 1. Use Theme Values First
Always prefer theme values over manual scaling:

```typescript
// GOOD - Uses theme
fontSize: typography.fontSize.md
padding: spacing.lg

// AVOID - Manual values
fontSize: 16
padding: 24
```

### 2. Use Percentage Widths for Images/Containers
For images and flexible containers, use percentage widths with aspectRatio:

```typescript
// GOOD - Responsive container
const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
});

// AVOID - Fixed width
const styles = StyleSheet.create({
  image: {
    width: 327,
    height: 220,
  },
});
```

### 3. Use Flex Layouts
Leverage flexbox for responsive layouts:

```typescript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    flex: 1,
  },
});
```

### 4. Add hitSlop for Touch Targets
Ensure touch targets are accessible on all devices:

```typescript
<TouchableOpacity
  hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
  onPress={handlePress}
>
  {/* ... */}
</TouchableOpacity>
```

### 5. Use Platform-Specific Values When Needed
```typescript
import { platformValue } from '../utils/responsive';

const styles = StyleSheet.create({
  text: {
    lineHeight: platformValue(20, 22), // iOS: 20, Android: 22
  },
});
```

## Migration Examples

### Before (Fixed Sizes)
```typescript
const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 220,
    borderRadius: 15,
    padding: 16,
  },
  text: {
    fontSize: 16,
    marginTop: 8,
  },
});
```

### After (Responsive)
```typescript
import { spacing, borderRadius, sizes, typography } from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',  // Use percentage
    aspectRatio: sizes.postImage.aspectRatio,  // Maintain ratio
    borderRadius: borderRadius.md,  // Use theme
    padding: spacing.md,  // Use theme
  },
  text: {
    fontSize: typography.fontSize.md,  // Use theme
    marginTop: spacing.sm,  // Use theme
  },
});
```

## Testing Responsive Design

### 1. Test on Multiple Simulators/Emulators
- iPhone SE (small device)
- iPhone 14/15 (standard device)
- iPhone 15 Pro Max (large device)
- iPad (tablet)

### 2. Check Different Orientations
- Portrait mode
- Landscape mode

### 3. Verify Text Scaling
- Enable larger text sizes in accessibility settings
- Ensure text doesn't overflow containers

### 4. Check Touch Targets
- All touchable elements should be at least 44x44 points
- Use hitSlop for smaller visual elements

## Common Patterns

### Responsive Container
```typescript
const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: moderateScale(600),  // Cap width on tablets
    alignSelf: 'center',
    paddingHorizontal: spacing.lg,
  },
});
```

### Responsive Grid
```typescript
const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  gridItem: {
    width: `${(100 / numColumns) - (spacing.md / numColumns)}%`,
    aspectRatio: 1,
  },
});
```

### Responsive Typography
```typescript
const styles = StyleSheet.create({
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semiBold,
    lineHeight: typography.fontSize.xl * 1.3,  // Relative line height
  },
});
```

## Device-Specific Adjustments

```typescript
import { isTablet, isSmallDevice, responsiveSize } from '../utils/responsive';

const styles = StyleSheet.create({
  container: {
    padding: responsiveSize(
      spacing.sm,   // Small devices
      spacing.md,   // Normal devices
      spacing.xl,   // Tablets
    ),
  },
});

// Or conditional styles
const getContainerStyle = () => ({
  padding: isTablet() ? spacing.xl : spacing.md,
  flexDirection: isTablet() ? 'row' : 'column',
});
```

## Troubleshooting

### Text Cut Off
- Use `numberOfLines` prop or adjust container width
- Check if using fixed widths instead of flex/percentage

### Images Stretched
- Always use aspectRatio with percentage width
- Use `resizeMode` prop appropriately

### Layout Broken on Tablets
- Test with tablet simulators
- Use `responsiveSize()` for device-specific values
- Consider using `isTablet()` for completely different layouts

### Touch Targets Too Small
- Add `hitSlop` prop to TouchableOpacity
- Ensure minimum 44x44 point touch target

## Performance Considerations

1. All scaling functions are pure calculations (no re-renders)
2. Theme values are calculated once on app load
3. Use `StyleSheet.create()` to optimize style objects
4. Avoid inline style objects in render
5. Use `memo()` for expensive components

## Reference Devices

- **Small**: iPhone SE (375 x 667)
- **Base**: iPhone 8/X (375 x 812)
- **Large**: iPhone 15 Pro Max (430 x 932)
- **Tablet**: iPad (768 x 1024)

All scaling is relative to base device (375 x 667).
