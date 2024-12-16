import React, { useState } from 'react';

const Tag = ({ tag, onRemove }) => {
  return (
    <div style={styles.tag}>
      {tag}
      <button style={styles.removeButton} onClick={onRemove}>
        ×
      </button>
    </div>
  );
};

const TagsInput = ({ initialTags = [], onTagsChange }) => {
  const [tags, setTags] = useState(initialTags);
  const [inputValue, setInputValue] = useState('');

  const addTag = () => {
    if (inputValue.trim() && !tags.includes(inputValue.trim())) {
      const newTags = [...tags, inputValue.trim()];
      setTags(newTags);
      setInputValue('');
      if (onTagsChange) onTagsChange(newTags);
    }
  };

  const removeTag = (tagToRemove) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);
    if (onTagsChange) onTagsChange(newTags);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTag();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} onRemove={() => removeTag(tag)} />
        ))}
      </div>
      <input
        type="text"
        style={styles.input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a tag..."
      />
      <button style={styles.addButton} onClick={addTag}>
        Add
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '300px',
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '8px',
  },
  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 8px',
    background: '#e0e0e0',
    borderRadius: '12px',
    fontSize: '14px',
  },
  removeButton: {
    marginLeft: '8px',
    border: 'none',
    background: 'transparent',
    color: '#ff0000',
    cursor: 'pointer',
  },
  input: {
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  addButton: {
    padding: '8px',
    fontSize: '14px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default TagsInput;
