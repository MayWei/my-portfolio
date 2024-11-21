'use client';
import { GlobalTheme } from '@/style/theme';
import styled from 'styled-components';

export const Badge = styled.div<{ color: GlobalTheme }>`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  border-width: 1px;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  font-size: 1.2rem;
  font-weight: 600;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  border-color: transparent;
  background-color: ${({ color }) => color.primary};
  color: ${({ color }) => color['primary-foreground']};
  &:hover {
    background-color: ${({ color }) => color['primary-transparent-deeper']};
  }
  &:focus {
    outline: none;
    --tw-ring-offset-shadow: 2px 0 0 0 2px;
    --tw-ring-shadow: 0 0 0 4px hsl(221.2, 83.2%, 53.3%);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(0 0 #0000);
  }
`;
