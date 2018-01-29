import '@/lb/easyui/themes/default/easyui.css'
import '@/lb/easyui/themes/icon.css'
import '@/lb/easyui/jquery.easyui.min.js'

import api from '@/api/api.js'
import _ from '@/lb/_y.js'
import '@/lb/_y.css'



let CreateContent = (url) => {
    var strHtml = '<iframe src="' + url + '" scrolling="no" frameborder="0" fit="true" style="display: inherit;height:100%;width:100%;min-height:99%;"></iframe>';
    return strHtml;
}

let bindEvent = () => {
    $(".btn_menu").click(function () {
        // 添加标记颜色
        $(".daohan_li").css('background',"transparent");
        $(this).parent().css('background','linear-gradient(to bottom,#EFF5FF 0,#E0ECFF 100%)');
        
        var title = $(this).text();
        var url = $(this).attr("url");
        var isSelect = $("#container").tabs('exists', title);
        if (isSelect) {
            $("#container").tabs('select', title);
            return;
        }
        $("#container").tabs('add', {
            title: title,
            content: CreateContent(url),
            closable: true
        });
    });
    
}

let urlData = {
			"贷款申请":"app/mobile.html",
		    "全部贷款":"app/mobile2.html",
		    "法院执行":'app/mobile3.html',
		    "待电审":'app/auth.html',
		    "待面审":'app/bumen.html',
		    "还款中":'',
		    "未批款":'',
		    "部门管理":'',
		    "角色管理":'',
		    "权限管理":'',
		    "权限分配":'',
		    "用户管理":'',
		    "渠道管理":'',
		    "金额统计":'',
		    "周期表":'',
		    "城市管理":'',
		    "报销记录":'',
		    "我的工资":'',
		    "基本资料":'',
		    "详细资料":'',
		    "历史金额":'',
		    "导流数据":'',
		    "数据报表":'',
		    "个人工资":'',
		}

let init = () => {
	

        var url=api.head+"/permission/findMenuPermissionByUserId";
        $.ajax({
            async: false,
            type:"POST",
            url: url,
            data : {userId:1},
            success: function(resp){
                var html="";
                var data=resp.data;
                
                if(data!=undefined){
                    data.forEach(function (item){
                        var child_html = '';
                        var child=item.children;
                        var jiekuan_count = 0;
                        child.forEach(function (data) {
                        	if (data.name) {
	                            child_html+='<li class="daohan_li">\
	                            <a href="javascript:;" class="btn_menu" vid="'+jiekuan_count+'" url="'+urlData[data.name]+'">\
	                            <span class="icon icon-edit"></span>'+data.name+'</a></li>';
	                            jiekuan_count++;
                            }
                        })
                        $('.menu-new').append('<li> <div class="menu-title row">\
                         <p class="col-xs-12">'+item.name+'</p></div> \
                         <ul class="menu-none"> '+ child_html +'</ul> \
                         </li>');
                        bindEvent();
                    });
                }
            },error:function(error){
                // alert(error.message);
            }
        });
    
}

init();
