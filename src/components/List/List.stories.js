import React from 'react';
import { List } from './List';
import { ListItem } from './ListItem';

export default {
  title: 'List',
  component: List,
};

const Template = args => <List {...args} />;

export const Empty = Template.bind({});

const weather = {
  id: 2643743,
  name: 'London',
  forecast: [
    {
      dateTime: '2020-10-12 15:00:00',
      temp: 285.3,
      pressure: 1016,
      humidity: 75,
    },
    {
      dateTime: '2020-10-12 18:00:00',
      temp: 284.63,
      pressure: 1014,
      humidity: 82,
    },
    {
      dateTime: '2020-10-12 21:00:00',
      temp: 284.36,
      pressure: 1013,
      humidity: 87,
    },
    {
      dateTime: '2020-10-13 00:00:00',
      temp: 284.12,
      pressure: 1011,
      humidity: 77,
    },
    {
      dateTime: '2020-10-13 03:00:00',
      temp: 282.32,
      pressure: 1010,
      humidity: 75,
    },
    {
      dateTime: '2020-10-13 06:00:00',
      temp: 281.52,
      pressure: 1010,
      humidity: 79,
    },
    {
      dateTime: '2020-10-13 09:00:00',
      temp: 282.5,
      pressure: 1009,
      humidity: 72,
    },
    {
      dateTime: '2020-10-13 12:00:00',
      temp: 285.1,
      pressure: 1009,
      humidity: 58,
    },
    {
      dateTime: '2020-10-13 15:00:00',
      temp: 285.11,
      pressure: 1009,
      humidity: 60,
    },
    {
      dateTime: '2020-10-13 18:00:00',
      temp: 283.84,
      pressure: 1010,
      humidity: 77,
    },
    {
      dateTime: '2020-10-13 21:00:00',
      temp: 284.38,
      pressure: 1013,
      humidity: 76,
    },
    {
      dateTime: '2020-10-14 00:00:00',
      temp: 284.62,
      pressure: 1014,
      humidity: 71,
    },
    {
      dateTime: '2020-10-14 03:00:00',
      temp: 283.84,
      pressure: 1016,
      humidity: 74,
    },
    {
      dateTime: '2020-10-14 06:00:00',
      temp: 283.81,
      pressure: 1018,
      humidity: 75,
    },
    {
      dateTime: '2020-10-14 09:00:00',
      temp: 285.53,
      pressure: 1019,
      humidity: 66,
    },
    {
      dateTime: '2020-10-14 12:00:00',
      temp: 287.76,
      pressure: 1021,
      humidity: 55,
    },
    {
      dateTime: '2020-10-14 15:00:00',
      temp: 288.06,
      pressure: 1020,
      humidity: 52,
    },
    {
      dateTime: '2020-10-14 18:00:00',
      temp: 285.79,
      pressure: 1021,
      humidity: 66,
    },
    {
      dateTime: '2020-10-14 21:00:00',
      temp: 284.26,
      pressure: 1022,
      humidity: 74,
    },
    {
      dateTime: '2020-10-15 00:00:00',
      temp: 283.43,
      pressure: 1022,
      humidity: 67,
    },
    {
      dateTime: '2020-10-15 03:00:00',
      temp: 283.13,
      pressure: 1022,
      humidity: 72,
    },
    {
      dateTime: '2020-10-15 06:00:00',
      temp: 282.75,
      pressure: 1023,
      humidity: 70,
    },
    {
      dateTime: '2020-10-15 09:00:00',
      temp: 283.99,
      pressure: 1023,
      humidity: 68,
    },
    {
      dateTime: '2020-10-15 12:00:00',
      temp: 285.73,
      pressure: 1023,
      humidity: 59,
    },
    {
      dateTime: '2020-10-15 15:00:00',
      temp: 286.1,
      pressure: 1022,
      humidity: 56,
    },
    {
      dateTime: '2020-10-15 18:00:00',
      temp: 284.08,
      pressure: 1022,
      humidity: 63,
    },
    {
      dateTime: '2020-10-15 21:00:00',
      temp: 283.31,
      pressure: 1022,
      humidity: 69,
    },
    {
      dateTime: '2020-10-16 00:00:00',
      temp: 282.35,
      pressure: 1022,
      humidity: 73,
    },
    {
      dateTime: '2020-10-16 03:00:00',
      temp: 281.49,
      pressure: 1021,
      humidity: 79,
    },
    {
      dateTime: '2020-10-16 06:00:00',
      temp: 281.48,
      pressure: 1021,
      humidity: 80,
    },
    {
      dateTime: '2020-10-16 09:00:00',
      temp: 283.74,
      pressure: 1021,
      humidity: 60,
    },
    {
      dateTime: '2020-10-16 12:00:00',
      temp: 285.8,
      pressure: 1021,
      humidity: 48,
    },
    {
      dateTime: '2020-10-16 15:00:00',
      temp: 285.8,
      pressure: 1020,
      humidity: 49,
    },
    {
      dateTime: '2020-10-16 18:00:00',
      temp: 284.28,
      pressure: 1020,
      humidity: 61,
    },
    {
      dateTime: '2020-10-16 21:00:00',
      temp: 283.18,
      pressure: 1021,
      humidity: 68,
    },
    {
      dateTime: '2020-10-17 00:00:00',
      temp: 283.17,
      pressure: 1020,
      humidity: 69,
    },
    {
      dateTime: '2020-10-17 03:00:00',
      temp: 283.61,
      pressure: 1020,
      humidity: 65,
    },
    {
      dateTime: '2020-10-17 06:00:00',
      temp: 283.75,
      pressure: 1020,
      humidity: 64,
    },
    {
      dateTime: '2020-10-17 09:00:00',
      temp: 284.25,
      pressure: 1020,
      humidity: 64,
    },
    {
      dateTime: '2020-10-17 12:00:00',
      temp: 285.09,
      pressure: 1020,
      humidity: 63,
    },
  ],
};

const getListItem = (small = false) => {
  return <ListItem weather={weather} small={small} />;
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  children: [getListItem()],
};

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  children: [getListItem(), getListItem(), getListItem()],
};
