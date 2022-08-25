import { RangeFilter } from '@/app/types/Filter/RangeFilter';
import { FilterTitle, ReadFilterDto } from '@/app/types/Filter/ReadFilterDto';
import FilterItem from '@components/molecules/FilterItem/FilterItem';
import PseudoFilterList from '@components/organisms/PseudoFilterList/PseudoFilterList';
interface Props {
    filter?: ReadFilterDto;
    selectFilter: ReadFilterDto;
    setFilterValue: (key: string, value: string | RangeFilter) => void;
}
const FilterList = ({ filter, setFilterValue, selectFilter }: Props) => {
    return (
        <div>
            {filter ? (
                <>
                    {filter.districts && (
                        <FilterItem
                            title={FilterTitle.districts}
                            isCheckbox
                            value={filter.districts}
                            selectValue={selectFilter.districts}
                            onChange={(value) => {
                                setFilterValue(FilterTitle.districts, value);
                            }}
                        />
                    )}
                    {filter.microDistricts && (
                        <FilterItem
                            title={FilterTitle.microDistricts}
                            isCheckbox
                            value={filter.microDistricts}
                            selectValue={selectFilter.microDistricts}
                            onChange={(value) => {
                                setFilterValue(
                                    FilterTitle.microDistricts,
                                    value
                                );
                            }}
                        />
                    )}
                    {filter.facilityTypes && (
                        <FilterItem
                            title={FilterTitle.facilityTypes}
                            isCheckbox
                            value={filter.facilityTypes}
                            selectValue={selectFilter.facilityTypes}
                            onChange={(value) => {
                                setFilterValue(
                                    FilterTitle.facilityTypes,
                                    value
                                );
                            }}
                        />
                    )}
                    {filter.price && (
                        <FilterItem
                            title={FilterTitle.price}
                            isSlider
                            label={'руб.'}
                            value={filter.price}
                            selectValue={selectFilter.price}
                            onChange={(value) => {
                                setFilterValue(FilterTitle.price, value);
                            }}
                        />
                    )}
                    {filter.registrations && (
                        <FilterItem
                            title={FilterTitle.registrations}
                            isCheckbox
                            value={filter.registrations}
                            selectValue={selectFilter.registrations}
                            onChange={(value) => {
                                setFilterValue(
                                    FilterTitle.registrations,
                                    value
                                );
                            }}
                        />
                    )}
                    {filter.benefits && (
                        <FilterItem
                            title={FilterTitle.benefits}
                            isCheckbox
                            value={filter.benefits}
                            selectValue={selectFilter.benefits}
                            onChange={(value) => {
                                setFilterValue(FilterTitle.benefits, value);
                            }}
                        />
                    )}
                    {filter.square && (
                        <FilterItem
                            title={FilterTitle.square}
                            isSlider
                            label={'м²'}
                            value={filter.square}
                            selectValue={selectFilter.square}
                            onChange={(value) => {
                                setFilterValue(FilterTitle.square, value);
                            }}
                        />
                    )}
                    {filter.deliveryDates && (
                        <FilterItem
                            title={FilterTitle.deliveryDates}
                            isCheckbox
                            value={filter.deliveryDates.map(
                                (item) => `${item.quarter} ${item.year}`
                            )}
                            selectValue={
                                selectFilter.deliveryDates
                                    ? selectFilter.deliveryDates.map(
                                          (item) =>
                                              `${item.quarter} ${item.year}`
                                      )
                                    : undefined
                            }
                            onChange={(value) => {
                                setFilterValue(
                                    FilterTitle.deliveryDates,
                                    value
                                );
                            }}
                        />
                    )}
                    {filter.paymentOptions && (
                        <FilterItem
                            title={FilterTitle.paymentOptions}
                            isCheckbox
                            value={filter.paymentOptions}
                            selectValue={selectFilter.paymentOptions}
                            onChange={(value) => {
                                setFilterValue(
                                    FilterTitle.paymentOptions,
                                    value
                                );
                            }}
                        />
                    )}
                    {filter.decorations && (
                        <FilterItem
                            title={FilterTitle.decorations}
                            isCheckbox
                            value={filter.decorations}
                            selectValue={selectFilter.decorations}
                            onChange={(value) => {
                                setFilterValue(FilterTitle.decorations, value);
                            }}
                        />
                    )}
                    {filter.distanceToTheBeach && (
                        <FilterItem
                            title={FilterTitle.distanceToTheBeach}
                            isSlider
                            label={'км.'}
                            value={filter.distanceToTheBeach}
                            selectValue={selectFilter.distanceToTheBeach}
                            onChange={(value) => {
                                setFilterValue(
                                    FilterTitle.distanceToTheBeach,
                                    value
                                );
                            }}
                        />
                    )}
                    {filter.houseClasses && (
                        <FilterItem
                            title={FilterTitle.houseClasses}
                            isCheckbox
                            value={filter.houseClasses}
                            selectValue={selectFilter.houseClasses}
                            onChange={(value) => {
                                setFilterValue(FilterTitle.houseClasses, value);
                            }}
                        />
                    )}
                </>
            ) : (
                <PseudoFilterList />
            )}
        </div>
    );
};
export default FilterList;
