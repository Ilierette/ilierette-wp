import Axios from 'axios'

export default function WordpressService() {
    const axios = Axios.create({
        baseURL: 'http://a.ilierette.com/wp-json',
        timeout: 30000
    })
    return {
        getPosts: () => {
            return axios.get('/wp/v2/posts')
        },
        getPostsRevisions: (id: string) => {
            return axios.get('/wp/v2/posts/' + id + '/revisions')
        },
        getCategories: () => {
            return axios.get('/wp/v2/categories')
        },
        getTags: () => {
            return axios.get('/wp/v2/tags')
        },
        getPages: () => {
            return axios.get('/wp/v2/pages')
        },
        getPagesRevisions: (id: string) => {
            return axios.get('/wp/v2/pages/' + id + '/revisions')
        },
        getComments: () => {
            return axios.get('/wp/v2/comments')
        },
        getTaxonomies: () => {
            return axios.get('/wp/v2/taxonomies')
        },
        getMedia: () => {
            return axios.get('/wp/v2/media')
        },
        getUsers: () => {
            return axios.get('/wp/v2/users')
        },
        getPostTypes: () => {
            return axios.get('/wp/v2/types')
        },
        getPostStatuses: () => {
            return axios.get('/wp/v2/statuses')
        },
        getSettings: () => {
            return axios.get('/wp/v2/settings')
        },
        getThemes: () => {
            return axios.get('/wp/v2/themes')
        },
        getSearch: () => {
            return axios.get('/wp/v2/search')
        },
        getBlockTypes: () => {
            return axios.get('/wp/v2/block-types')
        },
        getBlocks: () => {
            return axios.get('/wp/v2/blocks')
        },
        getBlockRev: (id: string) => {
            return axios.get('/wp/v2/blocks/' + id + '/autosaves/')
        },
        getBlockRenderer: () => {
            return axios.get('/wp/v2/block-renderer')
        },
        getBlockDirectory: () => {
            return axios.get('/wp/v2/block-directory/search')
        },
        getPlugins: () => {
            return axios.get('/wp/v2/plugins')
        }
    }
}
