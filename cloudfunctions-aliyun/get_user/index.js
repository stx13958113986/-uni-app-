'use strict';
const db = uniCloud.database()

exports.main = async (event, context) => {
	const {
		user_id = ''
	} = event
	if (!user_id) {
		return {
			code: 201,
			msg: '获取用户信息失败'
		}
	}
	let userinfo = await db.collection('user').doc(user_id).get()
	if(!userinfo.data[0]){
		userinfo= await db.collection('user').where({openid:user_id}).get()
	}
	return {
		code: 200,
		msg: '数据返回成功',
		data: userinfo.data[0]
	}
};
