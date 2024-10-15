import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-300 py-8 shadow-[inset_0_10px_10px_-10px_rgba(0,0,0,0.3)] dark:shadow-[inset_0_10px_10px_-10px_rgba(255,255,255,0.1)] sticky bottom-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          {/* Company Information */}
          <div className="max-w-xs">
            <h2 className="text-3xl pb-2 font-sans text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-black dark:from-white dark:to-gray-500">
              MultiLingual
            </h2>
            <p className="mt-2 text-sm">
              {t('footerDescription')}
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700 flex justify-between items-center text-sm">
          <p>&copy; 2024 MultiLingual. {t('rightsReserved')}</p>
          <div className="flex space-x-4">
            {/* Social Icons */}
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900">
              {/* Twitter Icon */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.56c-.89.39-1.83.66-2.82.78a4.93 4.93 0 0 0 2.16-2.72 9.76 9.76 0 0 1-3.1 1.2 4.92 4.92 0 0 0-8.38 4.49 13.94 13.94 0 0 1-10.13-5.14 4.93 4.93 0 0 0 1.52 6.57 4.92 4.92 0 0 1-2.22-.62v.06a4.93 4.93 0 0 0 3.95 4.83 4.96 4.96 0 0 1-2.21.08 4.92 4.92 0 0 0 4.59 3.42A9.87 9.87 0 0 1 0 19.54a13.94 13.94 0 0 0 7.56 2.22c9.05 0 14-7.5 14-14 0-.22 0-.43-.02-.64A9.93 9.93 0 0 0 24 4.56z" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border text-blue-700 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-blue-900">
              {/* Facebook Icon */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9.197 21.743h-3.972V12.06H2.301V8.879h2.924V6.777c0-2.708 1.82-4.077 4.225-4.077 1.194 0 2.219.09 2.517.128v2.921h-1.728c-1.357 0-1.623.647-1.623 1.597v2.533h3.293l-.43 3.18h-2.863v9.682z" />
              </svg>
            </a>
            {/* Add more social icons as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
}
