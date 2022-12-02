const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1546610491112,
            author: 'Jack'
        },
        {
            id: 1,
            title: '标题B',
            content: '内容B',
            createTime: 1546610524373,
            author: 'Jack'
        }
    ];
}

const getDetail = (id) => {
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: 1546610491112,
        author: 'Jack'
    }
}

const newBlog = (blogData) => {
    return {
        id: 3
    }
}

const updateBlog = (id, blogData) => {
    return true;
}

const deleteBlog = (id) => {
    return true;
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}