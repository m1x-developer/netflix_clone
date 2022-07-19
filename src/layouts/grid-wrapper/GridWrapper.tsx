import './gridWrapper.scss'
import {Header} from "../../components/Header/Header";
import {Pagination, Title} from "@mantine/core";
import Footer from "../../components/Footer/Footer";
import Filter from "../../components/Filter/Filter";
import MovieList from "../../components/MovieList/MovieList";
import {FC} from "react";


interface Props {
    title: string,
    loader: boolean,
    items: any,
    page:number,
    total:number
}

const GridWrapper: FC<Props> = ({title, loader, items, page, changePaginationPage, total}) => {
    return (
        <>
            <Header/>
            <div className='black-background'>
                <div className='container'>
                    <Title>{title}</Title>
                    <div className="grid-wrapper">
                        <div style={{backgroundColor: "grey", padding: '20px', height: '500px'}}>
                            <Filter/>
                            <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'30px'}}>
                                <Pagination
                                    color={'red'}
                                    radius="lg"
                                    page={page}
                                    onChange={changePaginationPage}
                                    total={total}
                                    size={'sm'}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <MovieList items={items} loader={loader}/>
                                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                    <Pagination
                                        color={'red'}
                                        page={page}
                                        onChange={changePaginationPage}
                                        total={total}
                                    />
                                </div>
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
