'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <span className={styles.topBarText}>Free Home Collection on All Orders</span>
        <div className={styles.contactInfo}>
          <span className={styles.contactItem}>
            <Image src="/call.png" alt="" width={15} height={15} />
            +92 (021) 111786986
          </span>
          <span className={styles.contactItem}>
            <Image src="/mail.png" alt="" width={15} height={15} />
            support@easalab.com
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className={styles.mainHeader}>
        <div className={styles.logoSection}>
          <Image 
            src="/logo.png" 
            height={100} 
            width={100} 
            alt="Essa Laboratory"
            priority
          />
        </div>

        <div className={styles.searchContainer}>
          <input 
            className={styles.searchInput}
            type="text" 
            placeholder="Search Our Store" 
            aria-label="Search our store" 
          />
          <Image src="/search.png" alt="Search" width={20} height={20} />
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.active : ''}`}></span>
        </button>
      </header>

      {/* Navigation */}
      <nav 
        className={`${styles.navbar} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}
        aria-label="Main navigation"
      >
        <Link href="/" className={styles.navLink} onClick={closeMobileMenu}>
          Home
        </Link>
        <Link href="/About" className={styles.navLink} onClick={closeMobileMenu}>
          About Us
        </Link>
        <Link href="/OnlineReports" className={styles.navLink} onClick={closeMobileMenu}>
          Online Reports
        </Link>
        <Link href="/LabTests" className={styles.navLink} onClick={closeMobileMenu}>
          Lab Tests
        </Link>
        <Link href="/Packages" className={styles.navLink} onClick={closeMobileMenu}>
          Packages
        </Link>
        <a 
          href="https://play.google.com/store/apps/details?id=com.essa.dressalab" 
          className={styles.navLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMobileMenu}
        >
          Mobile App
        </a>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className={styles.menuOverlay}
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  )
}

export default Header