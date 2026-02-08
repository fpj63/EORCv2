import React from 'react';

export type Language = 'fr' | 'ro' | 'ka';

export interface LocalizedText {
  fr: string;
  ro: string;
  ka: string;
}

export interface NavItem {
  id: string;
  label: LocalizedText;
  icon?: React.ReactNode;
}

export interface CalendarEvent {
  date: string;
  time: string;
  title: LocalizedText;
  type: 'liturgy' | 'vespers' | 'other';
}

export interface SaintDay {
  date: string;
  saints: LocalizedText;
}