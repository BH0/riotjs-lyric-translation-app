module.exports = {
    sort: (array, property = undefined) => {
        const sorted = array.sort((a, b) => {
            if (property != undefined) { 
                return a[property] === b[property] ? 0 : a[property] < b[property] ? -1 : 1; 
            } else {
                console.log(property); 
                return a === b ? 0 : a < b ? -1 : 1; 
            }
        }); 
        return sorted; 
    }, 
    renameKeys: (keysMap, obj) => Object
        .keys(obj)
        .reduce((acc, key) => ({
            ...acc,
            ...{ [keysMap[key] || key]: obj[key] }
        }), {}) 
} 
