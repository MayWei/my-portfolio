export interface GlobalTheme {
  background: string;
  'background-transparent': string;
  'background-full-transparent': string;
  foreground: string;
  card: string;
  'card-foreground': string;
  popover: string;
  'popover-foreground': string;
  primary: string;
  'primary-transparent': string;
  'primary-transparent-deeper': string;
  'primary-foreground': string;
  secondary: string;
  'secondary-transparent': string;
  'secondary-foreground': string;
  muted: string;
  'muted-foreground': string;
  accent: string;
  'accent-foreground': string;
  destructive: string;
  'destructive-transparent': string;
  'destructive-foreground': string;
  border: string;
  input: string;
  ring: string;
  radius?: string;
}

export interface Theme extends GlobalTheme {
  theme: 'light' | 'dark';
}
export const globalTheme: { light: GlobalTheme; dark: GlobalTheme } = {
  light: {
    background: 'hsl(0, 0%, 100%)',
    'background-full-transparent': 'hsl(0, 0%, 100%,0)',
    'background-transparent': 'hsl(0, 0%, 100%,0.9)',
    foreground: 'hsl(222.2, 50%, 10%)',
    card: 'hsl(0, 0%, 100%)',
    'card-foreground': 'hsl(222.2, 50%, 10%)',
    popover: 'hsl(0, 0%, 100%)',
    'popover-foreground': 'hsl(222.2, 50%, 10%)',
    primary: 'hsl(221.2, 83.2%, 53.3%)',
    'primary-transparent': 'hsl(221.2, 83.2%, 53.3%,0.9)',
    'primary-transparent-deeper': 'hsl(221.2, 83.2%, 53.3%,0.8)',
    'primary-foreground': 'hsl(210, 40%, 98%)',
    secondary: 'hsl(210, 40%, 96.1%)',
    'secondary-transparent': 'hsl(210, 40%, 96.1%,0.8)',
    'secondary-foreground': 'hsl(222.2, 47.4%, 11.2%)',
    muted: 'hsl(210, 40%, 96.1%)',
    'muted-foreground': 'hsl(215.4, 16.3%, 46.9%)',
    accent: 'hsl(210, 40%, 96.1%)',
    'accent-foreground': 'hsl(222.2, 47.4%, 11.2%)',
    destructive: 'hsl(0, 84.2%, 60.2%)',
    'destructive-transparent': 'hsl(0, 84.2%, 60.2%,0.9)',
    'destructive-foreground': 'hsl(210, 40%, 98%)',
    border: 'hsl(214.3, 31.8%, 91.4%)',
    input: 'hsl(214.3, 31.8%, 91.4%)',
    ring: 'hsl(221.2, 83.2%, 53.3%)',
    radius: '1rem',
  },
  dark: {
    background: 'hsl(222.2, 50%, 10%)',
    'background-full-transparent': 'hsl(222.2, 50%, 10%,0)',
    'background-transparent': 'hsl(222.2, 50%, 10%,0.9)',
    foreground: 'hsl(210, 40%, 98%)',
    card: 'hsl(222.2, 50%, 10%)',
    'card-foreground': 'hsl(210, 40%, 98%)',
    popover: 'hsl(222.2, 50%, 10%)',
    'popover-foreground': 'hsl(210, 40%, 98%)',
    primary: 'hsl(217.2, 91.2%, 59.8%)',
    'primary-transparent': 'hsl(221.2, 83.2%, 53.3%,0.9)',
    'primary-transparent-deeper': 'hsl(221.2, 83.2%, 53.3%,0.8)',
    'primary-foreground': 'hsl(222.2, 47.4%, 11.2%)',
    secondary: 'hsl(217.2, 32.6%, 17.5%)',
    'secondary-transparent': 'hsl(217.2, 32.6%, 17.5%,0.8)',
    'secondary-foreground': 'hsl(210, 40%, 98%)',
    muted: 'hsl(217.2, 32.6%, 17.5%)',
    'muted-foreground': 'hsl(215, 20.2%, 65.1%)',
    accent: 'hsl(217.2, 32.6%, 17.5%)',
    'accent-foreground': 'hsl(210, 40%, 98%)',
    destructive: 'hsl(0, 62.8%, 30.6%)',
    'destructive-transparent': 'hsl(0, 62.8%, 30.6%,0.9)',
    'destructive-foreground': 'hsl(210, 40%, 98%)',
    border: 'hsl(217.2, 32.6%, 17.5%)',
    input: 'hsl(217.2, 32.6%, 17.5%)',
    ring: 'hsl(224.3, 76.3%, 48%)',
  },
};
