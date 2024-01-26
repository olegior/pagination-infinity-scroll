import { Page } from "../components/Page";
import { Pagination } from "../components/Pagination";


export const PaginationPage = () => {
  const loader = ({data }) => data.results;

  return (
    <Page Component={Pagination} loader={loader} />
  )
}
