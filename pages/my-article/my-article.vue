<template>
	<view>
		<uni-load-more v-if="lists.length===0" status="loading"></uni-load-more>
		<list-card :item="item" v-for="item in lists" :key="item.id"></list-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists:[]
			}
		},
		onLoad() {
			this.getMyarticle()
		},
		methods: {
			getMyarticle(){
				this.$api.get_myarticle({user_id:this.$store.state.userinfo._id}).then(res=>{
					const{data}=res
					this.lists=data
				})
			}
		}
	}
</script>

<style>

</style>
