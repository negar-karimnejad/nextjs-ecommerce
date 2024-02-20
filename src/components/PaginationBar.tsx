import Link from "next/link";

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
}

function PaginationBar({ currentPage, totalPages }: PaginationBarProps) {
  const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 10));
  const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9));

  const numberedPageItems: JSX.Element[] = [];

  for (let page = minPage; page < maxPage; page++) {
    numberedPageItems.push(
      <Link
        href={`?page=${page}`}
        key={page}
        className={`join-item btn ${
          currentPage === page ? "btn-active pointer-events-none" : ""
        }`}
      >
        {page}
      </Link>
    );
  }
  return (
    <>
      <div className="join my-5 hidden sm:block">{numberedPageItems}</div>
      <div className="join my-5 sm:hidden block">
        {currentPage > 1 && (
          <Link className="join-item btn" href={`?page=${currentPage - 1}`}>
            «
          </Link>
        )}
        <button className="join-item btn pointer-events-none">
          Page {currentPage}
        </button>
        {currentPage < totalPages && (
          <Link className="join-item btn" href={`?page=${currentPage + 1}`}>
            »
          </Link>
        )}
      </div>
    </>
  );
}

export default PaginationBar;

// <div className="join">
//   <button className="join-item btn">«</button>
//   <button className="join-item btn">Page 22</button>
//   <button className="join-item btn">»</button>
// </div>;
