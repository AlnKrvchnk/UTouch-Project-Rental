import { RangeFilter } from '@/app/types/Filter/RangeFilter';
import { FilterTitle, ReadFilterDto } from '@/app/types/Filter/ReadFilterDto';
import CheckBox from '@/components/atoms/CheckBox/CheckBox';
// eslint-disable-next-line max-len
import SliderTextFieldContainer from '@/components/containers/SliderTextFieldContainer/SliderTextFieldContainer';
import FilterItem from '@components/molecules/FilterItem/FilterItem';
interface Props {
    items: ReadFilterDto;
    selectFilter: ReadFilterDto;
    setFilterItem: (key: string, value: string | RangeFilter) => void;
}
const FilterList = ({ items, setFilterItem, selectFilter }: Props) => {
    return (
        <div>
            {Object.keys(items).map((key) => (
                <FilterItem
                    key={`filter-key${key}`}
                    id={`${key}`}
                    //@ts-ignore
                    title={FilterTitle[key]}
                    //@ts-ignore
                    content={getComponent(key, items[key])}
                />
            ))}
        </div>
    );
    function s(key: string, item: string) {
        //@ts-ignore
        if (key in selectFilter)
            console.log(
                //@ts-ignore
                selectFilter[key].indexOf(item),
                item,
                //@ts-ignore
                selectFilter[key]
            );
        //@ts-ignore
        return key in selectFilter && item in selectFilter[key];
    }
    function getComponent(key: string, content: Object) {
        if (content instanceof Array) {
            return (
                <div>
                    {Object.values(content).map((item) =>
                        item instanceof Object ? (
                            <CheckBox
                                key={`${key}-${item}`}
                                title={Object.values(item).join(' ')}
                                onChange={() => setFilterItem(key, item)}
                                checked={
                                    key in selectFilter &&
                                    //@ts-ignore
                                    item in selectFilter[key]
                                }
                            />
                        ) : (
                            <CheckBox
                                key={`${key}-${item}`}
                                title={item}
                                onChange={() => setFilterItem(key, item)}
                                checked={
                                    key in selectFilter &&
                                    //@ts-ignore
                                    selectFilter[key].indexOf(item) !== -1
                                }
                            />
                        )
                    )}
                </div>
            );
        }
        return (
            <SliderTextFieldContainer
                range={content as RangeFilter}
                setFilterValue={(value) => setFilterItem(key, value)}
            />
        );
    }
};
export default FilterList;
