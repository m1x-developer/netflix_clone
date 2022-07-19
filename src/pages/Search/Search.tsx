import './search.scss'

import React, {useState} from 'react';
import {Header} from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Radio, RadioGroup, TextInput} from "@mantine/core";
import {debounce, isNil} from "lodash";
import MovieList from "../../components/MovieList/MovieList";
import {moviesAPI} from "../../api/api";
import {setMovieBySearch} from "../../redux/slices/moviesSlice";
import {useDispatch, useSelector} from "react-redux";


const Search = () => {
    const [loader, setLoader] = useState(false);
    const [type, setType] = useState('1');
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch()
    const items = useSelector(state => state.movies.searchItems)

    const request = debounce(value => {
        async function getItems() {
            // setLoader(true)
            try {
                const movies = await moviesAPI.getItemsForSearch(value, type)
                console.log(type)
                dispatch(setMovieBySearch(movies.docs))
            } catch (e) {
                console.log(e)
            } finally {
                setLoader(false);
            }
        }

        getItems()
    }, 1000);

    const onChange = (e) => {
        request(e.target.value);
        setInputValue(e.target.value);
    };

    if (isNil(items)) {
        return <div>Фильмов не найдено</div>
    }

    return (
        <>
            <Header/>
            <div className='black-background' style={{marginTop: '50px'}}>
                <div style={{width: '1300px', margin: '0 auto'}}>
                    <div>
                        <TextInput
                            value={inputValue}
                            onChange={onChange}
                            placeholder="Введите название фильма"
                            size="xl"
                            variant={'filled'}
                        />
                    </div>
                    <div style={{backgroundColor: 'white'}}>
                        <RadioGroup
                            color={'red'}
                            value={type}
                            onChange={setType}
                            label="Поиск по..."
                            required
                        >
                            <Radio value="1" label="Фильмы"/>
                            <Radio value="2" label="Сериалы"/>
                            <Radio value="3" label="Мультфильмы"/>
                        </RadioGroup>
                    </div>
                    <div style={{marginTop: '30px'}}>
                        <MovieList items={items} loader={loader}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Search;
