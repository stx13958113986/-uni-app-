<script>
	export default {
		onLaunch: function() {
			//请求接口，异步
			this.$api.get_user({
				user_id: '5f3e746aa406e900014864f6'
			}).then(res => {
				const {
					data
				} = res

				this.$store.dispatch('set_userinfo',data)
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import 'components/feng-parse/parse.css';
</style>
