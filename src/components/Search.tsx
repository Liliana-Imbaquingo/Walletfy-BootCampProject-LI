import { TextInput } from '@mantine/core';

export type SearchInputProps = {
    value: string
    onChange: (v: string) => void
}

const SearchInput: React.FC<SearchInputProps> = (props) => {

    return (
        <div>
            {props.value}
            <TextInput
                label="Search"
                placeholder="Month"
                onChange={(e) =>
                    props.onChange(e.target.value)}
                value={props.value}
            />
        </div>
    );
}

export default SearchInput