import storageService from '@/service/storageService'

const UserModule = {
    namespaced: true,
    state: {
        token: storageService.get(storageService.USER_TOKEN),
        userInfo: JSON.parse(storageService.get(storageService.USER_INFO))
    },
    mutations: {
        SET_TOKEN(state, token) {
            storageService.set(storageService.USER_TOKEN, token)
            state.token = token
        },
        SET_USERINFO(state, info) {
            storageService.set(storageService.USER_INFO, JSON.stringify(info))
            state.userInfo = info
        }

    },
    actions: {
        // 将API请求迁移至此处
    }

}

export default UserModule