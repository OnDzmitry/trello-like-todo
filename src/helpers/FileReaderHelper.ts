import PromiseFileReader from 'promise-file-reader';

export class FileReader {
    static async readAsDataUrl(file) {
        return PromiseFileReader.readAsDataUrl(file.file);
    }
}