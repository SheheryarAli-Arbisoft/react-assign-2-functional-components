import { mount } from 'enzyme';
import { ListItem } from '../../../components/List';
import { connectProviders } from '../../utils';

describe('testing the ListItem component', () => {
  test('should render the component without errors', () => {
    const weather = {
      name: 'Rawalpindi',
      forecast: [],
    };
    const wrapper = mount(connectProviders(ListItem, { weather }));
    const container = wrapper.find('div div');
    expect(container.length).toBe(11);
  });
});
