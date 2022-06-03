import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CountryPickerModal } from 'react-native-country-code-select';
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

export default App;

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
