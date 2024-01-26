import { NumberInput } from "./NumberInput";
import '../styles/Pagination.css'

export const Pagination = ({ page, count, setPage }) => {

    const calcOffset = (page, count) => {
        switch (page) {
            case 1: return 0;
            case 2: return -1;
            case (count - 1): return -3;
            case count: return -4;
            default: return -2;
        }
    }

    const offset = calcOffset(page, count);

    const handlePrevButton = () => {
        const prevPage = page - 1
        setPage(prevPage);
    }

    const handleNextButton = () => {
        const nextPage = page + 1
        setPage(nextPage);
    }

    const handleButtonsClick = (e) => {
        e.stopPropagation();
        if (e.target.dataset.value)
            setPage(+e.target.dataset.value)
    }

    const prevButton = <button className="button" disabled={page - 1 === 0} onClick={handlePrevButton}>{'<'}</button>
    const nextButton = <button className="button" disabled={page + 1 > count} onClick={handleNextButton} > {'>'}</button>

    const buttons = Array.from({ length: 5 }, (e, i) => {
        let currentPage = page + i + offset;
        return <button
            key={currentPage}
            className={`button ${page === currentPage ? 'active' : ''}`}
            data-value={currentPage}
            disabled={currentPage > count || currentPage < 1}
        >{currentPage}</button>
    })

    return (
        <>
            <div className="pagination">
                <div className="pagination__buttons" onClick={handleButtonsClick}>
                    {prevButton}
                    {buttons}
                    {nextButton}
                </div>
                <NumberInput {...{ defaultValue: page, setValue: setPage, max: count || page, min: 1, step: 1, span: 'go to', button: 'go' }} />
            </div>
            <span>total pages:{count}</span>
        </>
    )
}
