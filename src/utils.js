// Get day from number
const getDayName = number => {
  switch (number) {
    case 0:
      return 'Sun';
    case 1:
      return 'Mon';
    case 2:
      return 'Tue';
    case 3:
      return 'Wed';
    case 4:
      return 'Thu';
    case 5:
      return 'Fri';
    case 6:
      return 'Sat';
    default:
      return '';
  }
};

// Get month from number
const getMonthName = number => {
  switch (number) {
    case 0:
      return 'Jan';
    case 1:
      return 'Feb';
    case 2:
      return 'Mar';
    case 3:
      return 'Apr';
    case 4:
      return 'May';
    case 5:
      return 'Jun';
    case 6:
      return 'Jul';
    case 7:
      return 'Aug';
    case 8:
      return 'Sep';
    case 9:
      return 'Oct';
    case 10:
      return 'Nov';
    case 11:
      return 'Dec';
    default:
      return '';
  }
};

// Get formatted date
const getFormattedDate = date => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours % 12;

  return [
    `${getDayName(date.getDay())}, ${date.getDate()} ${getMonthName(
      date.getMonth()
    )}`,
    `${formattedHours === 0 ? '12' : formattedHours}:${
      minutes < 10 ? `0${minutes}` : minutes
    } ${hours >= 12 ? 'PM' : 'AM'}`,
  ];
};

// Generate the dataset to display in chart
// eslint-disable-next-line no-shadow
export const generateLabels = forecastData => {
  const result = [];

  forecastData.forEach(forecast => {
    const dateTime = new Date(forecast.dateTime);
    result.push(getFormattedDate(dateTime));
  });

  return result;
};
