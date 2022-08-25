import AuthStore from './auth.store';
import FacilityStore from './facility.store';
import FavoriteFacilityStore from './favoriteFacility.store';
import FilterStore from './filter.store';

export default class AppStore {
    facility = new FacilityStore();
    auth = new AuthStore();
    filter = new FilterStore();
    favoriteFacility = new FavoriteFacilityStore();
}
