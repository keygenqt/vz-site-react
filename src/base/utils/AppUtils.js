import {ConstantConf} from "../../ConstantConf";

/**
 * Utils
 */
export const AppUtils = {
    // check is image
    isImage: (fileMime) => {
        return fileMime.includes('png')
            || fileMime.includes('jpg')
            || fileMime.includes('jpeg')
    },
    // create file link
    getUrl: (fileName) => {
        return `${ConstantConf.apiPath}/api/ps/file/${fileName}`
    },
    // create file link
    getUrlPretty: (originalFileName) => {
        return `${ConstantConf.apiPath}/api/ps/file/${originalFileName}`
    },
    // create file link
    getListLocalization: (obj) => {
        let list = []
        Object.keys(obj).forEach(key => {
            if (typeof obj[key] === 'string' || obj[key] instanceof String) {
                list.push(obj[key])
            } else {
                list = list.concat(AppUtils.getListLocalization(obj[key]))
            }
        });
        return list
    },
};