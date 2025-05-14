import React from 'react';

function Filter({ current, onChange }) {
  return (
    <div className="filter-container">
      <button
        className={`filter-button ${current === 'all' ? 'active' : ''}`}
        onClick={() => onChange('all')}
      >
        Все
      </button>
      <button
        className={`filter-button ${current === 'active' ? 'active' : ''}`}
        onClick={() => onChange('active')}
      >
        Невыполненные
      </button>
      <button
        className={`filter-button ${current === 'completed' ? 'active' : ''}`}
        onClick={() => onChange('completed')}
      >
        Выполненные
      </button>
    </div>
  );
}

export default Filter;