# Принцип работы с CSS

Работа строится на основе `postCSS`. Основные возможности расписаны тут

```CSS
/* Переменные */

:root {
  --main-color: red;
  --small-color: blue;
}

body {
  background-color: var(--main-color);
}

/* Кастомные меди выражения */

@custom-media --small-viewport (min-width: 460px);

@media (--small-viewport) {
  body{
    background-color: var(--small-color);
  }
}

/* Вложенные селекторы */

body {

  & h1 {
    font-size: 40px;
  }
}

.block {

  &__element {
    font-size: 50px;
  }
}

/* Импорт файлов */

@import "mixins.css";
```

Для организации файлов используетися следующий подход. Базовый файли стилей лежат в папке `css`, а стили модуля лежат рядом с этим модулем в папке `components`. Все файлы собираются в `style.css`.
