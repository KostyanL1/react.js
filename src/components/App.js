import React from 'react';
import TagsInput from './TagsInput';

const App = () => {
  const handleTagsChange = (tags) => {
    console.log('Current tags:', tags);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Tags Input Component</h1>
      <TagsInput initialTags={['React', 'JavaScript']} onTagsChange={handleTagsChange} />
    </div>
  );
};

export default App;
