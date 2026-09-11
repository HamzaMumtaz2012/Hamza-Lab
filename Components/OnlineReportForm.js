'use client';

import React, { useState } from 'react';
import styles from './OnlineReportForm.module.css';

const OnlineReportForm = () => {
  const [labNumber, setLabNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!labNumber || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    // Add your API call here
    setTimeout(() => {
      console.log('Form submitted:', { labNumber, password });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
       

        <h1 className={styles.title}>Online Lab Reports</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <div className={styles.error}>{error}</div>}

          {/* Lab Number Input */}
          <div className={styles.formGroup}>
            <label htmlFor="labNumber" className={styles.label}>
              Lab Number
            </label>
            <input
              id="labNumber"
              type="text"
              className={styles.input}
              placeholder="Enter your lab number"
              value={labNumber}
              onChange={(e) => setLabNumber(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              className={styles.input}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className={styles.button}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'View Report'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OnlineReportForm;
