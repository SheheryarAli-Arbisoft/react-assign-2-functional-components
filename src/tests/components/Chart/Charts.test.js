import { mount } from 'enzyme';
import { Charts } from '../../../components/Chart';
import { connectProviders } from '../../utils';

describe('testing the Charts component', () => {
  test('should render the component without errors', () => {
    const wrapper = mount(connectProviders(Charts, { forecastData: [] }));
    const container = wrapper.find('div');
    expect(container.length).toBe(10);
  });
});
