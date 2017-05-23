$.jBox = {
	dialog: function(id, msg, time) {
		var dialog = "<div class='jbox_vessel' id=" + id + ">";
		dialog += msg;
		dialog += "</div>";
		$(document.body).append(dialog);
		if(typeof(time) === 'undefined') {
			time = 2000;
		}
		// 弹出层样式
		var screen = $(document.body).width();
		var art_width = screen * 0.4 + "px";
		var art_left = screen * 0.3 + "px";
		$("#" + id).css("left", art_left).css("width", art_width).show();
		// 定时关闭
		$.jBox.close(time);
	},
	/******自动消失提示******/
	tip: function(tip, e) {
		// 先移除其他的弹窗
		$(".jbox_vessel").remove();
		var id = "login_msg";
		$.jBox.dialog(id, tip);
	},
	/******不自动消失数据加载等待提示******/
	wait: function(tip, title) {
		if(!title || title == "undefined") {
			title = "数据加载中";
		}
		art.dialog({
			lock: true,
			icon: 'loading',
			title: title,
			content: tip,
			cancel: false
		});

	},
	/******自动消失数据保存成功提示******/
	success: function(tip) {
		if(!tip)
			tip = "保存成功"
		var list = art.dialog.list;
		for(var i in list) {
			list[i].close();
		};
		art.dialog({
			padding: "70px 25px",
			time: 1.5,
			icon: 'success',
			title: '成功',
			cancel: false,
			lock: true,
			content: tip
		});
	},
	/******自动消失数据保存失败提示******/
	error: function(tip, title) {
		if(!title) {
			title = "错误";
		}
		if(!tip)
			tip = "保存失败，请重试"
		var list = art.dialog.list;
		for(var i in list) {
			list[i].close();
		};
		art.dialog({
			padding: "70px 25px",
			time: 1.5,
			icon: 'error',
			title: title,
			cancel: false,
			lock: true,
			content: tip
		});
	},
	/******不自动消失提示******/
	show: function(tip, icon, wi, e) {
		var list = art.dialog.list;
		for(var i in list) {
			list[i].close();
		};
		if(tip.length < 100 && !wi) {
			wi = 250;
		}
		art.dialog({
			lock: true,
			icon: icon,
			width: wi,
			content: tip,
			okValue: '确定',
			ok: e
		});
	},
	/******loading******/
	loading: function(tip) {
		// 先移除其他的弹窗
		$(".jbox_vessel").remove();
		var id = "loading_msg";
		$.jBox.dialog(id, tip, 10000000);
	},
	/******提示******/
	alert: function(tip, title) {
		art.dialog({
			lock: true,
			icon: 'warning',
			title: title,
			content: tip,
			okValue: '确定',
			ok: function() {}
		});
	},
	/******弹窗确认******/
	confirm: function(tip, title, obj) {
		art.dialog({
			id: 'DLGIDCX',
			lock: true,
			icon: 'warning',
			content: tip,
			okValue: '确定',
			ok: function() {
				obj();
			},
			cancelValue: '返回',
			cancel: true
		});
	},
	/******关闭弹窗******/
	close: function(time) {
		var fn = function() {
			var list = $(".jbox_vessel");
			list.remove();
		};
		setTimeout(fn, time);
	},
	tips: function(tip, icon, e) {
		var list = art.dialog.list;
		for(var i in list) {
			list[i].close();
		};
		art.dialog({
			padding: "70px 25px",
			time: 2,
			lock: true,
			icon: icon,
			title: "提示",
			content: tip,
			cancelVal: '确定',
			cancel: e
		});
		return false;
	},
	/******loading******/
	loadings: function(tip, title) {
		if(!title || title == "undefined") {
			title = "数据加载中";
		}
		art.dialog({
			lock: true,
			icon: 'loading',
			title: title,
			content: tip,
			cancelValue: '取消',
			cancel: true
		});
	},
	/********** artdialog 移除弹窗 ************/
	remove: function(id) {
		if(id) {
			art.dialog({
				id: id
			}).close();
			return;
		}
		var list = art.dialog.list;
		for(var i in list) {
			list[i].close();
		};
	}
};











