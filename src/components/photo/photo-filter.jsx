import React, { useContext } from 'react';
import { Dropdown, Input, List } from 'semantic-ui-react';

const Options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
];

const Skills = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' },
];

function PhotoFilter(props) {
  const { filter, dispatch } = useContext(props.context);
  const handleChange = (e, data) => {
    dispatch({ type: 'filter.update', name: data.name, value: data.value });
  };

  return (
    <List>
      <List.Item>
        <Input
          name='query'
          value={filter.query}
          onChange={handleChange}
          placeholder='Enter text...'
          fluid
        />
      </List.Item>
      <List.Item>
        <Dropdown
          name='option'
          value={filter.option}
          onChange={handleChange}
          options={Options}
          placeholder='Select option'
          fluid
          clearable
          selection
        />
      </List.Item>
      <List.Item>
        <Dropdown
          name='skills'
          value={filter.skills}
          onChange={handleChange}
          options={Skills}
          placeholder='Skills'
          fluid
          multiple
          selection
        />
      </List.Item>
    </List>
  );
}

export default PhotoFilter;
