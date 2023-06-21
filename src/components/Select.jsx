

const Select = ({fun}) =>{
    return(
        <select id="colors" onChange={fun}>
            <option disabled selected> Choose a color</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
            <option value="Blue">Blue</option>
        </select>
    )

}

export default Select;