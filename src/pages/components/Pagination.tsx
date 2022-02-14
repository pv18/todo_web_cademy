import React, {FC} from 'react';

interface IPaginationPropsType {
    pagesArray: number[]
    page: number
    setPage: (page: number) => void
}

export const Pagination: FC<IPaginationPropsType> = (
    {
        pagesArray,
        page,
        setPage
    }
) => {
    // Functions
    const handlerClick = (page: number) => setPage(page)
    const handlerPreviousPage = () => (page !== 1) && setPage(page - 1)
    const handlerNextPage = () => (page !== pagesArray[pagesArray.length - 1]) && setPage(page + 1)
    // Components before rendering
    const componentList = pagesArray.map(p => {
        const style = `btn ${(page === p) ? 'btn-dark' : 'btn-light'}`
        return (
            <li key={p} className="page-item" onClick={() => handlerClick(p)}>
                <span className={style} role="button">{p}</span>
            </li>
        )
    })
    return (
        <nav>
            <ul className="pagination justify-content-center mt-3">
                <li className="page-item" onClick={handlerPreviousPage}>
                    <span className="btn btn-light" role="button">Previous</span>
                </li>
                {componentList}
                <li className="page-item" onClick={handlerNextPage}>
                    <span className="btn btn-light" role="button">Next</span>
                </li>
            </ul>
        </nav>
    );
};

