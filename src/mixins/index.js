export default {
    methods: {
        CDN(path) {
            return process.env.VUE_APP_CDN_URL + path;
        }
    }
};