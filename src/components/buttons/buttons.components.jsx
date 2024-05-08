import './buttons.styles.scss'

const BUTTON_TYPE_CLASSES ={
    google: 'google-sign-in',
    inverted: 'inverted'
}

export const ButtonVersionOne = ({ children, buttonType, ...otherProps }) => {
    return(
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps} >
            {children}
        </button>
    )
}