import React, { useEffect, useMemo, useState } from 'react';

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseDuration = 2200,
}) => {
  const [index, setIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const currentWord = words[index] ?? '';
  const characters = useMemo(() => Array.from(currentWord), [currentWord]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener?.('change', updateMotionPreference);

    return () => mediaQuery.removeEventListener?.('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (words.length === 0 || reduceMotion) return;

    if (!isDeleting && characterCount >= characters.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && characterCount === 0) {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setCharacterCount((previousCount) =>
          Math.max(0, Math.min(characters.length, previousCount + (isDeleting ? -1 : 1))),
        );
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    characterCount,
    characters.length,
    deletingSpeed,
    isDeleting,
    pauseDuration,
    reduceMotion,
    typingSpeed,
    words.length,
  ]);

  if (!currentWord) return null;

  const visibleText = reduceMotion
    ? currentWord
    : characters.slice(0, characterCount).join('');

  return (
    <span className="typewriter-shell" dir="auto" aria-label={currentWord}>
      <span className="typewriter-sizer" aria-hidden="true">{currentWord}</span>
      <span className="typewriter-content" aria-hidden="true">
        <span className="typewriter-glyphs">{visibleText}</span>
        {!reduceMotion && <span className="typewriter-cursor">|</span>}
      </span>
    </span>
  );
};
