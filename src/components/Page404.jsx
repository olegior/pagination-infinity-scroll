import { Link } from 'react-router-dom'
export const Page404 = () => {
    return (
        <div className='error-page'>
            <h1 className='error-page__text'>Oops...</h1>
            <button className='error-page_button button'>
                <Link to='/'>to home page</Link>
            </button>
        </div>
    )
}
