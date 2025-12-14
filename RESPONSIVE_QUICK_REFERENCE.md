# Responsive UI - Quick Reference Card

## TL;DR - Just Use Theme Values!

```typescript
import { typography, spacing, sizes, colors } from '../styles/theme';

// ✅ DO THIS - Theme values are already responsive
const styles = StyleSheet.create({
  text: { fontSize: typography.fontSize.md },
  container: { padding: spacing.lg },
  icon: { width: sizes.icon.md },
});

// ❌ DON'T DO THIS - Hardcoded values
const styles = StyleSheet.create({
  text: { fontSize: 16 },
  container: { padding: 24 },
  icon: { width: 24 },
});
```

## Quick Patterns

### 1. Text Styling
```typescript
import { typography, colors } from '../styles/theme';

fontSize: typography.fontSize.md      // Use theme sizes (xs, xxs, sm, md, lg, xl)
fontWeight: typography.fontWeight.semiBold  // Use theme weights
color: colors.textPrimary             // Use theme colors
```

### 2. Spacing
```typescript
import { spacing } from '../styles/theme';

padding: spacing.md                   // Use theme spacing (xs, sm, md, lg, xl)
margin: spacing.lg
gap: spacing.sm
```

### 3. Icons
```typescript
import { sizes } from '../styles/theme';

size={sizes.icon.md}                  // Use theme icon sizes (sm, md, lg)
```

### 4. Images (Responsive Width)
```typescript
import { sizes } from '../styles/theme';

const styles = StyleSheet.create({
  image: {
    width: '100%',                     // Percentage width
    aspectRatio: 16 / 9,               // Or sizes.postImage.aspectRatio
  },
});
```

### 5. Touch Targets
```typescript
<TouchableOpacity
  hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}  // Expand touch area
>
  {/* Small icon */}
</TouchableOpacity>
```

## When to Use Responsive Utils Directly

Only use these when theme values don't exist:

```typescript
import { moderateScale, scaleFont } from '../utils/responsive';

// For custom one-off sizes
gap: moderateScale(4)                 // Custom gap not in theme
fontSize: scaleFont(22)               // Custom font size not in theme
```

## Common Layouts

### Flex Row
```typescript
import { layouts } from '../styles/common';

const styles = StyleSheet.create({
  container: {
    ...layouts.rowBetween,            // flex row with space-between
  },
});
```

### Responsive Container
```typescript
const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: moderateScale(600),     // Max width for tablets
    alignSelf: 'center',
  },
});
```

## Import Cheatsheet

```typescript
// Theme (use 90% of the time)
import { typography, spacing, sizes, colors, borderRadius } from '../styles/theme';

// Common patterns (use for reusable layouts)
import { layouts, containers, badges, text } from '../styles/common';

// Responsive utils (use rarely, only for custom values)
import { moderateScale, scaleFont, isTablet } from '../utils/responsive';
```

## Migration Cheatsheet

| Old (Hardcoded) | New (Responsive) | Import |
|-----------------|------------------|--------|
| `fontSize: 16` | `fontSize: typography.fontSize.md` | theme |
| `padding: 24` | `padding: spacing.lg` | theme |
| `size={24}` | `size={sizes.icon.md}` | theme |
| `borderRadius: 15` | `borderRadius: borderRadius.md` | theme |
| `width: 327` | `width: '100%'` + `aspectRatio: 1.486` | - |
| `gap: 4` | `gap: moderateScale(4)` | utils |
| `#E91E63` | `colors.storyBorderPink` | theme |

## Device Testing

Test on these simulators:
- iPhone SE (375px) - Small
- iPhone 14 (390px) - Normal
- iPad (768px) - Tablet

## Common Mistakes

### ❌ Mistake 1: Using hardcoded numbers
```typescript
fontSize: 16  // Bad
```
```typescript
fontSize: typography.fontSize.md  // Good
```

### ❌ Mistake 2: Fixed image sizes
```typescript
width: 327, height: 220  // Bad - breaks on different screens
```
```typescript
width: '100%', aspectRatio: 327/220  // Good - scales perfectly
```

### ❌ Mistake 3: Hardcoded colors
```typescript
color: '#E91E63'  // Bad - hard to maintain
```
```typescript
color: colors.storyBorderPink  // Good - centralized
```

### ❌ Mistake 4: Tiny touch targets
```typescript
<TouchableOpacity>  // Bad - hard to tap
  <Icon size={16} />
</TouchableOpacity>
```
```typescript
<TouchableOpacity hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>  // Good
  <Icon size={sizes.icon.sm} />
</TouchableOpacity>
```

## Quick Decision Tree

```
Need a size value?
├─ Is it in theme? → Use theme value ✅
├─ Is it a custom value? → Use moderateScale() ✅
└─ Is it an image? → Use width: '100%' + aspectRatio ✅

Need a layout?
├─ Is it in common.ts? → Use common layout ✅
└─ Custom layout? → Use flexbox + theme values ✅

Need a color?
└─ Always use theme colors ✅
```

## Pro Tips

1. **Use theme first, utilities second** - 90% of cases covered by theme
2. **Images = percentage + aspectRatio** - Never use fixed widths
3. **Touch targets = 44x44 minimum** - Use hitSlop for small icons
4. **Test on 3+ devices** - SE (small), 14 (normal), iPad (tablet)
5. **Flex layouts > Fixed sizes** - More responsive and maintainable

## Help & Documentation

- Full Guide: `/src/utils/RESPONSIVE_GUIDE.md`
- Implementation Summary: `/RESPONSIVE_IMPLEMENTATION_SUMMARY.md`
- Before/After Examples: `/BEFORE_AFTER_COMPARISON.md`
- This Quick Reference: `/RESPONSIVE_QUICK_REFERENCE.md`

---

**Remember**: When in doubt, use theme values! They're already responsive. 🎯
