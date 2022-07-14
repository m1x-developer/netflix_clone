import './gridWrapper.scss'
import {Header} from "../../components/Header/Header";
import {Title} from "@mantine/core";
import Footer from "../../components/Footer/Footer";
import Filter from "../../components/Filter/Filter";
import MovieList from "../../components/MovieList/MovieList";
import {FC} from "react";

interface Props {
    title:string,
    loader:boolean,
    items:any
}

const GridWrapper:FC<Props> = ({title,loader,items}) => {
    return (
        <>
            <Header/>
            <div className='black-background'>
                <div className='container'>
                    <Title>{title}</Title>
                    <div className="grid-wrapper">
                        <div style={{backgroundColor:"grey",padding:'20px',height:'500px'}}>
                            <Filter />
                        </div>
                        <div>
                            <div>
                                <MovieList items={items} loader={loader}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default GridWrapper;
