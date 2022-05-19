import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CountryListModal} from 'react-native-country-code-select';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textView}>
        {JSON.stringify(selectedValue, null, 2)}
      </Text>
      <Text onPress={() => setIsVisible(true)}>Open picker</Text>
      <CountryListModal
        isVisible={isVisible}
        header="Header"
        isFlagVisible={true}
        isAlphabetsVisible
        onClose={() => setIsVisible(false)}
        {...{onSelect: setSelectedValue}}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  textView: {width: '60%', backgroundColor: 'lightgrey', padding: 10},
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
  },
});
