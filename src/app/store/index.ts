import AuthStore from './auth.store';
import FacilityStore from './facility.store';

export default class AppStore {
    facility = new FacilityStore();
    auth = new AuthStore();
}
