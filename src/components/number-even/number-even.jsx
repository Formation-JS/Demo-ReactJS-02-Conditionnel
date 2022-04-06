const NumberEven = ({ number }) => {
    if (number === '' || isNaN(number)) {
        return (
            <p>Le nombre est erroné :o</p>
        );
    }

    const result = (number % 2 === 0) ? 'paire' : 'impaire';
    return (
        <p>Le nombre {number} est {result}</p>
    );
};

export default NumberEven;