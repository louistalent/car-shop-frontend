
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

const CategoryPagination = ({ itemsPerPage, items }) => {

    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    const nextLabelComponent = () => {
        return (
            <button className=' text-red-400 mt-2'>
                <img width={'30px'} height={'20px'} src='/images/right-arrow.svg' alt=''/>
            </button>
        )
    }
    const previousLabelComponent = () => {
        return (
            <button className=' text-red-400 mt-2'>
                <img width={'30px'} height={'20px'} src='/images/left-arrow.svg' alt=''/>
            </button>
        )
    }
    return (
        <div className="flex justify-center w-full">
            <nav className="flex items-center text-white w-full">
                <ReactPaginate
                    breakLabel="..."
                    className='flex w-full m-auto justify-center gap-8 text-4xl'
                    nextLabel={nextLabelComponent()}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel={previousLabelComponent()}
                    renderOnZeroPageCount={null}
                />
            </nav>
        </div>
    );
};

export default CategoryPagination;
