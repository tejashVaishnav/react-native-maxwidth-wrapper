# React Native Max Width Wrapper

[![npm version](https://img.shields.io/npm/v/react-native-max-width-wrapper.svg)](https://www.npmjs.com/package/react-native-max-width-wrapper)
[![npm downloads](https://img.shields.io/npm/dm/react-native-max-width-wrapper.svg)](https://www.npmjs.com/package/react-native-max-width-wrapper)
[![License](https://img.shields.io/npm/l/react-native-max-width-wrapper.svg)](https://github.com/yourusername/react-native-max-width-wrapper/blob/main/LICENSE)

A lightweight, responsive container component for React Native that wraps content with a maximum width constraint, ensuring consistent layouts across different screen sizes.

## Features

- 🌐 **Responsive Design** - Adapts content to any screen size while respecting maximum width
- 🎨 **Customizable** - Easily style the wrapper to match your design system
- 🧩 **TypeScript Support** - Full TypeScript definitions for improved developer experience
- 📱 **Cross Platform** - Works on iOS, Android, and React Native Web

## Installation

```bash
# Using npm
npm install react-native-max-width-wrapper

# Using yarn
yarn add react-native-max-width-wrapper

# Using pnpm
pnpm add react-native-max-width-wrapper
```

## Usage

```jsx
import React from 'react';
import { Text, Button, ScrollView } from 'react-native';
import MaxWidthWrapper from 'react-native-max-width-wrapper';

function MyScreen() {
  return (
    <ScrollView>
      <MaxWidthWrapper>
        <Text>This content will have a maximum width!</Text>
        <Button title="Press me" onPress={() => alert('Button pressed')} />
      </MaxWidthWrapper>
    </ScrollView>
  );
}
```

### Custom width and styling

```jsx
<MaxWidthWrapper 
  maxWidth={800} 
  style={{ 
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
    borderRadius: 8
  }}
>
  <Text>Content with custom max width and styling</Text>
</MaxWidthWrapper>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | Required | The content to be wrapped by the component |
| `maxWidth` | number | 600 | The maximum width in pixels that the wrapper will expand to |
| `style` | StyleProp<ViewStyle> | undefined | Additional styles to apply to the wrapper component |

## Examples

### Basic Example

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaxWidthWrapper from 'react-native-max-width-wrapper';

export default function App() {
  return (
    <View style={styles.container}>
      <MaxWidthWrapper>
        <Text style={styles.title}>Welcome to My App!</Text>
        <Text style={styles.paragraph}>
          This content is constrained by the MaxWidthWrapper.
          It will never exceed the maximum width (600px by default),
          ensuring a consistent layout across different device sizes.
        </Text>
      </MaxWidthWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
});
```

### Different widths for different components

```jsx
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import MaxWidthWrapper from 'react-native-max-width-wrapper';

export default function BlogScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header with full width background but content constrained */}
      <View style={styles.header}>
        <MaxWidthWrapper maxWidth={800}>
          <Text style={styles.headerTitle}>My Blog</Text>
        </MaxWidthWrapper>
      </View>
      
      {/* Blog content with narrower max width for better readability */}
      <MaxWidthWrapper maxWidth={650}>
        <Text style={styles.articleTitle}>How to Use MaxWidthWrapper</Text>
        <Text style={styles.articleBody}>
          Content is more readable when it's not too wide. Research shows
          that optimal line length for readability is around 50-75 characters.
          Using MaxWidthWrapper helps maintain this optimal width.
        </Text>
      </MaxWidthWrapper>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#007bff',
    paddingVertical: 24,
    width: '100%',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  articleTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 16,
  },
  articleBody: {
    fontSize: 16,
    lineHeight: 26,
  },
});
```

## Common Use Cases

- Content pages where you want to limit the maximum width for readability
- Forms that shouldn't stretch too wide on large screens
- Creating consistent layouts that work on both mobile and tablet/web
- Implementing responsive designs with controlled maximum dimensions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
