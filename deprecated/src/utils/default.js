export function copyDeep (target) {

    if (typeof target !== 'object' || typeof target === 'object' && !target)
        return target

    if (Array.isArray(target)) {

        return target.map(value => copyDeep(value))
    } else {
        const result = {}

        Object.entries(target).forEach(([name, value]) => result[name] = copyDeep(value))

        return result
    }
}
