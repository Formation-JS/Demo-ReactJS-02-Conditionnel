import style from './person.module.css';
import classNames from 'classnames';

const Person = ({ name, hobby }) => {

    const styleName = classNames({
        bold: true,
        [style.colorName]: name !== Person.defaultProps?.name
    });

    return (
        <>
            <h3>Hello <span className={styleName}>{name}</span></h3>
            {hobby && (
                <p>Votre loisir est : {hobby}</p>
            )}
        </>
    );
};

Person.defaultProps = {
    name: 'Inconnu'
};

export default Person;