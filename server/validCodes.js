class validCodes {
    constructor() {
        this.validCodes = Set < String > ("epic123", "sauceDawg321");
    }

    isCodeValid(code) {
        return {
            'validCode': code in this.validCodes,
        };
    }

    getValidCodes() {
        return this.validCodes;
    }
}
