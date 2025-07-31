import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './digital-garden.module.css';

// This would eventually come from your actual content/posts
// For now, I'll create some sample data structure
const gardenEntries = [
  {
    id: 'thinking-models-ld',
    title: 'Thinking Models for Learning & Development',
    date: '2025-01-15',
    category: 'Learning',
    tags: ['mental-models', 'learning', 'development'],
    excerpt: 'Exploring various thinking models that can enhance learning and development processes.',
    path: '/docs/field-guide/thinking-models-ld'
  },
  {
    id: 'why-field-guide',
    title: 'Why Build a Field Guide?',
    date: '2025-01-10',
    category: 'Reflections',
    tags: ['meta', 'learning-in-public', 'knowledge-management'],
    excerpt: 'Reflections on the value of building a personal field guide for learning and growth.',
    path: '/docs/field-guide/why-field-guide'
  },
  {
    id: 'learning-models',
    title: 'Thinking Models for Learning',
    date: '2025-01-05',
    category: 'Learning',
    tags: ['mental-models', 'learning', 'cognition'],
    excerpt: 'A collection of mental models specifically focused on how we learn and process information.',
    path: '/docs/field-guide/thinking-models-learning'
  }
];

export default function DigitalGarden(): JSX.Element {
  const [filteredEntries, setFilteredEntries] = useState(gardenEntries);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get all unique tags and categories
  const allTags = [...new Set(gardenEntries.flatMap(entry => entry.tags))].sort();
  const allCategories = [...new Set(gardenEntries.map(entry => entry.category))].sort();

  useEffect(() => {
    let filtered = gardenEntries;

    if (selectedTag) {
      filtered = filtered.filter(entry => entry.tags.includes(selectedTag));
    }

    if (selectedCategory) {
      filtered = filtered.filter(entry => entry.category === selectedCategory);
    }

    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    setFilteredEntries(filtered);
  }, [selectedTag, selectedCategory]);

  const clearFilters = () => {
    setSelectedTag(null);
    setSelectedCategory(null);
  };

  return (
    <Layout
      title="Digital Garden"
      description="A collection of thoughts, experiments, and learning in progress">
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Digital Garden</h1>
          <p className={styles.subtitle}>
            Welcome to my digital garden—a space for cultivating ideas, documenting experiments, 
            and sharing learning in progress. Unlike a traditional blog, this garden grows organically, 
            with ideas that evolve, connect, and cross-pollinate over time.
          </p>
          <p className={styles.description}>
            Here you'll find thinking models, learning experiments, reflections on growth, 
            and connections between ideas. Some thoughts are seedlings, others are more mature. 
            All are part of the ongoing journey of learning in public.
          </p>
        </header>

        <div className={styles.filters}>
          <div className={styles.filterSection}>
            <h3>Categories</h3>
            <div className={styles.filterTags}>
              <button 
                className={`${styles.filterTag} ${!selectedCategory ? styles.active : ''}`}
                onClick={clearFilters}
              >
                All
              </button>
              {allCategories.map(category => (
                <button
                  key={category}
                  className={`${styles.filterTag} ${selectedCategory === category ? styles.active : ''}`}
                  onClick={() => {
                    setSelectedCategory(selectedCategory === category ? null : category);
                    setSelectedTag(null);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterSection}>
            <h3>Tags</h3>
            <div className={styles.filterTags}>
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`${styles.filterTag} ${selectedTag === tag ? styles.active : ''}`}
                  onClick={() => {
                    setSelectedTag(selectedTag === tag ? null : tag);
                    setSelectedCategory(null);
                  }}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {(selectedTag || selectedCategory) && (
          <div className={styles.activeFilters}>
            <span>Filtering by: </span>
            {selectedCategory && <span className={styles.activeFilter}>{selectedCategory}</span>}
            {selectedTag && <span className={styles.activeFilter}>#{selectedTag}</span>}
            <button onClick={clearFilters} className={styles.clearFilters}>Clear filters</button>
          </div>
        )}

        <main className={styles.entries}>
          <div className={styles.entriesHeader}>
            <h2>Recent Growth ({filteredEntries.length} entries)</h2>
          </div>
          
          {filteredEntries.length === 0 ? (
            <div className={styles.noResults}>
              <p>No entries found with the selected filters.</p>
              <button onClick={clearFilters} className={styles.clearFilters}>
                Show all entries
              </button>
            </div>
          ) : (
            <div className={styles.entriesList}>
              {filteredEntries.map(entry => (
                <article key={entry.id} className={styles.entry}>
                  <div className={styles.entryMeta}>
                    <span className={styles.entryDate}>
                      {new Date(entry.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className={styles.entryCategory}>{entry.category}</span>
                  </div>
                  
                  <h3 className={styles.entryTitle}>
                    <Link to={entry.path}>{entry.title}</Link>
                  </h3>
                  
                  <p className={styles.entryExcerpt}>{entry.excerpt}</p>
                  
                  <div className={styles.entryTags}>
                    {entry.tags.map(tag => (
                      <button
                        key={tag}
                        className={styles.entryTag}
                        onClick={() => {
                          setSelectedTag(tag);
                          setSelectedCategory(null);
                        }}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
}
