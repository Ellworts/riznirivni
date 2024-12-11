import React, { useEffect, useState } from 'react';
import './cursor.scss';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnterInteractive = (e) => {
      if (!e.target.classList.contains('active')) {
        setIsHoveringInteractive(true);
      }
    };

    const handleMouseLeaveInteractive = () => {
      setIsHoveringInteractive(false);
    };

    const handleClassMutation = (mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = mutation.target;
          if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('card')) {
            if (target.classList.contains('active')) {
              setIsHoveringInteractive(false);
            } else if (target.matches(':hover')) {
              setIsHoveringInteractive(true);
            }
          }
        }
      });
    };

    const observer = new MutationObserver(handleClassMutation);

    document.body.style.cursor = 'none';
    document.addEventListener('mousemove', handleMouseMove);

    //интерактивные элементы
    const interactiveElements = document.querySelectorAll('a, button, .card, .accordion-title, .footer-menu');
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnterInteractive);
      element.addEventListener('mouseleave', handleMouseLeaveInteractive);
      observer.observe(element, { attributes: true });
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = '';

      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnterInteractive);
        element.removeEventListener('mouseleave', handleMouseLeaveInteractive);
        observer.disconnect();
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHoveringInteractive ? 'hovering-interactive' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
