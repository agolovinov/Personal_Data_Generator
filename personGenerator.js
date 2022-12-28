const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александра",
            "id_2": "Марианна",
            "id_3": "Ирина",
            "id_4": "Алёна",
            "id_5": "Вассисуалия",
            "id_6": "Наталья",
            "id_7": "Милана",
            "id_8": "Дарья",
            "id_9": "Елена",
            "id_10": "Анжелика"
        }
    }`,
    professionMaleJson: `{
        "count": 16,
        "list": {
            "id_1": "шахтёр",
            "id_2": "лесоруб",
            "id_3": "пастух",
            "id_4": "моряк",
            "id_5": "электрик",
            "id_6": "водитель",
            "id_7": "охранник",
            "id_8": "полицейский",
            "id_9": "столяр",
            "id_10": "плотник",
            "id_11": "истопник",
            "id_12": "ассенизатор",
            "id_13": "трубочист",
            "id_14": "дворник",
            "id_15": "слесарь",
            "id_16": "строитель"
        }
    }`,
    professionFemaleJson: `{
        "count": 16,
        "list": {
            "id_1": "учитель",
            "id_2": "воспитатель",
            "id_3": "посудомойка",
            "id_4": "повар",
            "id_5": "парикмахер",
            "id_6": "домработница",
            "id_7": "массажист",
            "id_8": "врач",
            "id_9": "продавец",
            "id_10": "медсестра",
            "id_11": "бухгалтер",
            "id_12": "юрист",
            "id_13": "блогер",
            "id_14": "психолог",
            "id_15": "менеджер",
            "id_16": "журналист"
        }
    }`,
    birthMonthJson: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == this.GENDER_MALE) {
        return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurname: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },
    
    randomPatronym: function() {
        let patr = this.randomValue(this.firstNameMaleJson);
        const letter = patr.substr(-1,1);
        patr = (letter == 'й' && this.person.gender == this.GENDER_MALE) ? patr.replace('й', 'евич') : patr.replace('й', 'евна');
        patr = (letter == 'а' && this.person.gender == this.GENDER_MALE) ? patr.replace('та', 'тич') : patr.replace('та', 'тична');
        if (patr.includes('хаил')) {
            patr = patr.replace('хаил', 'хайл');
        }
        if (letter != 'й' && letter != 'а' && this.person.gender == this.GENDER_MALE) {
            patr = patr + 'ович';
        }
        if (letter != 'й' && letter != 'а' && this.person.gender == this.GENDER_FEMALE) {
            patr = patr + 'овна';
        }
        return patr;  
    },

    randomProfession: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }    
    },

    randomGender: function() {
        return this.randomIntNumber() == 1 ? this.GENDER_MALE : this.GENDER_FEMALE ;
    },

    randomBirthYear: function() {
        const year = this.randomIntNumber(2020, 1920);
        return year;
    },
          
    randomBirthDate: function() {
        let maxDay;
        let date; 
        let month = this.randomValue(this.birthMonthJson);
        if (month == "января" || month == "марта" || month == "мая" || month == "июля" || month == "августа" || month == "октября" || month == "декабря") {
            maxDay = 31;
        }
        if (month == "апреля" || month == "июня" || month == "сентября" || month == "ноября") {
            maxDay = 30;
        }
        if (month == "февраля") {
            maxDay = 28;
        }
        const day = this.randomIntNumber(maxDay,1);
        return date = day + " " + month;
    }, 

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronym = this.randomPatronym();
        this.person.profession = this.randomProfession();
        this.person.birthDate = this.randomBirthDate();
        this.person.birthYear = this.randomBirthYear();
        return this.person;
    }
};


