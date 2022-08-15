import { FilterTitle, ReadFilterDto } from '@/app/types/Filter/ReadFilterDto';
import CheckBox from '@/components/atoms/CheckBox/CheckBox';
import FilterItem from '@components/molecules/FilterItem/FilterItem';
import SliderTextField from '@components/molecules/SliderTextField/SliderTextField';
interface Props {
    items: { title: FilterTitle; content: ReadFilterDto }[];
    setItems: (content: ReadFilterDto) => void;
}
const FilterList = ({ items }: Props) => {
    const getComponent = (key: string, content: ReadFilterDto): JSX.Element => {
        switch (typeof content) {
            case 'object':
                return (
                    <div>
                        {Object.values(content).map((item, index) => (
                            <div key={`${key}-${index}`}>
                                <CheckBox title={item} onChange={() => {}} />
                            </div>
                        ))}
                    </div>
                );
            case 'number':
                return (
                    <SliderTextField
                        minDistance={10}
                        value={[10, 20]}
                        setValue={() => {}}
                        label={'price'}
                    />
                );
            default:
                return <span>Default</span>;
        }
    };

    return (
        <div>
            {items.map((item, index) => (
                <FilterItem
                    key={`filter-${index}-${item}`}
                    id={`${index}`}
                    title={item.title}
                    onChange={(e) => {
                        console.log(e);
                    }}
                    content={getComponent(
                        `filter-${index}-${item}`,
                        item.content
                    )}
                />
            ))}
        </div>
    );
};
export default FilterList;
