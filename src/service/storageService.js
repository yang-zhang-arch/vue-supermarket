// 本地缓存
const PREFIX = 'webfront_'

// 用户模块
const USER_PREFIX = `${PREFIX}USER_`
const USER_TOKEN = `${USER_PREFIX}TOKEN_`
const USER_INFO = `${PREFIX}INFO_`

// 访问方法
const set = (key, data) => {
    localStorage.setItem(key, data)
}

const get = (key) => {
    localStorage.getItem(key)
}

export default {
    set,
    get,
    USER_INFO,
    USER_TOKEN
}