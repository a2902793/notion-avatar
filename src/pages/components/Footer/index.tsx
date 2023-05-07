import { useTranslation } from 'next-i18next';
import Image from 'next/legacy/image';

export default function Footer() {
  const { t } = useTranslation(`common`);

  return (
    <footer className="flex flex-col items-center pb-4">
      <Image src="/icon/line.svg" width="125" height="54" />
      <div className="text-gray-500 mt-3 px-6 text-center">
        <a>專為 TKUAIIC 幹部建立 Notion 頭貼用</a>
      </div>
    </footer>
  );
}
