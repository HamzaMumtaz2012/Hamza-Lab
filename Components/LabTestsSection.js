'use client';

import React from 'react';
import styles from './LabTestsSection.module.css';

const LabTestsSection = () => {
  const tests = [
    {
      id: 1,
      name: 'Complete Blood Count (CBC)',
      description: 'Comprehensive analysis of blood cells including red blood cells, white blood cells, and platelets. Helps diagnose anemia, infections, and other blood disorders.',
      color: '#FF6B6B',
      icon: '🩸',
      price: '$45',
      duration: '24 hours'
    },
    {
      id: 2,
      name: 'Lipid Profile',
      description: 'Measures cholesterol levels and triglycerides. Essential for assessing cardiovascular health and heart disease risk.',
      color: '#FFA500',
      icon: '❤️',
      price: '$60',
      duration: '24 hours'
    },
    {
      id: 3,
      name: 'Liver Function Test (LFT)',
      description: 'Evaluates liver health by measuring enzymes and proteins. Helps detect liver disease, cirrhosis, and hepatitis.',
      color: '#8B4513',
      icon: '🧬',
      price: '$55',
      duration: '24 hours'
    },
    {
      id: 4,
      name: 'Kidney Function Test (KFT)',
      description: 'Assesses kidney function through creatinine and urea levels. Critical for detecting kidney disease and diabetes complications.',
      color: '#4169E1',
      icon: '💧',
      price: '$50',
      duration: '24 hours'
    },
    {
      id: 5,
      name: 'Thyroid Profile (TSH, T3, T4)',
      description: 'Measures thyroid hormones to diagnose thyroid disorders including hypothyroidism and hyperthyroidism.',
      color: '#9370DB',
      icon: '🦋',
      price: '$65',
      duration: '24 hours'
    },
    {
      id: 6,
      name: 'Blood Glucose (Fasting)',
      description: 'Measures blood sugar levels after fasting. Essential for screening and monitoring diabetes.',
      color: '#FFD700',
      icon: '🩺',
      price: '$35',
      duration: '24 hours'
    },
    {
      id: 7,
      name: 'COVID-19 RT-PCR Test',
      description: 'Detects active COVID-19 infection through nasal/throat swab. Most accurate detection method with results in 24-48 hours.',
      color: '#20B2AA',
      icon: '🔬',
      price: '$40',
      duration: '24-48 hours'
    },
    {
      id: 8,
      name: 'Vitamin D Level Test',
      description: 'Measures vitamin D concentration in blood. Important for bone health and immune system function.',
      color: '#FFB6C1',
      icon: '☀️',
      price: '$50',
      duration: '24 hours'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>Our Laboratory Tests</h1>
        <p className={styles.subtitle}>
          Comprehensive diagnostic testing services with fast, accurate results
        </p>
      </div>

      {/* Tests Grid */}
      <div className={styles.testsGrid}>
        {tests.map((test) => (
          <div key={test.id} className={styles.testCard}>
            {/* Image Section */}
            <div 
              className={styles.imageContainer}
              style={{
                backgroundColor: test.color,
              }}
            >
              <div className={styles.iconContainer}>{test.icon}</div>
              <span className={styles.badge}>
                <span className={styles.priceTag}>{test.price}</span>
              </span>
            </div>

            {/* Content Section */}
            <div className={styles.content}>
              <h3 className={styles.testName}>{test.name}</h3>
              <p className={styles.description}>{test.description}</p>
              
              {/* Info Footer */}
              <div className={styles.footer}>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Results in:</span>
                  <span className={styles.value}>{test.duration}</span>
                </div>
                <button className={styles.bookButton}>Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className={styles.ctaSection}>
        <h2>Need Multiple Tests?</h2>
        <p>Get our Complete Health Checkup Package at special discounted rates</p>
        <button className={styles.packageButton}><a href="/Packages">View Packages</a></button>
      </div>
    </div>
  );
};

export default LabTestsSection;
