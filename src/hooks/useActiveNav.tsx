import { useState, useEffect } from 'react';

const useActiveNav = (navIds: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    navIds.forEach((navId) => {
      const section = document.getElementById(navId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [navIds]);

  return activeSection;
};

export default useActiveNav;
