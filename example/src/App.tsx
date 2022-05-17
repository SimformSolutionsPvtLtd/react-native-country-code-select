import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CountryListModal } from 'react-native-country-code-select';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.viewStyle}>
        <Text style={styles.textView}>
          {JSON.stringify(selectedValue, null, 2)}
        </Text>
        <Text onPress={() => setIsVisible(oldStatus => !oldStatus)}>
          Open picker
        </Text>
        <CountryListModal
          isVisible={isVisible}
          header="Header"
          isFlagVisible={true}
          isAlphabetsVisible
          headerSearchPlaceholder='Search here...'
          onClose={() => setIsVisible(false)}
          {...{onSelect: setSelectedValue}}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'grey'},
  textView: {width: '60%', backgroundColor: 'lightgrey', padding: 10},
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
  },
});
