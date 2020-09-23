import { observable } from "mobx";

class GlobalStore {
    @observable menu = null;
    @observable loading = true;

}

const global = new GlobalStore();
export default global;