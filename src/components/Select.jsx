

const Select = ({fun , val1 , val2 , val3 , val4}) =>{
    return(
        <select id="colors" onChange={fun}>
            <option disabled selected> Choose a color</option>
            <option value={val1}>{val1}</option>
            <option value={val2}>{val2}</option>
            <option value={val3}>{val3}</option>
            <option value={val4}>{val4}</option>
        </select>
    )

}

export default Select;