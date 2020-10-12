import React from 'react';
import { ListItem as CustomListItem } from './styled';
import { propTypes, defaultProps } from './props';
import { Text } from '../../Text';

export const ListItem = ({ weather: { name, forecast }, ...rest }) => {
  return (
    <CustomListItem {...rest}>
      <Text variant='title'>{name}</Text>
      {/* <Charts forecastData={forecast} /> */}
    </CustomListItem>
  );
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;
