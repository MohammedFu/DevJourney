import React, { useEffect, useRef, useState, createContext } from 'react';

// Context for AnimatePresence
const AnimatePresenceContext = createContext<boolean>(true);

export const AnimatePresence: React.FC<{
  children: React.ReactNode;
  mode?: 'wait' | 'popLayout' | 'sync';
}> = ({ children }) => {
  return (
    <AnimatePresenceContext.Provider value={true}>
      {children}
    </AnimatePresenceContext.Provider>
  );
};

export interface MotionProps extends React.HTMLAttributes<HTMLElement> {
  initial?: any;
  animate?: any;
  exit?: any;
  variants?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
  whileInView?: any;
  viewport?: any;
  layout?: boolean | string;
  layoutId?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  type?: 'button' | 'submit' | 'reset';
  src?: string;
  alt?: string;
  href?: string;
  target?: string;
  rel?: string;
}

const createMotionComponent = (Tag: string) => {
  return React.forwardRef<HTMLElement, MotionProps>(
    (
      {
        initial,
        animate,
        exit,
        variants,
        transition,
        whileHover,
        whileTap,
        whileInView,
        viewport,
        layout,
        layoutId,
        className = '',
        style = {},
        children,
        onClick,
        ...restProps
      },
      ref
    ) => {
      const elementRef = useRef<HTMLElement | null>(null);
      const [isInView, setIsInView] = useState(false);
      const [isHovered, setIsHovered] = useState(false);
      const [isTapped, setIsTapped] = useState(false);

      // Handle intersection observer for whileInView
      useEffect(() => {
        if (!whileInView) return;
        const target = elementRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              setIsInView(true);
              if (viewport?.once) {
                observer.disconnect();
              }
            } else if (!viewport?.once) {
              setIsInView(false);
            }
          },
          { threshold: 0.15 }
        );

        observer.observe(target);
        return () => observer.disconnect();
      }, [whileInView, viewport]);

      // Combine styles for fluid animation
      let dynamicStyles: React.CSSProperties = {
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        opacity: whileInView && !isInView ? 0.4 : 1,
        transform: whileInView && !isInView ? 'translateY(15px)' : 'none',
        ...style,
      };

      if (whileHover && isHovered) {
        if (whileHover.scale) {
          dynamicStyles.transform = `${dynamicStyles.transform || ''} scale(${whileHover.scale})`;
        }
        if (whileHover.y !== undefined) {
          dynamicStyles.transform = `${dynamicStyles.transform || ''} translateY(${whileHover.y}px)`;
        }
        if (whileHover.backgroundColor) {
          dynamicStyles.backgroundColor = whileHover.backgroundColor;
        }
        if (whileHover.borderColor) {
          dynamicStyles.borderColor = whileHover.borderColor;
        }
        if (whileHover.boxShadow) {
          dynamicStyles.boxShadow = whileHover.boxShadow;
        }
      }

      if (whileTap && isTapped) {
        if (whileTap.scale) {
          dynamicStyles.transform = `${dynamicStyles.transform || ''} scale(${whileTap.scale})`;
        }
      }

      const combinedClassName = [
        className,
        'transition-all duration-300 ease-out',
      ]
        .filter(Boolean)
        .join(' ');

      return React.createElement(
        Tag,
        {
          ref: (node: HTMLElement) => {
            elementRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) (ref as any).current = node;
          },
          className: combinedClassName,
          style: dynamicStyles,
          onMouseEnter: () => setIsHovered(true),
          onMouseLeave: () => {
            setIsHovered(false);
            setIsTapped(false);
          },
          onMouseDown: () => setIsTapped(true),
          onMouseUp: () => setIsTapped(false),
          onClick,
          ...restProps,
        },
        children
      );
    }
  );
};

export const motion = {
  div: createMotionComponent('div'),
  button: createMotionComponent('button'),
  section: createMotionComponent('section'),
  header: createMotionComponent('header'),
  h1: createMotionComponent('h1'),
  h2: createMotionComponent('h2'),
  h3: createMotionComponent('h3'),
  p: createMotionComponent('p'),
  a: createMotionComponent('a'),
  span: createMotionComponent('span'),
};
