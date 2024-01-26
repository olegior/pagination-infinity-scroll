import { useEffect, useRef, useState } from "react"
import { Bage } from "./Bage";
import { Spinner } from "./Spinner";

export const InfiniteScroll = ({ page, count, setPage, limit }) => {

    const [showBage, setShowBage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        setShowBage(true);
        const timeout = setTimeout(() => {
            setShowBage(false);
            setIsLoading(false);
        }, 2000);
        return () => {
            clearTimeout(timeout);
        }
    }, [page])

    useEffect(() => {
        const observer = new IntersectionObserver((e) => {
            if (!isLoading && e[0].isIntersecting && page <= count) {
                setIsLoading(true)
                setPage(page => page + 1)
            }
        },
            {
                threshold: 1,
            });

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        }
    });

    return (
        <>
            {showBage && <Bage limit={limit} />}
            {isLoading && <Spinner size={100} />}
            <div style={{ marginTop: 50, height: 10, width: '100%' }} ref={ref}></div>
        </>
    )
}
