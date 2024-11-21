'use client';
import { useThemeChange } from '@/context/ThemeChangeProvider';
import React, { forwardRef, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { H2 } from './font';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div<{ darkmode: boolean }>`
  background: ${({ darkmode }) => (darkmode ? `rgba(30, 41, 59)` : `rgba(248, 250, 252)`)};
  border: 1 solid ${({ darkmode }) => (darkmode ? `rgb(30, 58, 138)` : `rgb(191, 219, 254)`)};
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 80%;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Modal = forwardRef<Element | HTMLVideoElement | null, ModalProps>((props, ref) => {
  const { isOpen, onClose, children, title } = props;
  const { colortheme } = useThemeChange();
  const darkmode = useMemo(() => !!(colortheme.theme == 'dark'), [colortheme]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && ref && 'current' in ref && ref.current?.tagName == 'video') {
      const element = ref.current;
      if (element instanceof HTMLVideoElement) {
        element.currentTime = 0;
        element.play().catch((error) => {
          console.error('Auto play was prevented:', error);
        });
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen && ref && 'current' in ref && ref.current?.tagName == 'video') {
      const element = ref.current;
      if (element instanceof HTMLVideoElement) {
        element.pause();
      }
    }
  }, [isOpen]);
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()} darkmode={darkmode}>
        {title && <H2>{title}</H2>}
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
});
Modal.displayName = 'Modal';
