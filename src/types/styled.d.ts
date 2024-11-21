import 'styled-components';
import { theme } from '@/style/global';

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
