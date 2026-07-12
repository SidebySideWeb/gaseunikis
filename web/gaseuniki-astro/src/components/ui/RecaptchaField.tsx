import { useEffect, useRef } from 'react';
import { initRecaptchaWidget } from '../../lib/recaptcha-client';

interface Props {
  siteKey: string;
  widgetKey?: string;
}

export default function RecaptchaField({ siteKey, widgetKey = 'registration' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!siteKey || !containerRef.current) return;

    const container = containerRef.current;
    initRecaptchaWidget(container, siteKey, widgetKey);

    return () => {
      container.innerHTML = '';
    };
  }, [siteKey, widgetKey]);

  if (!siteKey) return null;

  return <div ref={containerRef} className="min-h-[78px]" />;
}
