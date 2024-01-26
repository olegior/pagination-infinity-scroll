import { InfiniteScroll } from "../components/InfiniteScroll"
import { Page } from "../components/Page"

export const InfinitePage = () => {

  const loader = ({ data = [], prev }) => {
    return [...prev, ...data.results]
  }

  return (
    <Page Component={InfiniteScroll} loader={loader} />
  )
}
