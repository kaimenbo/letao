$(function(){
    // 根据用户输入的关键字获取搜索结果
    var keyword = getParamByUrl(location.href, 'keyword');

    $.ajax({
        url: '/product/queryProduct',
        type: 'get',
        data: {
            proName: keyword,
            page: 1,
            pageSize: 6
        },
        success: function(response){
            var html = template('proTpl', response);
            $('.product ul').html(html);
        }
    })

});

// 获取地址栏中的参数

function getParamByUrl(url, name){
    var params = url.substr(url.indexOf('?')+1);
    var param = params.split('&');
    for(var i=0; i<param.length; i++){
        var current = param[i].split('=');
        if(current[0] == name){
            return current[1];
        }
    }
    return null;
}
