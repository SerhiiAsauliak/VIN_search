ТЕСТОВОЕ ЗАДАНИЕ “VIN DECODER” 

Перед нами стоит задача разработки веб-приложения для расшифровки автомобильных VIN-кодов и отображения полученных данных в удобном для восприятия виде. 

Что такое VIN? 

VIN (Vehicle Identification Number) это уникальный код автомобиля, состоящий из 17 символов (латинских букв и цифр). VIN содержит в себе сведения о производителе, модели, годе выпуска и ряде других характеристик автомобиля. 

Примеры: 1FTFW1CT5DFC10312, JN1AZ4EH7DM430111. 

Расшифровка VIN 

 Для расшифровки воспользуемся открытым API NHTSA: https://vpic.nhtsa.dot.gov/api/ 

Ресурс Decode VIN по запросу /vehicles/decodevin/{vin}?format=json возвращает список переменных, заполненных характеристиками автомобиля. 

Ресурс Get Vehicle Variables List по запросу /vehicles/getvehiclevariablelist?format=json возвращает расширенные описания переменных. 

---------------------------------------------

Разработка приложения 

Для работы с API напишем SPA следующей структуры: 

/ 

Форма ввода VIN-кода 

Список из 5 последних расшифрованных кодов 

Список результатов расшифровки (значения Variable и Value переменных из массива Results, у которых Value заполнено) 

/variables 

Список всех возможных переменных с описаниями 

/variables/{variableId} 

Описание конкретной переменной 

---------------------------------------------

ТРЕБОВАНИЯ К РЕАЛИЗАЦИИ 

Приложение написано на React. 

Для навигации используется React Router. 

Форма ввода поддерживает минимальную валидацию данных (поле не пустое, не больше 17 символов, нет запрещённых символов). 

Ошибки валидации формы и сообщения из ответа API (поле Message) выводятся в интерфейсе. 

Приложение ведёт историю из 5 последних запросов и позволяет применить их для повторного отображения результатов. 

Работоспособность в последних версиях Chrome и Firefox. 

Можно применять необходимые библиотеки, на своё усмотрение. 

---------------------------------------------

ТРЕБОВАНИЯ К ВЁРСТКЕ 

Вёрстка должна быть минималистичной, без фреймворков, но выглядеть корректно на разрешениях от 320 до 1440 px (элементы не должны “слипаться”, “наползать”, или выходить за пределы экрана). Должна соблюдаться семантика элементов. 

ТРЕБОВАНИЯ К РАЗМЕЩЕНИЮ 

Исходный (не сжатый) код приложения нужно загрузить в публичный репозиторий на GitHub. В описании репозитория обязательно нужно дать ссылку на развёрнутое приложение. Аккуратный, читаемый исходный код не менее важен, чем работающее демо-приложение. 