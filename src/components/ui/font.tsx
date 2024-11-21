import { GlobalTheme } from '@/style/theme';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.05em;
`;
const H2 = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.1em;
`;
const P = styled.p<{ color: GlobalTheme }>`
  color: ${({ color }) => color['muted-foreground']};
  font-size: 1.4rem;
  line-height: 2rem;
`;

export { H1, P, H2 };
