![Country Code Select - Simform](./assets/banner.png)

# react-native-country-code-select

[![npm version](https://img.shields.io/badge/npm%20package-0.0.1-orange)](https://www.npmjs.org/package/react-native-country-code-select)  [![Android](https://img.shields.io/badge/Platform-Android-green?logo=android)](https://www.android.com)  [![iOS](https://img.shields.io/badge/Platform-iOS-green?logo=apple)](https://developer.apple.com/ios)  [![MIT](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)


---

This is a pure javascript library for selecting a country with search and filter functionality

This library is easy to use and provides you full customization, so you can customize component based on your need

## 🎬 Preview
---
  <table>
    <tr>
      <td><a href="https://github.com/SimformSolutionsPvtLtd/react-native-country-code-select"><img width="300" alt="SimformSolutions" src="./assets/sample1.gif"></a></td>
      <td><a href="https://github.com/SimformSolutionsPvtLtd/react-native-country-code-select"><img width="300" alt="SimformSolutions" src="./assets/sample3.gif"></a>
     </td>
      <td><a href="https://github.com/SimformSolutionsPvtLtd/react-native-country-code-select"><img width="300" alt="SimformSolutions" src="./assets/sample2.gif"></a>
     </td>
    </tr>
  </table>

---
## Quick Access
[Installation](#installation) | [CountryPicker](#countrypicker) | [Methods](#methods) | [Properties](#props) | [Example](#example) | [License](#license)

## Installation

##### 1. Install library, react-native-reanimated and react-native-gesture-handler

```bash
$ npm install react-native-country-code-select react-native-reanimated react-native-gesture-handler 
# --- or ---
$ yarn add react-native-country-code-select react-native-reanimated react-native-gesture-handler 
```
##### 2. Install cocoapods in the ios project
```bash
cd ios && pod install
```

> Note: Make sure to wrap your root component / entry point with [GestureHandleRootView](https://docs.swmansion.com/react-native-gesture-handler/docs/1.10.3/)

```bash
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default const App = () => {
  return <GestureHandlerRootView>{/* content */}</GestureHandlerRootView>;
}
```
##### Know more about [react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler), [react-native-reanimated](https://www.npmjs.com/package/react-native-reanimated) 
--- 
## CountryPicker
#### 🎬 Preview
---
![Default CountryPicker](./assets/sample1.gif)

#### Basic usage
---
```jsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CountryPickerModal } from 'react-native-country-code-select';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.viewStyle}>
        <Text style={styles.textView}>
          {JSON.stringify(selectedValue, null, 2)}
        </Text>
        <Text style={styles.separator}>{'-- --'}</Text>
        <TouchableOpacity 
          activeOpacity={0.8} 
          style={styles.selectCountryButton}
          onPress={() => setIsVisible(oldStatus => !oldStatus)}
        >
          <Text style={styles.selectCountry}>Select Country</Text>
        </TouchableOpacity>
        <CountryPickerModal
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
          {...{onSelect: setSelectedValue}}
        />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#e6d7b8'
  },
  textView: {
    width: '60%', 
    backgroundColor: '#261a08', 
    padding: 20, 
    borderWidth: 1, 
    borderRadius: 20, 
    overflow: 'hidden', 
    color: '#ffffff', 
    fontWeight: '500'
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  selectCountryButton: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: '#261a08',
    borderRadius: 20,
  },
  selectCountry: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16
  },
  separator: {
    marginVertical: 20,
    letterSpacing: 2,
    fontSize: 15,
    fontWeight: 'bold'
  }
});
```
---
## Selected Country Data
```javascript
{
  name: string;
  flag: string;
  countryInitials: string;
  region: string;
  subregion: string;
  callingCode: string[];
  currency: string[];
}
```
## Methods

> |Name|Description
>|:-|:-
>|**onClose***| Close modal callback function
>|**onSelect***| Select country callback function that returns the selected country

## Props

> |Name|Default Value|Description
>|:-|:-:|:-
>|***isVisible****|false| Hide / show country list modal
>|customBackImageSource|Image| Custom close modal image source
>|customBackImageStyle|{}| Close modal image style
>|isFlagVisible|true| If false, Country flag will be hidden
>|isAlphabetsVisible|true|If false, Quick country fliter will be hidden
>|headerSearchPlaceholder|"Enter Country"| Custom search placeholder text
>|isSearchInputVisible|true|If false, Search input will be hidden
>|renderCustomSearchInput|undefined| Render custom search input
>|searchHeaderInputStyle|{}| Search input style
>|isCloseButtonVisible|false|If true, Modal close button will be visible
>|searchHeaderProps|{}| Search input props
>|countryListTitleStyle|{}| Country name / title style
>|modalContentStyle|{}| Modal content style
>|modalContainerStyle| {} | Modal container style
>|customRowStyle|{}| Country list item / row style
>|customAlphabetsStyles|{}| Quick filter (A-Z) text style
>|customAlphabetContainerStyles|{} | Quick filter (A-Z) container style
>|emptyText| `Oops, there is no country available` | Custom message to show when there's no search result found
>|emptyTextStyle|{}| Custom empty message style
>|emptyContainerStyles| {}  | Custom empty message container style
>|renderCustomEmptyComponent|undefined| Render custom component when there's no search result found
>|customCloseButton|undefined| Render custom modal close button
>|renderSearchInputClear|undefined| Render custom cancel image in search input

---
## Example
A full working example project is here [Example](./example/src/App.tsx)
```sh
$ yarn
$ yarn example ios   // For ios
$ yarn example android   // For Android
```
## Find this library useful? ❤️
Support it by joining [stargazers](https://github.com/SimformSolutionsPvtLtd/react-native-country-code-select/stargazers) for this repository.⭐

## Bugs / Feature requests / Feedbacks 
For bugs, feature requests, and discussion please use [GitHub Issues](https://github.com/SimformSolutionsPvtLtd/react-native-country-code-select/issues/new?labels=bug&late=BUG_REPORT.md&title=%5BBUG%5D%3A), [GitHub New Feature](https://github.com/SimformSolutionsPvtLtd/react-native-country-code-select/issues/new?labels=enhancement&late=FEATURE_REQUEST.md&title=%5BFEATURE%5D%3A), [GitHub Feedback](https://github.com/SimformSolutionsPvtLtd/react-native-country-code-select/issues/new?labels=enhancement&late=FEATURE_REQUEST.md&title=%5BFEEDBACK%5D%3A)

## 🤝 How to Contribute
We'd love to have you improve this library or fix a problem 💪
Check out our [Contributing Guide](CONTRIBUTING.md) for ideas on contributing.
## License
- [MIT License](LICENSE)