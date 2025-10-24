// types/index.ts

interface Session {
  date: string;
  location: 'Casablanca' | 'Abidjan' | 'Dakar' | 'Ouagadougou' | 'Dubaï';
}

interface Module {
  code: string;
  title: string;
  themeDetail: string;
  sessions: Session[];
}

interface Theme {
  slug: string;
  title: string;
  modules: Module[];
  image: string;
}

export type { Session, Module, Theme };