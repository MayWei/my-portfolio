'use client';
import React, { FC, useMemo } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { StyledButton } from './Button';
import { useThemeChange } from '@/context/ThemeChangeProvider';
import { Moon, Sun } from 'lucide-react';
import styled from 'styled-components';
import { GlobalTheme } from '@/style/theme';

type ContentProps = React.ComponentProps<typeof DropdownMenu.Content>;
interface StyledContentProps extends ContentProps {
  colour: GlobalTheme;
}
const StyledContent = styled(DropdownMenu.Content)<StyledContentProps>`
  z-index: 50;
  min-width: 12.8rem;
  overflow: hidden;
  border-radius: 0.6rem;
  border: 1px solid ${(props) => props.colour.border || '#e2e8f0'};
  background-color: ${(props) => props.colour.popover || 'white'};
  padding: 0.4rem;
  color: ${(props) => props.colour[`popover-foreground`] || 'black'};
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);

  &[data-state='open'] {
    animation: fadeIn 150ms ease-out;
  }

  &[data-state='closed'] {
    animation: fadeOut 150ms ease-in;
  }

  &[data-side='bottom'] {
    animation: slideFromTop 150ms ease-out;
  }

  &[data-side='left'] {
    animation: slideFromRight 150ms ease-out;
  }

  &[data-side='right'] {
    animation: slideFromLeft 150ms ease-out;
  }

  &[data-side='top'] {
    animation: slideFromBottom 150ms ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  @keyframes slideFromTop {
    from {
      transform: translateY(-0.5rem);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideFromRight {
    from {
      transform: translateX(0.5rem);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideFromLeft {
    from {
      transform: translateX(-0.5rem);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideFromBottom {
    from {
      transform: translateY(0.5rem);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.Content>
>(({ sideOffset = 4, ...props }, ref) => {
  const { colortheme } = useThemeChange();
  return (
    <DropdownMenu.Portal>
      <StyledContent ref={ref} sideOffset={sideOffset} colour={colortheme} {...props} />
    </DropdownMenu.Portal>
  );
});

DropdownMenuContent.displayName = DropdownMenu.Content.displayName;

type ItemProps = React.ComponentProps<typeof DropdownMenu.Item>;
interface StyledItemProps extends ItemProps {
  $colour: GlobalTheme;
  $inset?: boolean;
}

const StyledItem = styled(DropdownMenu.Item)<StyledItemProps>`
  position: relative;
  display: flex;
  cursor: default;
  user-select: none;
  align-items: center;
  border-radius: 0.2rem;
  padding: 0.6rem 0.8rem;
  padding-left: ${(props) => (props.$inset ? '3.2rem' : '0.8rem')};
  font-size: 1.4rem;
  outline: none;
  transition: colors 150ms ease;

  &:focus {
    background-color: ${(props) => props.$colour.accent || '#f3f4f6'};
    color: ${(props) => props.$colour[`accent-foreground`] || '#111827'};
  }

  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

interface DropdownMenuItemProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu.Item> {
  inset?: boolean;
}

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Item>,
  DropdownMenuItemProps
>(({ inset, ...props }, ref) => {
  const { colortheme } = useThemeChange();
  return <StyledItem ref={ref} $inset={inset} $colour={colortheme} {...props} />;
});

DropdownMenuItem.displayName = DropdownMenu.Item.displayName;

export const Dropdown: FC<React.PropsWithChildren> = () => {
  const { colortheme, togglecolortheme } = useThemeChange();
  const darkmode = useMemo(() => !!(colortheme.theme == 'dark'), [colortheme]);
  const color = { color: colortheme.foreground };
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <StyledButton variant="outline" size="icon" color={colortheme}>
          <Sun
            style={
              colortheme.theme == 'dark'
                ? { height: '1.9rem', width: '1.9rem', transition: 'all', scale: 0 }
                : { height: '1.9rem', width: '1.9rem', transition: 'all', scale: 1 }
            }
          />
          <Moon
            style={
              darkmode
                ? {
                    position: 'absolute',
                    height: '1.9rem',
                    width: '1.9rem',
                    transition: 'all',
                    scale: 1,
                    ...color,
                  }
                : {
                    position: 'absolute',
                    height: '1.9rem',
                    width: '1.9rem',
                    transition: 'all',
                    scale: 0,
                    ...color,
                  }
            }
          />
        </StyledButton>
      </DropdownMenu.Trigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => togglecolortheme()}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => togglecolortheme()}>Dark</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};
