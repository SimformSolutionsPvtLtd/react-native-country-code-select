import React, { useEffect } from 'react';
import { View } from 'react-native';
import { CloseButton } from '../CloseButton';
import { SearchTextInput } from '../SearchTextInput';
import styles from './styles';
import type { HeaderProps } from './types';

const Header = ({
  onClose = () => {},
  customBackImageSource,
  customBackImageStyle,
  filterString,
  setFilterString,
  headerSearchPlaceholder = undefined,
  isSearchInputVisible,
  renderCustomSearchInput,
  searchHeaderInputStyle,
  searchHeaderProps,
  isCloseButtonVisible,
  customCloseButton,
  renderSearchInputClear,
}: HeaderProps) => {
  useEffect(() => {
    return () => {
      setFilterString?.('');
    };
  }, [setFilterString]);

  return (
    <View style={styles.headerContainer}>
      {customCloseButton && customCloseButton()}
      {isCloseButtonVisible && !customCloseButton && (
        <CloseButton
          {...{ onClose, customBackImageSource, customBackImageStyle }}
        />
      )}
      <View
        style={[
          styles.headerTitleContainer,
          !isCloseButtonVisible ? styles.paddingLeftStyle : {},
        ]}
      >
        {renderCustomSearchInput &&
          renderCustomSearchInput({ setFilterString, filterString })}
        {!renderCustomSearchInput && isSearchInputVisible && (
          <SearchTextInput
            {...{
              filterString,
              searchHeaderInputStyle,
              headerSearchPlaceholder,
              setFilterString,
              searchHeaderProps,
              renderSearchInputClear,
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Header;
