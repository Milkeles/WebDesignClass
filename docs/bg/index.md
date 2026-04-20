---
layout: default
title: Документация
description: Фронтенд уебсайт за дисциплината УебДизайн, разработен с TypeScript, React и Tailwind CSS.
permalink: /docs/bg/
---

# Fervor Web
[![Build Status](https://img.shields.io/github/actions/workflow/status/Milkeles/FervorWeb/Deploy.yml)](https://github.com/Milkeles/FervorWeb/actions)
[![License: MIT](https://img.shields.io/github/license/Milkeles/FervorWeb)](LICENSE)
[![Issues](https://img.shields.io/github/issues/Milkeles/FervorWeb)](https://github.com/Milkeles/FervorWeb/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/Milkeles/FervorWeb)](https://github.com/Milkeles/FervorWeb/pulls)
[![Version](https://img.shields.io/github/v/tag/Milkeles/FervorWeb?label=version)](https://github.com/Milkeles/FervorWeb/releases/latest)

## Съдържание
- [Въведение](#въведение)
- [Страници](#страници)
- [Инсталация и настройка](#инсталация-и-настройка)
- [Препратки към доцументация](#препратки-към-документация)
- [Лиценз](#лиценз)

---

## Въведение
Fervor Web е концептуален уебсайт за малка бутикова уеб агенция, специализирана в разработката на високопроизводителни сайтове за малки бизнеси. Ние разработваме 
сайтове, изградени около нуждите на потребителя, с фокус към производителността, конверсиите и оптимизацията за търскачки (SEO), доставени бързо и поддържани на достъпни цени чрез лесен за разбиране абонаментен модел.

Това хранилище е учебен проект по дисциплината "Уеб дизайн и проектиране на МТ", изграден с TypeScript, React(Vite), shadcn и Tailwind CSS и съдържащ авторска фотография. 

## Страници
- Начална страница: Hero секция, мото и призив за действие
- Услуги: Описание и абонаментен модел
- Проекти: Портфолио с примерни проекти и казуси
- За нас: Историята на агенцията, подходът и ценностите
- Контакти: Форми за запитвания и записване

### Снимки
#### Начална страница
| Тъмна тема | Светла тема | Процесна карта и футър |
|----------|----------|------|
| ![](/docs/assets/home-dark.png) | ![](/docs/assets/home-light.png) | ![](/docs/assets/home-footer.png) |

#### Услуги
| Hero секция | Услуга с подравняване вляво | Услуга с подравняване вдясно |
|----------|----------|------|
| ![](/docs/assets/services-home.png) | ![](/docs/assets/services-left.png) | ![](/docs/assets/services-right.png) |
#### За нас
| Ценности | Екип |
|----------|----------|
| ![](/docs/assets/about-values.png) | ![](/docs/assets/about-team.png) |
#### Проекти и контакти
| Портфолио с проекти | Страница за връзка |
|----------|----------|
| ![](/docs/assets/work-page.png) | ![](/docs/assets/contact-page.png) |

## Инсталация и настройка
```bash
# Клониране на хранилището
git clone https://github.com/Milkeles/FervorWeb.git
cd FervorWeb

# Инсталиране на зависимости
npm install

# Стартиране на сървъра за разработка
npm run dev

# Стартиране на Storybook (Документация на компоненти)
npm run storybook
```

## Препратки към документация
- [Ръководство за визуален стил](/docs/bg/visual-style-guide.md)
- [Документ за технически дизайн](/docs/bg/technical-design.md)
- [План за управление и конфигурация](/docs/bg/configuration-management.md)
- Компонентна библиотека (Storybook) – изпълнява се локално чрез `npm run storybook`

*Забележка: Някои технически документи, които се срещат в пълни проекти, са умишлено изключени, поради фокуса на проекта върху фронт-енд дизайна. Докато други, за които не е присъщо да се съхраняват в хранилището като docs-as-code тип документация са включени за целите на дисциплината.*


## Лиценз
[MIT](../../LICENSE)