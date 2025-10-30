// types/index.ts

interface Session {
  date: string;
  location: 'Session 1' | 'Session 2' | 'Session 3' | 'Session 4' | 'Session 5';
}

interface Module {
  code: string;
  title: string;
  themeDetail: string;
  sessions: Session[];
  image?: string; // ✅ <-- Ajout ici
}

interface ModuleForOtherPages {
  code: string;
  title: string;
  themeDetail: string;

  image?: string; // ✅ <-- Ajout ici
}
interface Theme {
  slug: string;
  title: string;
  modules: Module[];
  image?: string;
}

interface ThemeForOtherPages {
 slug: string;
  title: string;
  modules: ModuleForOtherPages[];
  image?: string;
}
// TYPES
// =========================================================================
interface Session {
    date: string;
}




interface SearchResult {
    type: 'theme' | 'module';
    title: string;
    detail: string;
    targetTheme: Theme;
    moduleCode?: string;
}

export type { Session, Module, Theme , SearchResult, ModuleForOtherPages, ThemeForOtherPages };
