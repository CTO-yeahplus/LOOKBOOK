import {getRequestConfig} from 'next-intl/server';
import {getUserLocale} from './services/locale'; // 유저 설정 저장 서비스 (추후 생성)

export default getRequestConfig(async () => {
  const locale = await getUserLocale();
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});