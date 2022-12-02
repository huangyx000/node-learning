
const { getList, getDetail } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');


const handleBlogRouter = (req, res) => {

    const method = req.method;
    const path = req.path;
    const query = req.query;

    if (method === 'GET' && path === '/api/blog/list') {
        const author = query.author || '';
        const keyword = query.keyword || '';

        const listData = getList(author, keyword);

        return new SuccessModel(listData);
    }

    if (method === 'GET' && path === '/api/blog/detail') {

        const id = query.id;
        const detailData = getDetail(id);

        return new SuccessModel(detailData);
    }

    if (method === 'POST' && path === '/api/blog/new') {
        return {
            msg: '这是新建博客的接口'
        }
    }

    if (method === 'POST' && path === '/api/blog/update') {
        return {
            msg: '这是更新博客的接口'
        }
    }

    if (method === 'POST' && path === '/api/blog/delete') {
        return {
            msg: '这是删除博客的接口'
        }
    }
}

module.exports = handleBlogRouter;