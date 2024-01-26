import '../styles/Spinner.css'

export const Spinner = ({ size = 200 }) => {
    return (
        <div className='spinner rotating'
            style={{
                minWidth: size,
                minHeight: size,
                backgroundSize: `${size}px ${size}px`,
            }}>
        </div>
    )
}
