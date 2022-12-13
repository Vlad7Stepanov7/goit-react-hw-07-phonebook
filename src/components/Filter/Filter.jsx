
import { InputFilter, NameInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filter/filterSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const filterValue = useSelector(state => state.filter.filter);

    return (
        <NameInput>
            Find contacts by name
            <InputFilter type="text" value={filterValue} onChange={e => dispatch(updateFilter(e.target.value))} />
        </NameInput>
    );
}

export default Filter;