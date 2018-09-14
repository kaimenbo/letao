$(function(){
    // 初始化区域滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    // 一级菜单
    $.ajax({
        url: '/category/queryTopCategory',
        type: 'get',
        success: function(response){

            var html=template('leftCate',{data:response.rows});
            $('.cate-first').html(html);

            // 如果一级分类有数据的话
            if(response.rows.length){
                // 给第一个一级分类添加选中状态
                $('.cate-first').find('a').eq(0).addClass('active');
                // 调用接口，获取数据
                getSecondCategory(1);
            }

            // 一级分类添加点击事件
            $('.cate-first').on('click', 'a', function(){
                // 获取当前点击的id
                var id = $(this).data('id');

                $(this).addClass('active').siblings().removeClass('active');

                // 调用接口，获取数据
                getSecondCategory(id);
            })
        }
    })
})

function getSecondCategory(id){
    $.ajax({
        url: '/category/querySecondCategory',
        type: 'get',
        data: {id: id},
        success: function(res){
            var html = template('rightCate', res);
            $('.category-right ul').html(html);

        }
    })
}