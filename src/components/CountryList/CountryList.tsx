import React, { useCallback, useRef, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Metrics, verticalScale } from '../../theme';
import { getLetters } from '../../utils/commonHelpers';
import type { Country } from '../CountryPickerModal';
import { CountryRow } from '../CountryRow';
import styles from './styles';
import type {
  CountryListProps,
  LetterProps,
  EmptyComponentProps,
} from './types';

const Letter = ({
  letter,
  scrollTo,
  customAlphabetsStyles,
  customAlphabetContainerStyles,
}: LetterProps) => {
  return (
    <TouchableOpacity key={letter} onPress={() => scrollTo(letter)}>
      <View style={[styles.letter, customAlphabetContainerStyles]}>
        <Text style={[styles.letterText, customAlphabetsStyles]}>{letter}</Text>
      </View>
    </TouchableOpacity>
  );
};

const renderEmptyComponent = ({
  emptyText,
  emptyTextStyle,
  emptyContainerStyles,
  renderCustomEmptyComponent,
}: EmptyComponentProps) => {
  if (renderCustomEmptyComponent) return renderCustomEmptyComponent;
  return (
    <View style={[styles.emptyContainer, emptyContainerStyles]}>
      <Text style={[styles.emptyText, emptyTextStyle]}>{emptyText}</Text>
    </View>
  );
};

const getHeightFromTheCustomStyle = (customRowStyle: any) => {
  const { height = 0 }: any = StyleSheet.flatten(customRowStyle);
  return height;
};

const CountryList = ({
  data,
  onSelect,
  isFlagVisible,
  isAlphabetsVisible = false,
  countryListTitleStyle = {},
  customRowStyle,
  customAlphabetsStyles,
  customAlphabetContainerStyles,
  emptyText,
  emptyTextStyle,
  emptyContainerStyles,
  renderCustomEmptyComponent,
}: CountryListProps) => {
  const itemHeight = Math.max(
    verticalScale(55),
    getHeightFromTheCustomStyle(customRowStyle)
  );
  const initialNumToRender = Math.round(
    Metrics.screenHeight / (itemHeight || 1)
  );
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

  const screenWidth =
    Metrics.screenWidth * (isAlphabetsVisible && data.length !== 0 ? 0.9 : 1);
  return (
    <View style={styles.mainContainer}>
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
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
        ListEmptyComponent={() =>
          renderEmptyComponent({
            emptyText,
            emptyTextStyle,
            emptyContainerStyles,
            renderCustomEmptyComponent,
          })
        }
        renderItem={({ item }) => (
          <CountryRow
            {...item}
            {...{
              onSelect,
              isFlagVisible,
              countryListTitleStyle,
              customRowStyle,
            }}
          />
        )}
      />
      {isAlphabetsVisible && (
        <ScrollView contentContainerStyle={styles.letters}>
          {letters.map((Item) => (
            <Letter
              key={Item}
              {...{
                letter: Item,
                scrollTo,
                customAlphabetsStyles,
                customAlphabetContainerStyles,
              }}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default CountryList;
