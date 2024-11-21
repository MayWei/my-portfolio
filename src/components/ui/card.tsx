'use client';
import { GlobalTheme } from '@/style/theme';
import styled from 'styled-components';

const Card = styled.div<{ color: GlobalTheme }>`
  color: ${({ color }) => color['card-foreground']};
  background-color: ${({ color }) => color.card};
  border: 1px solid;
  border-radius: ${(props) => props.theme.borderradius.lg};
  box-shadow: ${(props) => props.theme.boxshadow.sm};
`;
const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0;
`;

export { Card, CardHeader };
