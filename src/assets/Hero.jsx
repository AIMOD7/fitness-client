import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [text, setText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useEffect(() => {
    if (completed) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [completed]);

  useEffect(() => {
    if (!showLoader) return;

    const words = ["STRIVE", "THRIVE ", "CONQUER"];
    let typeSpeed;
    const currentWord = words[currentWordIndex];

    if (!isDeleting) {
      // Typing forward
      typeSpeed = 100;
      if (text.length < currentWord.length) {
        const timer = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, typeSpeed);
        return () => clearTimeout(timer);
      } else {
        // Finished typing word, pause before deleting
        typeSpeed = 800;
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, typeSpeed);
        return () => clearTimeout(timer);
      }
    } else {
      // Deleting
      typeSpeed = 70;
      if (text.length > 0) {
        const timer = setTimeout(() => {
          setText(text.substring(0, text.length - 1));
        }, typeSpeed);
        return () => clearTimeout(timer);
      } else {
        // Finished deleting, move to next word or finish
        setIsDeleting(false);
        if (currentWordIndex < words.length - 1) {
          // Move to next word
          setCurrentWordIndex(prev => prev + 1);
        } else {
          // All words completed
          setCompleted(true);
        }
      }
    }
  }, [text, currentWordIndex, isDeleting, showLoader, completed]);

  return (
    <>
      {showLoader && (
        <div className="loader-container">
          <div className="typewriter-text">
            {text}
            <span className="cursor">|</span>
          </div>
        </div>
      )}
      
      {!showLoader && (
        <section className="hero-section">
          <div className="background-overlay"></div>
          <div className={`centered-text ${fadeIn ? 'fade-in' : ''}`}>
            <span className="grow">BUILD</span>
            <br />
            <span className="together">TOGETHER</span>
          </div>
        </section>
      )}
    </>
  );
}

export default Hero;