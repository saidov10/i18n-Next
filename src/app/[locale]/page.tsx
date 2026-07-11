import {useTranslations} from 'next-intl';
import LocaleSwitcher from '@/components/LocaleSwitcher';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-8 shadow-xl dark:border-slate-800/60 dark:bg-slate-900 transition-all duration-300">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xs font-bold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
            saidov10/i18n-Next
          </h2>
          <LocaleSwitcher />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl transition-all duration-300">
            {t('title')}
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t('description')}
          </p>
        </div>
        
        <div className="mt-8 border-t border-slate-100 pt-6 dark:border-slate-800">
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">
            {t('supportedLanguages')}
          </p>
        </div>
      </div>
    </main>
  );
}