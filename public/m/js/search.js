$(function(){
    var keyArr = [];
    // 给搜索按钮添加点击事件
    $('#search-btn').on('click', function(){
        // 获取用户输入的关键字
        // 判断是否确实输入了 没有则阻止跳转 并且给出提示
        // 输入了跳转到搜索结果页面 并且传过去关键字
        var keyword = $('#search-txt').val();
        if($.trim(keyword)){

            // 将输入的关键字存储到数组
            keyArr.unshift(keyword);
            //关键字数组存储到本地
            localStorage.setItem('keyArr', JSON.stringify(keyArr));
            // 跳转
            location.href = 'search-result.html?keyword=' + keyword;

        }else{
            alert('请输入商品关键字');
        }
    });

    // 实现关键字存储
    if(localStorage.getItem('keyArr')){
        keyArr = JSON.parse(localStorage.getItem('keyArr'));
        var html = template('historyTpl', {data: keyArr});
        $('#historyBox').html(html);
    }

    // 实现清空历史记录

    $('#clear-btn').on('click', function(){
        $('#historyBox').html("");
        localStorage.removeItem('keyArr');
        keyArr = [];
    })
});