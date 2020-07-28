import request from "@/utils/request";

export default {
    getBlogList(pageSearchPram) {
        return request({
            url: "/blog/list",
            method: "POST",
            data: pageSearchPram
        })
    },

    deleteBlogById(id) {
        return request({
            url: `/blog/${id}`,
            method: "DELETE"
        })
    },

    addBlog(blogBo) {
        return request({
            url: "/blog/",
            method: "POST",
            data: blogBo
        })
    }
}
