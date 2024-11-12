const CategoryPagination = () => {
  return (
    <div className="flex justify-center">
      <nav className="flex items-center gap-x-1" aria-label="Pagination">
        <button
          type="button"
          className="border border-solid border-[#424448] min-h-[64px] min-w-[64px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-[#BCBCBC] hover:bg-[#424448] focus:outline-none focus:bg-[#424448] disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Previous"
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>
        <div className="flex items-center gap-x-1">
          <button
            type="button"
            className="min-h-[64px] min-w-[64px] flex justify-center items-center text-[#BCBCBC] hover:bg-[#424448] py-2 px-3 text-[18px] rounded-lg focus:outline-none focus:bg-[#424448] disabled:opacity-50 disabled:pointer-events-none"
            aria-current="page"
          >
            1
          </button>
          <button
            type="button"
            className="min-h-[64px] min-w-[64px] flex justify-center items-center text-[#BCBCBC] hover:bg-[#424448] py-2 px-3 text-[18px] rounded-lg focus:outline-none focus:bg-[#424448] disabled:opacity-50 disabled:pointer-events-none"
          >
            2
          </button>
          <button
            type="button"
            className="min-h-[64px] min-w-[64px] flex justify-center items-center text-[#BCBCBC] hover:bg-[#424448]  py-2 px-3 text-[18px] rounded-lg focus:outline-none focus:bg-[#424448] disabled:opacity-50 disabled:pointer-events-none"
          >
            3
          </button>
        </div>
        <button
          type="button"
          className="border border-solid border-[#424448] min-h-[64px] min-w-[64px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-[18px] rounded-lg text-[#BCBCBC] hover:bg-[#424448] focus:outline-none focus:bg-[#424448] disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Next"
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default CategoryPagination;
