'use client';
import { createContext, useContext, Context } from 'react';

const defaultValue = Symbol('context default value');
type DefaultValue = symbol;
export function createSafeContext<ContextValue>() {
  return createContext<ContextValue | DefaultValue>(defaultValue);
}

export function useSafeContext<T>(theContext: Context<T | DefaultValue>): T {
  const value = useContext(theContext);
  if (value === defaultValue) throw new Error('no value provided for context');
  return value as T;
}
