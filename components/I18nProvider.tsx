"use client";

import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  // Wrap children with I18nextProvider to provide i18n context
  // i18n is initialized when the module is imported
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
