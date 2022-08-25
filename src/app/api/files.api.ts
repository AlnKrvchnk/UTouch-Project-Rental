import { files } from './endpoints';
import Api from './index';

export default class FilesApi {
    constructor(private readonly api: Api) {}
    public postImage(file: string): Promise<void> {
        return this.api.post(files.uploadImage(), file);
    }
    public getImage(filename: string): Promise<string> {
        return this.api.get(files.getImage(filename));
    }
    public postDocument(file: string): Promise<void> {
        return this.api.post(files.uploadDocument(), file);
    }
    public getDocument(filename: string): Promise<string> {
        return this.api.get(files.getDocument(filename));
    }
}
