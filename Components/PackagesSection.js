'use client';

import React from 'react';
import styles from './PackagesSection.module.css';

const PackagesSection = () => {
  const packages = [
    {
      id: 1,
      name: 'Basic Health',
      price: '$99',
      description: 'Essential health screening',
      tests: [
        'Complete Blood Count (CBC)',
        'Blood Glucose (Fasting)',
        'Blood Pressure Check'
      ],
      popular: false,
      color: '#E8F4F8'
    },
    {
      id: 2,
      name: 'Wellness Plus',
      price: '$149',
      description: 'Comprehensive wellness check',
      tests: [
        'CBC + Lipid Profile',
        'Liver Function Test (LFT)',
        'Kidney Function Test (KFT)',
        'Blood Glucose (Fasting)'
      ],
      popular: true,
      color: '#FFF3E0'
    },
    {
      id: 3,
      name: 'Executive',
      price: '$249',
      description: 'Complete health profile',
      tests: [
        'CBC + Lipid Profile',
        'Liver & Kidney Function Tests',
        'Thyroid Profile (TSH, T3, T4)',
        'Blood Glucose (Fasting)',
        'Vitamin D Level Test'
      ],
      popular: false,
      color: '#F3E5F5'
    },
    {
      id: 4,
      name: 'Premium Care',
      price: '$349',
      description: 'Advanced health monitoring',
      tests: [
        'All Executive Package Tests',
        'COVID-19 RT-PCR Test',
        'Complete Hormone Panel',
        'Cardiac Risk Assessment',
        'Detailed Health Consultation'
      ],
      popular: false,
      color: '#E8F5E9'
    },
    {
      id: 5,
      name: 'Elite Complete',
      price: '$499',
      description: 'Comprehensive annual checkup',
      tests: [
        'All Premium Care Tests',
        'Advanced Imaging (Optional)',
        'Specialized Consultations',
        'Home Sample Collection',
        'Priority Results & Report',
        'Annual Health Tracking Plan'
      ],
      popular: false,
      color: '#FCE4EC'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>Our Health Packages</h1>
        <p className={styles.subtitle}>
          Choose the perfect package for your health needs
        </p>
      </div>

      {/* Packages Grid */}
      <div className={styles.packagesGrid}>
        {packages.map((pkg) => (
          <div 
            key={pkg.id} 
            className={`${styles.packageCard} ${pkg.popular ? styles.popular : ''}`}
            style={{ backgroundColor: pkg.color }}
          >
            {/* Popular Badge */}
            {pkg.popular && (
              <div className={styles.popularBadge}>MOST POPULAR</div>
            )}

            {/* Package Header */}
            <div className={styles.packageHeader}>
              <h3 className={styles.packageName}>{pkg.name}</h3>
              <p className={styles.packageDescription}>{pkg.description}</p>
            </div>

            {/* Price */}
            <div className={styles.priceSection}>
              <span className={styles.price}>{pkg.price}</span>
              <span className={styles.pricePeriod}>one-time</span>
            </div>

            {/* Tests List */}
            <div className={styles.testsList}>
              <h4 className={styles.testsTitle}>Includes:</h4>
              <ul className={styles.tests}>
                {pkg.tests.map((test, index) => (
                  <li key={index} className={styles.testItem}>
                    <span className={styles.checkmark}>✓</span>
                    {test}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button className={styles.selectButton}>
              {pkg.popular ? 'Get Started' : 'Select Package'}
            </button>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <h2>Why Choose Our Packages?</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h4>Fast Results</h4>
            <p>Get results in 24 hours</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🏥</div>
            <h4>Expert Staff</h4>
            <p>Certified professionals</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🏠</div>
            <h4>Home Service</h4>
            <p>Sample collection at home</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>💯</div>
            <h4>Accurate Tests</h4>
            <p>ISO certified lab</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
