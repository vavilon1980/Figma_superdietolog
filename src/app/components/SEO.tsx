import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export function SEO({
  title = 'Супердиетолог — персональный AI-помощник по питанию',
  description = 'Персональное меню, план тренировок, PDF-отчёт, дневник питания и 30 дней AI-сопровождения в Telegram и MAX за 990 ₽.',
  keywords = 'AI помощник по питанию, персональное меню, план тренировок, дневник питания, анализ еды по фото, питание и фитнес, Супердиетолог Telegram',
  ogImage = 'https://super-dietolog.ru/about/og-image.jpg',
  canonicalUrl = 'https://super-dietolog.ru/about/'
}: SEOProps) {
  useEffect(() => {
    // Set title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic SEO
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('robots', 'index, follow');
    setMetaTag('author', 'Супердиетолог');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover');
    
    // Additional SEO tags
    setMetaTag('language', 'Russian');
    setMetaTag('revisit-after', '7 days');
    setMetaTag('rating', 'general');
    setMetaTag('distribution', 'global');
    setMetaTag('geo.region', 'RU');
    setMetaTag('geo.placename', 'Россия');
    
    // Apple-specific mobile optimizations
    setMetaTag('apple-mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    setMetaTag('apple-mobile-web-app-title', 'Супердиетолог');
    setMetaTag('format-detection', 'telephone=no');
    
    // Open Graph
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '630', true);
    setMetaTag('og:image:alt', 'Супердиетолог — персональный AI-помощник по питанию', true);
    setMetaTag('og:locale', 'ru_RU', true);
    setMetaTag('og:site_name', 'Супердиетолог', true);

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);
    setMetaTag('twitter:image:alt', 'Супердиетолог — персональный AI-помощник по питанию');

    // Telegram
    setMetaTag('telegram:channel', '@superdietolog_bot');
    
    // Additional meta tags
    setMetaTag('application-name', 'Супердиетолог');
    setMetaTag('msapplication-TileColor', '#A0FF00');
    setMetaTag('msapplication-tooltip', 'Персональный AI-помощник по питанию');

    // Theme color
    setMetaTag('theme-color', '#A0FF00');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Structured Data (JSON-LD) - Multiple schemas for better SEO
    const structuredDataArray = [
      // Main Service
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': 'Супердиетолог',
        'alternateName': 'Супердиетолог',
        'description': description,
        'url': canonicalUrl,
        'logo': ogImage,
        'image': ogImage,
        'priceRange': '990₽',
        'telephone': '@superdietolog_bot',
        'address': {
          '@type': 'PostalAddress',
          'addressCountry': 'RU'
        },
        'areaServed': {
          '@type': 'Country',
          'name': 'Россия'
        },
        'availableLanguage': ['ru'],
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Персональная программа Супердиетолога',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Персональная программа и 30 дней сопровождения',
                'description': 'Анкетирование, PDF-отчёт, меню на 7 дней, план тренировок и AI-чат по питанию и фитнесу'
              },
              'price': '990',
              'priceCurrency': 'RUB',
              'availability': 'https://schema.org/InStock'
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Продление AI-сопровождения на 30 дней',
                'description': 'Доступ к AI-чату, дневнику питания и персональным рекомендациям'
              },
              'price': '990',
              'priceCurrency': 'RUB',
              'availability': 'https://schema.org/InStock',
              'priceSpecification': {
                '@type': 'UnitPriceSpecification',
                'price': '990',
                'priceCurrency': 'RUB',
                'referenceQuantity': {
                  '@type': 'QuantitativeValue',
                  'value': '1',
                  'unitText': 'MONTH'
                }
              }
            }
          ]
        }
      },
      // Organization
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Супердиетолог',
        'url': canonicalUrl,
        'logo': ogImage,
        'sameAs': [
          'https://telegram.me/superdietolog_bot'
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'contactType': 'Customer Service',
          'availableLanguage': ['Russian']
        }
      },
      // Website
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'Супердиетолог',
        'url': canonicalUrl,
        'description': description,
        'inLanguage': 'ru-RU'
      },
      // FAQ
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Сколько стоит программа Супердиетолога?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Стартовая персональная программа и первые 30 дней сопровождения стоят 990 руб. Продление ещё на 30 дней - 990 руб.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Как работает Супердиетолог?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'После адаптивной анкеты AI-система формирует PDF-отчёт, меню на 7 дней и план тренировок. Затем пользователь получает 30 дней доступа к персональному AI-чату, дневнику и анализу еды по фото.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Подходит ли программа для людей с заболеваниями?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'При наличии диабета, сердечно-сосудистых заболеваний, расстройств пищевого поведения и других серьёзных патологий необходима консультация врача. Бот не ставит диагнозы и не назначает лечение.'
            }
          }
        ]
      },
      // BreadcrumbList
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Главная',
            'item': canonicalUrl
          }
        ]
      }
    ];

    let script = document.querySelector('script[type=\"application/ld+json\"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredDataArray);

  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
}
