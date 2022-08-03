import { action, makeAutoObservable, observable } from 'mobx';
import {} from 'mobx-react';
import { api } from '../api';
import { Facility } from '../types/Facility/Facility';

class TodoStore {
    @observable facilities: Facility[] = [];
    @observable isLoad = false;
    constructor() {
        makeAutoObservable(this);
    }
    @action
    public async getAll() {
        this.isLoad = false;
        this.facilities = await api.facilities.getAll();
        this.isLoad = true;
    }
}

export default TodoStore;
