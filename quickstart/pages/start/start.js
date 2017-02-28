Page({
	data: {
		text: '测试弹窗'
	},
	onLoad: function(){
		wx.showNavigationBarLoading()
		setTimeout(function(){
			wx.hideNavigationBarLoading()
		}, 1000)
	},
	onPullDownRefresh: function(){
		console.log("refresh")
		this.onLoad()
		wx.stopPullDownRefresh()
	},
	popup: function(event){
		switch (parseInt(event.target.dataset.i)) {
			case 0:
				wx.showToast({
					title: '测试弹窗',
					icon: 'success',
					mask: true,
					duration: 2000
				})
				break;
			case 1:
				wx.showModal({
					title: '提示',
					content: '这是一个模态弹窗',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定')
						}else {
							console.log('用户点击取消')
						}
					}
				})
				break;
			case 2:
				wx.showActionSheet({
					itemList: ['A', 'B', 'C'],
					success: function(res) {
						console.log(res.tapIndex)
					},
					fail: function(res) {
						console.log(res)
					}
				})
				break;
			default:
				console.error("switch error")
				break;
		}
	}
})