
import App from './App';
import { shallow } from 'enzyme'
import PersonList from './PersonList'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App', () => {
  it('renders without crashing', () => {
    const appWrapper = shallow(<App />);
  })
  it('renders a person list', () => {
    const appWrapper = shallow(<App />);
    const personList = appWrapper.find(PersonList)

    expect(personList).toHaveLength(1);
  });
});