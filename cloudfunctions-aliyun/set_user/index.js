const db = uniCloud.database()

exports.main = async (event, context) => {
    let {
        code,
        avatar,
        author_name
    } = event
    const appid = 'wx448e4031ba5c7731' //appid
    const secret = 'bd26040e53ae8b17ef5a09137da4d277' //secret
    const loginUrl = 'https://api.weixin.qq.com/sns/jscode2session'
    let res = await uniCloud.httpclient.request(loginUrl, {
        data: {
            appid: appid,
            secret: secret,
            js_code: code,
            grant_type: 'authorization_code'
        },
        dataType: 'json'
    })

    const user = await db.collection('user').where({openid:res.data.openid}).get()
    if (user.affectedDocs === 0) {
        await db.collection('user').add({
            openid: res.data.openid,
            avatar: avatar,
            author_name: author_name,
            status: "normal",
            fans_count: 0,
            professional: '',
            explain: '',
            gender: "",
            follow_count: 0,
            integral_count: "",
            article_likes_ids: [],
            author_likes_ids: [],
            thumbs_up_article_ids: [],
            article_ids: []
        })
    }
    return {
        code: 200,
        msg: '新增成功',
        data: res.data.openid
    }
};
