import { PokemonsList } from "../components/PokemonsList"
import { useEffect, useState } from 'react'
import { useOutletContext } from "react-router-dom";
import { api } from '../utils/api';
import { throttle } from '../utils/throttle';

export const Page = ({ Component, loader }) => {
    const { limit } = useOutletContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [viewData, setViewData] = useState([]);
    const [data, setData] = useState([]);

    const offset = limit * (currentPage - 1)
    const totalPages = Math.ceil(data.count / limit);

    const getData = throttle((limit, offset) => {
        api(limit, offset).then(setData)
    })

    useEffect(() => {
        if (currentPage === 1) {
            setViewData([]);
            getData(limit, offset)
            return
        }
        setCurrentPage(1);
        setViewData([]);
    }, [limit]);

    useEffect(() => {
        if (Array.isArray(data.results)) {
            setViewData(prev => loader({ data, prev }));
        }
    }, [data])

    useEffect(() => {
        getData(limit, offset);
    }, [currentPage]);


    return (
        <>
            <PokemonsList data={viewData} offset={offset} />
            <Component count={totalPages} page={currentPage} setPage={setCurrentPage} limit={limit} />
        </>
    )
}