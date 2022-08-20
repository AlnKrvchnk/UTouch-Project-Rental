import { FilterTitle } from '@/app/types/Filter/ReadFilterDto';
import FilterChipsList from '@/components/molecules/FilterChipsList/FilterChipsList';
import { useAppContext } from '@/contexts/StoreContext';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';

const FilterChipsContainer = () => {
    const store = useAppContext();
    const filters = store.filter.selectFilter;
    const [formatFilters, setFormatFilters] = useState<
        { title: string; value: string }[]
    >([]);

    useEffect(() => {
        const tmp = [];
        if (filters.benefits)
            tmp.push({
                title: FilterTitle.benefits,
                value: filters.benefits.join(', '),
            });
        if (filters.decorations)
            tmp.push({
                title: FilterTitle.decorations,
                value: filters.decorations.join(', '),
            });
        // if (filters.deliveryDate)
        // tmp.push({
        //     title: FilterTitle.decorations,
        //     value: filters.decorations.join(', '),
        // });
        if (filters.deliveryDates)
            tmp.push({
                title: FilterTitle.deliveryDates,
                value: filters.deliveryDates
                    .map((item) => `${item.quarter} ${item.year}`)
                    .join(', '),
            });
        if (filters.distanceToTheBeach)
            tmp.push({
                title: FilterTitle.distanceToTheBeach,
                value: `от ${filters.distanceToTheBeach.min.toLocaleString()} км 
                до ${filters.distanceToTheBeach.max.toLocaleString()} км`,
            });
        if (filters.districts)
            tmp.push({
                title: FilterTitle.districts,
                value: filters.districts.join(', '),
            });
        if (filters.facilityTypes)
            tmp.push({
                title: FilterTitle.facilityTypes,
                value: filters.facilityTypes.join(', '),
            });
        if (filters.houseClasses)
            tmp.push({
                title: FilterTitle.houseClasses,
                value: filters.houseClasses.join(', '),
            });
        if (filters.microDistricts)
            tmp.push({
                title: FilterTitle.microDistricts,
                value: filters.microDistricts.join(', '),
            });
        if (filters.paymentOptions)
            tmp.push({
                title: FilterTitle.paymentOptions,
                value: filters.paymentOptions.join(', '),
            });
        if (filters.price)
            tmp.push({
                title: FilterTitle.price,
                value: `от ${filters.price.min.toLocaleString()} руб. 
                до ${filters.price.max.toLocaleString()} руб.`,
            });
        if (filters.pricePerMeter)
            tmp.push({
                title: FilterTitle.pricePerMeter,
                value: `от ${filters.pricePerMeter.min.toLocaleString()} руб. 
                до ${filters.pricePerMeter.max.toLocaleString()} руб.`,
            });
        if (filters.registrations)
            tmp.push({
                title: FilterTitle.registrations,
                value: filters.registrations.join(', '),
            });
        if (filters.square)
            tmp.push({
                title: FilterTitle.square,
                value: `от ${filters.square.min.toLocaleString()} м² 
                до ${filters.square.max.toLocaleString()} м²`,
            });

        setFormatFilters(tmp);
    }, [filters]);

    const removeItems = (key: string) => {
        store.filter.removeFilter(key);
    };
    return <FilterChipsList items={formatFilters} removeItems={removeItems} />;
};
export default observer(FilterChipsContainer);
