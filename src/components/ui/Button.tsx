import { GlobalTheme } from '@/style/theme';
import styled from 'styled-components';

const Button = styled.button<{ color: GlobalTheme }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: 500;

  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 0.2rem ${({ color }) => color.background},
      0 0 0 0.4rem ${({ color }) => color.ring};
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

interface ButtonProps<C extends React.ElementType> {
  as?: C;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
}

const StyledButton = styled(Button)<ButtonProps<React.ElementType>>`
  ${(props) =>
    props.variant === 'default' &&
    `
    background-color: ${props.color.background};
    color: ${props.color.foreground};
    
    &:hover {
      background-color: ${props.color[`background-transparent`]};
    }
  `}

  ${(props) =>
    props.variant === 'destructive' &&
    `
    background-color: ${props.color[`destructive-transparent`]};
    color: ${props.color['destructive-foreground']};
    
    &:hover {
      background-color: ${props.color.destructive};
    }
  `}
  
  ${(props) =>
    props.variant === 'outline' &&
    `
    border: 1px solid ${props.color.input};
    background-color: ${props.color.background};
    
    &:hover {
      background-color: ${props.color.accent};
      color: ${props.color[`accent-foreground`]};
    }
  `}

  ${(props) =>
    props.variant === 'secondary' &&
    `
    background-color: ${props.color.secondary};
    color: ${props.color['secondary-foreground']};
    
    &:hover {
      background-color: ${props.color['secondary-transparent']};
    }
  `}
  
  ${(props) =>
    props.size === 'default' &&
    `
    height: 4.0rem;
    padding: 0.8rem 1.6rem;
  `}
  
  ${(props) =>
    props.size === 'sm' &&
    `
    height: 3.6rem;
    border-radius: 0.6rem;
    padding: 0 1.2rem;
  `}
  
  ${(props) =>
    props.size === 'lg' &&
    `
    height: 4.4rem;
    border-radius: 0.6rem;
    padding: 0 3.2rem;
  `}
  ${(props) =>
    props.size === 'icon' &&
    `
    height: 4.0rem;
    width:4.0rem;
  `}
`;
export { StyledButton };
