import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const useActiveNav = (navIds: string[]): [string, Dispatch<SetStateAction<string>>] => {
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
      { threshold: 0.1 }
    );

    navIds.forEach((navId) => {
      const section = document.getElementById(navId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [navIds, activeSection]);

  return [activeSection, setActiveSection];
};

export default useActiveNav;
