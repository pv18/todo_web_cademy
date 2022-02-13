import React, {FC} from 'react';

interface IPaginationPropsType {
    pagesArray: number[]
}

export const Pagination: FC<IPaginationPropsType> = (
    {
        pagesArray
    }
) => {
    // Components before rendering
    const componentList = pagesArray.map(page=>{
        return <li key={page}>

        </li>
    })
    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link" href="#" aria-disabled="true">Previous</a>
                </li>

                {/*<li className="page-item"><a className="page-link" href="#">1</a></li>*/}
                {/*<li className="page-item active" aria-current="page">*/}
                {/*    <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>*/}
                {/*</li>*/}
                {/*<li className="page-item"><a className="page-link" href="#">3</a></li>*/}
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    );
};

