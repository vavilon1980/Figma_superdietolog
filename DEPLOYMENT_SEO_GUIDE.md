# Руководство по развертыванию с SEO

## После деплоя на хостинг

### 1. Создать файл robots.txt в корне сайта

```txt
# robots.txt для AI-Супердиетолог

User-agent: *
Allow: /

# Приоритетные страницы
Allow: /*.css$
Allow: /*.js$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.webp$
Allow: /*.svg$

# Sitemap (создать после деплоя)
Sitemap: https://superdietolog.ru/sitemap.xml

# Yandex
User-agent: Yandex
Allow: /
Clean-param: utm_source&utm_medium&utm_campaign&utm_content

# Google
User-agent: Googlebot
Allow: /

# Скорость индексации для Яндекса
Host: superdietolog.ru
```

### 2. Создать файл sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Главная страница -->
  <url>
    <loc>https://superdietolog.ru/</loc>
    <lastmod>2024-02-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    
    <!-- Hero Image -->
    <image:image>
      <image:loc>https://superdietolog.ru/og-image.jpg</image:loc>
      <image:title>AI-Супердиетолог - Похудение без диет</image:title>
      <image:caption>Персональный AI-диетолог в Telegram</image:caption>
    </image:image>
  </url>
  
  <!-- Добавить дополнительные страницы при расширении сайта -->
  
</urlset>
```

### 3. Настроить .htaccess (если Apache)

```apache
# .htaccess для SEO оптимизации

# Включить mod_rewrite
RewriteEngine On

# HTTPS редирект
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]

# WWW редирект (выбрать одно)
# Без WWW -> С WWW
# RewriteCond %{HTTP_HOST} !^www\.
# RewriteRule ^(.*)$ https://www.%{HTTP_HOST}/$1 [R=301,L]

# С WWW -> Без WWW (рекомендуется)
RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

# Кеширование
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
</IfModule>

# Сжатие
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/json
  AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

### 4. Google Search Console

1. Перейти на: https://search.google.com/search-console
2. Добавить свойство (superdietolog.ru)
3. Подтвердить владение (HTML tag или DNS)
4. Отправить sitemap.xml
5. Запросить индексацию главной страницы
6. Настроить мониторинг эффективности

#### Настройки в GSC:
- ✅ Отправить sitemap
- ✅ Проверить покрытие индекса
- ✅ Настроить уведомления
- ✅ Проверить мобильную версию
- ✅ Проверить Core Web Vitals

### 5. Яндекс.Вебмастер

1. Перейти на: https://webmaster.yandex.ru/
2. Добавить сайт (superdietolog.ru)
3. Подтвердить права (meta-tag или DNS)
4. Добавить sitemap.xml
5. Настроить region (Россия)
6. Включить турбо-страницы (опционально)

#### Настройки в Вебмастере:
- ✅ Добавить sitemap
- ✅ Указать главное зеркало
- ✅ Настроить регион
- ✅ Проверить индексацию
- ✅ Настроить уведомления

### 6. Google Analytics 4

```html
<!-- Добавить в <head> после деплоя -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### События для отслеживания:
- Клик на "Начать сейчас"
- Клик на "Перейти в Telegram"
- Клик на @superdietolog_bot
- Скролл до конца страницы
- Время на странице

### 7. Яндекс.Метрика

```html
<!-- Добавить в <head> после деплоя -->
<script type="text/javascript">
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(XXXXXXXX, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
```

#### Настройки Метрики:
- ✅ Карта кликов
- ✅ Вебвизор
- ✅ Отслеживание отказов
- ✅ Цели (клики на CTA)

### 8. Создать og:image

Создать изображение размером **1200x630px** с:
- Логотипом AI-Супердиетолог
- Основным слоганом
- Ценами (990₽ + 250₽)
- @superdietolog_bot

Сохранить как: `/og-image.jpg`

### 9. Favicon.ico

Создать набор иконок:
```html
<!-- Добавить в <head> -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

### 10. Проверить после деплоя

#### Технические проверки:
- [ ] Сайт открывается по HTTPS
- [ ] Редирект с HTTP на HTTPS работает
- [ ] Редирект с/без www работает (если настроен)
- [ ] robots.txt доступен
- [ ] sitemap.xml доступен
- [ ] og:image загружается корректно

#### SEO проверки:
- [ ] Google Rich Results Test - все схемы валидны
- [ ] Schema.org Validator - нет ошибок
- [ ] Google Mobile-Friendly Test - passed
- [ ] PageSpeed Insights - score > 80
- [ ] Open Graph проверка (Facebook Debugger)
- [ ] Twitter Card проверка (Card Validator)

#### Контент проверки:
- [ ] Title отображается правильно
- [ ] Meta description корректна
- [ ] Все изображения загружаются
- [ ] Ссылки работают
- [ ] Mobile версия отображается корректно

### 11. Регистрация в каталогах

#### Обязательные:
1. **Google My Business** (если есть физический адрес)
2. **Яндекс.Справочник** (для локальной SEO)
3. **2GIS** (если актуально)

#### Рекомендуемые:
- Добавить в каталоги здоровья и фитнеса
- Telegram каталоги ботов
- Тематические форумы и сообщества

### 12. Social Media присутствие

Создать профили (опционально):
- VK сообщество
- Instagram (если есть визуальный контент)
- YouTube (для видео-контента)
- TikTok (короткие видео)

### 13. Мониторинг и аналитика

#### Еженедельно проверять:
- Позиции в поиске (по ключевым запросам)
- Органический трафик
- Показы в поиске
- CTR в выдаче
- Ошибки индексации

#### Ежемесячно проверять:
- Backlinks профиль
- Конкуренты
- Новые ключевые слова
- Конверсия органического трафика

### 14. Continuous Optimization

#### Контент:
- Добавлять новые статьи в блог (если создан)
- Обновлять цены при изменении
- Добавлять реальные отзывы клиентов
- Создавать кейс-стади

#### Технический SEO:
- Следить за Core Web Vitals
- Оптимизировать скорость загрузки
- Проверять на битые ссылки
- Обновлять структурированные данные

#### Off-Page SEO:
- Получать качественные backlinks
- Упоминания бренда
- Guest posting
- Партнерские размещения

## Контакты для SEO

### Инструменты мониторинга:
- Google Search Console: search.google.com/search-console
- Яндекс.Вебмастер: webmaster.yandex.ru
- Google Analytics: analytics.google.com
- Яндекс.Метрика: metrika.yandex.ru

### Проверка SEO:
- PageSpeed: pagespeed.web.dev
- Mobile-Friendly: search.google.com/test/mobile-friendly
- Rich Results: search.google.com/test/rich-results
- Schema Validator: validator.schema.org

## Заключение

После выполнения всех шагов:
- ✅ Сайт будет индексироваться поисковиками
- ✅ Rich snippets будут отображаться в выдаче
- ✅ Аналитика будет собирать данные
- ✅ Мониторинг позволит отслеживать прогресс

**Время до первых результатов**: 2-4 недели
**Стабильный трафик**: 3-6 месяцев
**Топовые позиции**: 6-12 месяцев

Успешного продвижения! 🚀
