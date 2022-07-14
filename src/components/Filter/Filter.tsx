import {Formik} from 'formik';
import './Filter.scss'
import {Button, InputWrapper, MultiSelect, RadioGroup, RangeSlider, Radio} from "@mantine/core";
import {getCurrentYear} from "../../utils/getCurrentYear";
import {useState} from "react";

const dataMulti = [
    {label: "Семейные", value: "семейный"},
    {label: "Биографии", value: "биография"},
    {label: "Боевики", value: "боевик"},
    {label: "Вестерны", value: "вестерн"},
    {label: "Военные", value: "военный"},
    {label: "Детективы", value: "детектив"},
    {label: "Детские", value: "детский"},
    {label: "Документальные", value: "документальный"},
    {label: "Драмы", value: "драма"},
    {label: "Исторические", value: "история"},
    {label: "Комедии", value: "комедия"},
    {label: "Короткометражки", value: "короткометражка"},
    {label: "Криминал", value: "криминал"},
    {label: "Мелодрамы", value: "мелодрама"},
    {label: "Музыкальные", value: "музыка"},
    {label: "Мюзиклы", value: "мюзикл"},
    {label: "Новости", value: "новости"},
    {label: "Приключения", value: "приключения"},
    {label: "Спортивные", value: "спорт"},
    {label: "Триллеры", value: "триллер"},
    {label: "Ужасы", value: "ужасы"},
    {label: "Фантастика", value: "фантастика"},
    {label: "Фильмы-нуар", value: "фильм-нуар"},
    {label: "Фэнтези", value: "фэнтези"}
];

const dataRaiting = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'},
    {value: '6', label: '6'},
    {value: '7', label: '7'},
    {value: '8', label: '8'},
    {value: '9', label: '9'},
    {value: '10', label: '10'},
];

const Filter = () => {

    const [rangeYearsValue, setRangeYearsValue] = useState<[number, number]>([1900, getCurrentYear()]);
    const [radioValue, setRadioValue] = useState('1');

    return (
        <Formik
            initialValues={{
                rating: '10',
                years: `${rangeYearsValue[0]}-${rangeYearsValue[1]}`,
                genre: 'Все жанры',
                releaseYear: `${radioValue}`
            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}

        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                    <div className="form-elem-wrap">
                        <MultiSelect
                            data={dataMulti}
                            variant={'default'}
                            label="Выберите жанр"
                            placeholder="Все жанры"
                        />
                    </div>
                    <div className="form-elem-wrap">
                        <InputWrapper label="Года выпуска">
                            <RangeSlider
                                value={rangeYearsValue}
                                onChange={setRangeYearsValue}
                                id="years"
                                name="years"
                                color="red"
                                size="sm"
                                radius="xl"
                                min={1900}
                                max={getCurrentYear()}
                                marks={[
                                    {value: 1940, label: '1940'},
                                    {value: 2000, label: '2000'},
                                ]}
                            />
                        </InputWrapper>
                    </div>
                    <div className="form-elem-wrap">
                        <InputWrapper label="Года выпуска">
                            <RangeSlider
                                color="red"
                                size="sm"
                                radius="xl"
                                min={1}
                                max={10}
                                step={1}
                            />
                        </InputWrapper>
                    </div>
                    <div className="form-elem-wrap">
                        <RadioGroup
                            value={radioValue}
                            onChange={setRadioValue}
                            label="Года выпуска"
                            color={'red'}
                        >
                            <Radio value="1" label="Сначала новые"/>
                            <Radio value="2" label="Сначала старые"/>
                        </RadioGroup>
                    </div>
                    <Button color="red" type="submit" disabled={isSubmitting}>
                        Поиск...
                    </Button>
                </form>
            )}
        </Formik>
    );
};

export default Filter;
