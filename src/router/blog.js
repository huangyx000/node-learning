
const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');


const handleBlogRouter = (req, res) => {

    const method = req.method;
    const path = req.path;
    const query = req.query;
    const id = query.id;

    if (method === 'GET' && path === '/api/blog/list') {
        const author = query.author || '';
        const keyword = query.keyword || '';

        const listData = getList(author, keyword);

        return new SuccessModel(listData);
    }

    if (method === 'GET' && path === '/api/blog/detail') {

        const detailData = getDetail(id);

        return new SuccessModel(detailData);
    }

    if (method === 'POST' && path === '/api/blog/new') {
        const newData = newBlog(req.body);

        return new SuccessModel(newData);
    }

    if (method === 'POST' && path === '/api/blog/update') {

        const result = updateBlog(id, req.body);

        return result ? new SuccessModel() : new ErrorModel('更新失败');
    }

    if (method === 'POST' && path === '/api/blog/delete') {
        const result = deleteBlog(id);

        return result ? new SuccessModel() : new ErrorModel('删除失败');
    }
}

module.exports = handleBlogRouter;