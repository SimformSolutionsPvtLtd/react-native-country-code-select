import React, { useCallback, useRef, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Metrics, verticalScale } from '../../theme';
import { getLetters } from '../../utils/commonHelpers';
import type { Country } from '../CountryListModal';
import { CountryRow } from '../CountryRow';
import styles from './styles';
import type { CountryListProps, LetterProps } from './types';

// row height
const itemHeight = verticalScale(55);
// initial Num To Render
const initialNumToRender = Math.round(Metrics.screenHeight / (itemHeight || 1));

const Letter = ({ letter, scrollTo }: LetterProps) => {
  return (
    <TouchableOpacity key={letter} onPress={() => scrollTo(letter)}>
      <View style={styles.letter}>
        <Text style={[styles.letterText]}>{letter}</Text>
      </View>
    </TouchableOpacity>
  );
};

const renderEmptyComponent = (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>Oops, there is no country available</Text>
  </View>
);

const CountryList = ({
  data,
  onSelect,
  isFlagVisible,
  isAlphabetsVisible = false,
  countryListTitleStyle = {},
}: CountryListProps) => {
  const letters = getLetters(data);
  const flatListRef = useRef<FlatList<Country>>(null);
  const [letter, setLetter] = useState<string>('');
  const indexLetter = data
    .map((country: Country) => (country.name as string)?.substr(0, 1))
    .join('');

  const scrollTo = useCallback(
    (letterToMove: string, animated: boolean = true) => {
      const index = indexLetter.indexOf(letterToMove);
      setLetter(letterToMove);
      if (flatListRef.current) {
        flatListRef.current?.scrollToIndex({ animated, index });
      }
    },
    [indexLetter]
  );

  const onScrollFailed = useCallback(() => {
    if (flatListRef.current) {
      flatListRef.current?.scrollToEnd();
      scrollTo(letter);
    }
  }, [letter, scrollTo]);

  const screenWidth = Metrics.screenWidth * (isAlphabetsVisible ? 0.9 : 1);
  return (
    <View style={styles.mainContainer}>
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(keyData) => keyData?.name}
        horizontal={false}
        initialNumToRender={initialNumToRender}
        contentContainerStyle={[styles.container, { width: screenWidth }]}
        onScrollToIndexFailed={onScrollFailed}
        getItemLayout={(_data: any, index) => ({
          length: itemHeight,
          offset: itemHeight * index,
          index,
        })}
        ListEmptyComponent={renderEmptyComponent}
        renderItem={({ item }) => (
          <CountryRow
            {...item}
            {...{ onSelect, isFlagVisible, countryListTitleStyle }}
          />
        )}
      />
      {isAlphabetsVisible && (
        <ScrollView
          contentContainerStyle={styles.letters}
          keyboardShouldPersistTaps="always"
        >
          {letters.map((Item) => (
            <Letter key={Item} {...{ letter: Item, scrollTo }} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default CountryList;
