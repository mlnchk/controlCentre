# React Native iOS Control Centre

Попытка повторить контрольный центр из `iOS`. Реализована раскладка, некоторые анимации, общий стейт менеджмент через хуки и контекст, разные варианты использования панелек.
Проект сделан с помощью expo для простоты запуска и паблишинга, поддерживает все команды `expo-cli`.
Проверено на размерах `iPhone 6s`/`iPhone X`. На меньших могут быть проблемы с масштабом, см. секцию TODO.

![Example](example.gif)

## Запуск

```sh
npm i
```

```sh
npm start
```

## TODO

- Более масштабируемый стейт-менеджмент. Сейчас используется контекст и хуки. Это вполне ок на текущем этапе, но ударит по производительности на масштабе;
- Анимация для изменения состояния иконок. Цвет фона, анимация фигур и т. д. Цвет придется костылить с `opacity` и фейковыми вьюхами, потому что `react-native` не интерполирует цвет нативно;
- Респонсивность. Для нее ничего не подготовлено, поэтому иконки выглядят слишком здоровыми на размере `iPhone 5`;
- сломанный `onLongPress` на панельках. Если внутри `<Panel>` положить компонент с `onPress`, то `onLongPress` на этом копоненте не будет по понятным причинам;
- Больше панелек. Сейчас реализованны основные паттерны, но их достаточно мало, поэтому экран выглядит бедновато;
- `PropTypes` или `Flow` для самодокументации кода;
- `Eslint` и `Prettier`.
